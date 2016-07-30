#!/usr/bin/env node

var GoogleSpreadsheet = require('google-spreadsheet')
var creds = require('./.credentials.json')
var doc = new GoogleSpreadsheet(creds.spreadsheet_key)

var type = process.argv[2]
var text = process.argv[3]

switch (type) {
  case '+':
    type = 'positive'; break
  case '-':
    type = 'negative'; break
  default:
    throw 'ur type is fucked brah'
}

if (text[text.length - 1] !== '.') {
  text += '.'
}

doc.useServiceAccountAuth(creds, function () {
  doc.getInfo(function (err, info) {
    if (err) throw err
    var sheet = info.worksheets[0]
    var row = { type: type, text: text }
    sheet.addRow(row, function (err) {
      if (err) throw err

      console.log('added yall')
    })
  })
})
