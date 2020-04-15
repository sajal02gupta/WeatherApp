const request = require('request')

const geocode = (address, callback) =>{
    const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2FqYWxnIiwiYSI6ImNrN2dhbm9oeDAyY3gza29iZGtlNjNlMmUifQ.w7L1q4hUD07m6Yx1nGJ4Ng';
    
    request({ url: geocodeurl, json: true }, (error,{body} ) => {
        if (error) {
            callback('Unable to connect to services', undefined);
        }else if (body.error) {
            callback('Unable to connect the location', undefined);
        }else {
            callback(undefined,{
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            }
            );
        }
    });
}

module.exports = geocode