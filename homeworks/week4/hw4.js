const request = require('request')

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    'Client-ID': 'y67umroy0gkuh37hfdjh5bnfdybge4',
    Accept: 'application/vnd.twitchtv.v5+json',
  },
}
function callback(error, response, body) {
  const data = JSON.parse(body)
  const topData = data.top
  if (error) return console.log('ERROR')
  if (response.statusCode !== 200) return console.log(response.statusCode)
  for (let i = 0; i < topData.length; i += 1) {
    const { game: { name } } = topData[i]
    const viewer = topData[i].viewers
    console.log(`${name} ${viewer}`)
  }
}
request(options, callback);
