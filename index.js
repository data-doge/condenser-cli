var GoogleSpreadsheet = require('google-spreadsheet')
var creds = require('./.credentials.json')
var doc = new GoogleSpreadsheet(creds.spreadsheet_key)

var type = process.argv[2]
var text = process.argv[3]

doc.useServiceAccountAuth(creds, function () {
  doc.getInfo(function (err, info) {
    if (err) throw err
    var sheet = info.worksheets[0]
    sheet.addRow({type: type, text: text}, function (err) {
      if (err) throw err

      console.log('added yall')
    })
  })
})
