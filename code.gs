function myFunction() {
  // PDF取得
  var sheet = SpreadsheetApp.getActiveSheet()
  var url = sheet.getRange(1, 1).getValue()  // あらかじめサンプルのURLを入力している前提
  var pdf = UrlFetchApp.fetch(url).getAs('application/pdf')
  
  // Googleドライブへ保存 (ルートディレクトリに保存)
  DriveApp.createFile(pdf)
  
  // 完了メッセージ
  Browser.msgBox("Complete", Browser.Buttons.OK)
}
