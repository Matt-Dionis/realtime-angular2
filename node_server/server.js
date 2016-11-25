const express = require('express');
const path = require('path');
const twit = require('twitter');

const app = express();
const router = express.Router();
const staticRoot = __dirname;
const twitter = new twit({
  consumer_key: TWITTER_CONSUMER_KEY,
  consumer_secret: TWITTER_CONSUMER_SECRET,
  access_token_key: TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET
});

app.set('port', (process.env.PORT || 3000));
app.use(express.static(staticRoot));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/stream', function(req, res, next) {
  twitter.stream('statuses/filter', {track: '#javascript'}, function(stream) {
    stream.on('data', function(tweet) {
      console.log(tweet.text);
    });

    stream.on('error', function(error) {
      throw error;
    });
  });
});

app.listen(app.get('port'), function() {
  console.log('app running on port', app.get('port'));
});
