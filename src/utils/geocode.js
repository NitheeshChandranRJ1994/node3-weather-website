const request = require('request')

const geocode = (address, callback) => {
  
    const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoibml0aGVlc2hjaGFuZHJhbnJqIiwiYSI6ImNrZHRxeHB0djIxODMyd3R2aXV1bjdnMTYifQ.01Bxg0k4OFNe8Jb9AnJJ1Q&limit=1'
  
    request({url, json: true},(error, { body }) => {
        if(error){
          callback('Unable to connect to location services', undefined)
        }
        else if(body.features.length === 0){
          callback('Unable to find location. Try another search', undefined)
        }
        else{
          callback(undefined, {
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0],
            location: body.features[0].place_name
          })
        }
    })
  
  }

  module.exports = geocode