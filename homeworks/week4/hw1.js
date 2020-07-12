const request = require('request')

const API = 'https://lidemy-book-store.herokuapp.com'
request(`${API}/books?_limit=10`, (error, response, body) => {
  if (error) {
    return console.log('錯誤', error)
  }
  let json
  try {
    json = JSON.parse(body)
  } catch (err) {
    console.log(err)
    return
  }
  for (let i = 0; i < json.length; i += 1) {
    console.log(`${json[i].id} ${json[i].name}`)
  }
})
