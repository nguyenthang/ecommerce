/* Server file */

var express = require('express'),
    app = express();

app.set('port', process.env.PORT || 3000);

app.

var server = app.listen(app.get('port'), function(){
  console.log('The server is running on: ' + app.get('address') + '/' + app.get('port'));
});
