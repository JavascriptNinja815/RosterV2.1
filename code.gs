function doGet() {
  return HtmlService.createTemplateFromFile('index.html')
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getDataByDate() {
  return SpreadsheetApp
  .openById('1-HmBSO0ViOWjC4ttaAxOZ1sygnfWmKvMJBswBRyouQA')
  .getSheetByName('Form Responses 1')
  .getRange('A4:J')
  .getValues();
}
