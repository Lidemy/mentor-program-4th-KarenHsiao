const request = require('request')
const process = require('process')

const API = 'https://restcountries.eu/rest/v2/'
const name = process.argv[2]

request(`${API}name/${name}`,
  (error, response, body) => {
    if (error) return console.log('ERROR')
    if (response.statusCode !== 200) return console.log(response.statusCode)
    let data
    try {
      data = JSON.parse(body)
    } catch (err) {
      console.log(err)
      return
    }
    for (let i = 0; i < data.length; i += 1) {
      const money = data[i].currencies
      const telNumber = data[i].callingCodes
      console.log(`國家: ${data[i].name}
首都: ${data[i].capital}
貨幣: ${money[0].code}
國碼: ${telNumber[0]}
`)
    }
  })
