var express = require('express');
var http = require('http');
var path = require('path');
var twit = require('twitter');

var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();
var staticRoot = __dirname;
var twitter = new twit({
  consumer_key: TWITTER_CONSUMER_KEY,
  consumer_secret: TWITTER_CONSUMER_SECRET,
  access_token_key: TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET
});

app.set('port', (port));
app.use(express.static(staticRoot));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

var server = http.createServer(app).listen(port, function() {
  console.log('Server listening on port ' + port);
});

var io = require('socket.io').listen(server);

app.get('/stream', function(req, res, next) {
  twitter.stream('statuses/filter', {track: '#javascript'}, function(stream) {
    stream.on('data', function(tweet) {
      io.emit('tweet', tweet);
      console.log(tweet.text);
    });

    stream.on('error', function(error) {
      throw error;
    });
  });
});
