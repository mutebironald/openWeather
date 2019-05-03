let request = require('request');
let argv =require('yargs').argv;


let city = argv.c||'kampala';
let apiKey = 'ec6453d5d5a5708944a6a616c8914dd1';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;


request(url, function(err, response, body){
    if(err){
        console.log('error: ', error);
    }else{
        weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }
})


