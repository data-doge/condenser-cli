var GoogleSpreadsheet = require('google-spreadsheet')
var creds = require('./.credentials.json')

var doc = new GoogleSpreadsheet(creds.spreadsheet_key)

doc.useServiceAccountAuth(creds, function () {
  doc.getInfo(function (err, info) {
    if (err) throw err
    var sheet = info.worksheets[0]
    sheet.getRows(function (err, rows) {
      console.log('rows: ', rows)
    })
  })
})
