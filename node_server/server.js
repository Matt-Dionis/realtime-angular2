const express = require('express');

const app = express();
const staticRoot = __dirname;

app.set('port', (process.env.PORT || 3000));

app.use(express.static(staticRoot));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(app.get('port'), function() {
  console.log('app running on port', app.get('port'));
});
