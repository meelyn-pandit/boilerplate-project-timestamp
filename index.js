// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();



// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  console.log('api hello req', req.params)
  res.json({greeting: 'hello API'});
});

app.get('/api/:date?', function (req, res) {
  console.log('req params', req.params)
  let params = req.params.date
  console.log('params', params)
  // let date_time = new Date(params)
  if (Number(params)) {
    let date_time = Number(params)
    console.log('date time', date_time)
    let unix = date_time
    res.json({unix: unix, utc: new Date(unix).toUTCString()})
  } else {
    let date_time = params
    console.log('date time', date_time)
    let unix = Date.parse(date_time)
    res.json({unix: unix, utc: new Date(unix).toUTCString()})

  }

})



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
