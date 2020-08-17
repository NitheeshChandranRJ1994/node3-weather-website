const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=df292dbea1273932deaab741380dd45c&query='+latitude+','+longitude+'&units=f'

    request({ url, json:true },(error, { body }) => {
    
        if(error){
        callback('Unable to connect to weather service', undefined)
        }else if(body.error){
        callback('Unable to find location', undefined)
        }else{
        callback(undefined, body.current.weather_descriptions[0] + '. It is currently '+ body.current.temperature + ' fahreinheat out and it feels like ' + body.current.feelslike + ' out ')
        }

    })  

}


module.exports = forecast