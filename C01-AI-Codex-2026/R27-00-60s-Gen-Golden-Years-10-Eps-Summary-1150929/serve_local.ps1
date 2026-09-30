param([int]$Port = 8899, [switch]$NoOpen)
$ErrorActionPreference = 'Stop'
$root = [System.IO.Path]::GetFullPath($PSScriptRoot)
if ($Port -eq 0) {
  $probe = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, 0)
  $probe.Start(); $Port = ([System.Net.IPEndPoint]$probe.LocalEndpoint).Port; $probe.Stop()
}
$prefix = "http://127.0.0.1:$Port/"
$listener = [System.Net.HttpListener]::new(); $listener.Prefixes.Add($prefix)
$mime = @{'.html'='text/html; charset=utf-8';'.js'='text/javascript; charset=utf-8';'.css'='text/css; charset=utf-8';'.json'='application/json; charset=utf-8';'.mp3'='audio/mpeg';'.srt'='text/plain; charset=utf-8';'.webp'='image/webp';'.png'='image/png';'.jpg'='image/jpeg';'.svg'='image/svg+xml';'.woff2'='font/woff2'}
try { $listener.Start() } catch { Write-Error "Local website could not start on port $Port. $($_.Exception.Message)"; exit 1 }
$url = "${prefix}index.html"
Write-Host "EP00 網站已啟動：$url"
Write-Host '保持此視窗開啟即可播放；按 Ctrl+C 停止。'
if (-not $NoOpen) { Start-Process $url }
$rootPrefix = $root.TrimEnd([char]92) + [char]92
$handler = {
  param($context, $rootPath, $safePrefix, $contentTypes)
  $request = $context.Request; $response = $context.Response; $stream = $null
  try {
    $relative = [Uri]::UnescapeDataString($request.Url.AbsolutePath.TrimStart('/').Replace('/', '\'))
    if ([string]::IsNullOrWhiteSpace($relative)) { $relative = 'index.html' }
    $file = [System.IO.Path]::GetFullPath((Join-Path $rootPath $relative))
    if (-not $file.StartsWith($safePrefix, [System.StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path -LiteralPath $file -PathType Leaf)) {
      $response.StatusCode = 404; $bytes = [System.Text.Encoding]::UTF8.GetBytes('Not found'); $response.ContentLength64 = $bytes.Length
      if ($request.HttpMethod -ne 'HEAD') { $response.OutputStream.Write($bytes,0,$bytes.Length) }
    } else {
      $info = [System.IO.FileInfo]::new($file); $response.ContentType = $contentTypes[$info.Extension.ToLowerInvariant()]
      if (-not $response.ContentType) { $response.ContentType = 'application/octet-stream' }
      $response.Headers['Accept-Ranges'] = 'bytes'; $start = 0L; $end = [long]$info.Length - 1; $range = $request.Headers['Range']
      if ($range -match '^bytes=(\d*)-(\d*)$') {
        if ($Matches[1]) { $start = [long]$Matches[1] }; if ($Matches[2]) { $end = [Math]::Min([long]$Matches[2],$end) }
        if (-not $Matches[1] -and $Matches[2]) { $length = [long]$Matches[2]; $start = [Math]::Max(0,$info.Length-$length); $end = $info.Length-1 }
        if ($start -gt $end -or $start -ge $info.Length) { $response.StatusCode = 416; $response.Headers['Content-Range'] = "bytes */$($info.Length)" }
        else { $response.StatusCode = 206; $response.Headers['Content-Range'] = "bytes $start-$end/$($info.Length)" }
      }
      if ($response.StatusCode -ne 416) {
        $count = [Math]::Max(0L,$end-$start+1); $response.ContentLength64 = $count
        if ($request.HttpMethod -ne 'HEAD') {
          $stream = [System.IO.File]::OpenRead($file); [void]$stream.Seek($start,[System.IO.SeekOrigin]::Begin); $buffer = New-Object byte[] 65536
          while ($count -gt 0) { $read = $stream.Read($buffer,0,[int][Math]::Min($buffer.Length,$count)); if ($read -le 0) { break }; $response.OutputStream.Write($buffer,0,$read); $count -= $read }
        }
      }
    }
  } catch { try { $response.StatusCode = 500 } catch {} } finally { if ($stream) { $stream.Dispose() }; $response.Close() }
}
$pool = [System.Management.Automation.Runspaces.RunspaceFactory]::CreateRunspacePool(2, 16)
$pool.Open(); $workers = [System.Collections.ArrayList]::new()
try {
  while ($listener.IsListening) {
    $context = $listener.GetContext(); $worker = [PowerShell]::Create(); $worker.RunspacePool = $pool
    [void]$worker.AddScript($handler).AddArgument($context).AddArgument($root).AddArgument($rootPrefix).AddArgument($mime)
    $async = $worker.BeginInvoke(); [void]$workers.Add([pscustomobject]@{ PowerShell = $worker; Async = $async })
    for ($i = $workers.Count - 1; $i -ge 0; $i--) {
      if ($workers[$i].Async.IsCompleted) { try { $workers[$i].PowerShell.EndInvoke($workers[$i].Async) } catch {}; $workers[$i].PowerShell.Dispose(); $workers.RemoveAt($i) }
    }
  }
} finally {
  $listener.Stop(); $listener.Close()
  foreach ($item in $workers) { try { $item.PowerShell.EndInvoke($item.Async) } catch {}; $item.PowerShell.Dispose() }
  $pool.Close(); $pool.Dispose()
}
