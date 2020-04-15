const request = require('request')

const forecast  = (longitude, latitude, callback) =>{
    const url =
    'https://api.darksky.net/forecast/14e4b4c0bddb25d44eb99d5b2de77e04/'+longitude+','+latitude+'?units=si';

    request({ url, json: true }, (error, {body}) => {
        if(error){
            callback('Unable to connect to service', undefined);
        }else if (body.error) {
            callback('Unable to find the location', undefined);
        }else{
            callback(undefined,
                body.daily.data[0].summary +
                  " It is currently " +
                  body.currently.temperature +
                  " degrees out. There is " +
                  body.currently.precipProbability * 100 +
                  "% chances of rain"
              );
        }
    });
}

module.exports = forecast