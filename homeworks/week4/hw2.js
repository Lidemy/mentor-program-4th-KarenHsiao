const request = require('request')
const process = require('process')

const API = 'https://lidemy-book-store.herokuapp.com'
const action = process.argv[2]
const parameter = process.argv[3]

function list() {
  request(`${API}/books?_limit=20`, (err, res, body) => {
    if (err) {
      return console.log('ERROR')
    }
    let data
    try {
      data = JSON.parse(body)
    } catch (error) {
      console.log(error)
      return
    }
    for (let i = 0; i < data.length; i += 1) {
      console.log(`${data[i].id} ${data[i].name}`)
    }
    if (res.statusCode !== 200) return console.log(res.statusCode)
  })
}
function read(id) {
  request(`${API}/books/${id}`, (err, res, body) => {
    if (err) {
      return console.log('ERROR')
    }
    let data
    try {
      data = JSON.parse(body)
    } catch (error) {
      console.log(error)
      return
    }
    if (res.statusCode !== 200) return console.log(res.statusCode)
    console.log(`${data.id} ${data.name}`)
  })
}
function deleted(id) {
  request.delete(`${API}/books/${id}`, (err, res) => {
    if (err) {
      console.log(err)
    }
    if (res.statusCode !== 200) return console.log(res.statusCode)
    console.log('sucess delete')
  })
}
function create(bookName) {
  request.post({
    url: `${API}/books`,
    form: {
      name: bookName,
    },
  }, (err, res) => {
    if (err) {
      return console.log('ERROR')
    }
    if (res.statusCode !== 201) return console.log(res.statusCode)
    console.log('sucess create')
  })
}
function update(id, bookName) {
  request.patch({
    url: `${API}/books/${id}`,
    form: {
      name: bookName,
    },
  }, (err, res) => {
    if (err) {
      return console.log('ERROR')
    }
    if (res.statusCode !== 200) return console.log(res.statusCode)
    return console.log('sucess update')
  })
}

switch (action) {
  case 'list':
    list()
    break
  case 'read':
    read(parameter)
    break
  case 'delete':
    deleted(parameter)
    break
  case 'create':
    create(parameter)
    break
  case 'update':
    update(parameter, process.argv[4])
    break
  default:
    console.log('error input')
}
