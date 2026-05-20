function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
                .getSheetByName('usage_log');
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.log_id, data.date, data.account_id,
                   data.platform_id, data.count, data.note, data.created_at]);
  return ContentService.createTextOutput('OK');
}

function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
                .getSheetByName(e.parameter.sheet || 'usage_log');
  const data = sheet.getDataRange().getValues();
  return ContentService.createTextOutput(JSON.stringify(data))
         .setMimeType(ContentService.MimeType.JSON);
}