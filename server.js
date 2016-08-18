/* Server file */

var express = require('express'),
    app = express(),
    config = require('./server/config/configure');

app.use(express.static(__dirname + '/client/'));
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});

var server = app.listen(app.get('port'), function(){
  console.log('The server is running on: ' + server.address().port);
});
