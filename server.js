const express = require('express');
const bodyParser = require('body-parser');
const app =express();

const request = require('request');




let apiKey = 'ec6453d5d5a5708944a6a616c8914dd1';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    // res.send('Hello World!');
    res.render('index');
})
.post('/', function(req, res){
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    request(url, function(err, response, body){
        if(err){
            res.render('index', {weather: null, error: 'Error, please try again'});
        }else{
            let weather =JSON.parse(body)
            if(weather.main == undefined){
                res.render('index', {weather: null, error: 'Error, please try again'});
            }else {
                let weatherText = `It's ${weather.main.temp} degreesin ${weather.name}!`;
                res.render('index', {weather: weatherText, error:null});
            }
        }
    });


    // res.render('index');
    // console.log(req.body.city);
});

app.listen(3000, function(){
    console.log('listening on port 3000')
})
