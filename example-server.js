/*
Node.js Express spaghetto  Server Example
*/
var express = require('express'), 
	routes = require('./routes'),
	connect = require('connect'),
	app = module.exports = express.createServer(),

	OAuth= require('oauth').OAuth;

var twitterConsumerKey = 'YOUR TWITTER API KEY',
	twitterConsumerSecret = 'YOUR TWITTER API CONSUMER SECRET',
	twitterAccessToken = 'YOUR TWITTER API ACCESSTOKEN',
	twitterAccessTokenSecret = 'YOUR TWITTER API TOKEN';

//Twitter
oAuth= new OAuth(
  "http://twitter.com/oauth/request_token",
  "http://twitter.com/oauth/access_token", 
  twitterConsumerKey, twitterConsumerSecret, 
  "1.0A", null, "HMAC-SHA1"
);

app.post('/tweetgrej', function(req,res){
	res.send('thanks!');
	
	var msg = JSON.parse(req.body.msg);

	oAuth.post(
		"http://api.twitter.com/1.1/statuses/update.json",
		twitterAccessToken, twitterAccessTokenSecret,
		{"status":"TweetGrej: "+ msg},
		function(error, data) {
			if(error) console.log(require('sys').inspect(error))
			else console.log(data)
		}
	);
});


app.listen(1337, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});