 var express = require('express'),
    request = require('request'),
     app     = express(),
     server;

 var static = require('serve-static');
//
// app.engine('ejs', require('ejs').renderFile);
// app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
 // app.use(serve-static(__dirname, {index: [home.html]}))




app.get('/representatives/:state',
  findRepresentativesByState,
  jsonResponse
  // sendData
);

app.get('/senators/:state',
  findSenatorsByState,
  jsonResponse
);

app.get('/', function(req, res, next){
  res.sendfile('./public/home.html')
});

// function sendData(req,res, next) {
//     console.log(req.params.zip);
//      var query = City.find({"zip" : req.params.zip})
//      query.exec(function(err, city) {
//         if (err)
//             res.send(err);
//         console.log(city);
//         res.json(city);
//     });
// }

function findRepresentativesByState(req, res, next) {
  var url = 'http://whoismyrepresentative.com/getall_reps_bystate.php?state={0}&output=json'.replace('{0}', req.params.state);
  request(url, handleApiResponse(res, next));
}

function findSenatorsByState(req, res, next) {
  var url = 'http://whoismyrepresentative.com/getall_sens_bystate.php?state={0}&output=json'.replace('{0}', req.params.state);
  request(url, handleApiResponse(res, next));
}

function handleApiResponse(res, next) {
  return function(err, response, body){
    if (err || body[0] === "<") {
      res.locals = {
        success: false,
        error: err || 'Invalid request. Please check your state variable.'
      };
      return next();
    }
    res.locals = [{
      success: true,
      results: JSON.parse(body).results
    }]
    return next();
  };
}

function jsonResponse(req, res, next) {
  res.jsonp(res.locals)  //res.locals
}

// function getPage(req, res, next){
//   var json = JSON.parse(JSON.stringify((res.locals).results));
//   // json = json.slice(1, -1);
//   // json = JSON.parse(json)
//   res.render('reps', {
//     json: json
//   })
// }

server = app.listen(3000, function() {
  var host = server.address().address,
      port = server.address().port;

  console.log('API listening at http://%s:%s', host, port);
});
