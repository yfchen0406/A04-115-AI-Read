"""Local preview server with HTTP byte-range support for long MP3 seeking."""
from __future__ import annotations

import os
import re
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class RangeHandler(SimpleHTTPRequestHandler):
    range_start: int | None = None
    range_end: int | None = None

    def send_head(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()
        try:
            source = open(path, "rb")
        except OSError:
            self.send_error(404, "File not found")
            return None
        size = os.fstat(source.fileno()).st_size
        self.range_start = self.range_end = None
        match = re.match(r"bytes=(\d*)-(\d*)", self.headers.get("Range", ""))
        if match:
            start = int(match.group(1) or 0)
            end = int(match.group(2) or size - 1)
            if start >= size or start > end:
                source.close()
                self.send_error(416, "Requested Range Not Satisfiable")
                return None
            self.range_start, self.range_end = start, min(end, size - 1)
            self.send_response(206)
            self.send_header("Content-Range", f"bytes {self.range_start}-{self.range_end}/{size}")
            self.send_header("Content-Length", str(self.range_end - self.range_start + 1))
        else:
            self.send_response(200)
            self.send_header("Content-Length", str(size))
        self.send_header("Content-type", self.guess_type(path))
        self.send_header("Accept-Ranges", "bytes")
        self.end_headers()
        return source

    def copyfile(self, source, outputfile):
        if self.range_start is None:
            return super().copyfile(source, outputfile)
        source.seek(self.range_start)
        remaining = self.range_end - self.range_start + 1
        while remaining:
            block = source.read(min(64 * 1024, remaining))
            if not block:
                break
            outputfile.write(block)
            remaining -= len(block)


if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    print("Open http://127.0.0.1:8000/index.html")
    ThreadingHTTPServer(("127.0.0.1", 8000), RangeHandler).serve_forever()
