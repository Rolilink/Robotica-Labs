var express = require('express');
var five = require('johnny-five'),board,led,button;
var twitter = require('ntwitter');
var credentials = require('./credentials.js');
var app = express();

app.set('env','development');
var board = five.Board({
	debug:true
});

board.on('ready',function(){
	//led de status del server
	app.set('ledStatus',new five.Led({
		pin:11
	}));
	//led de twitter
	app.set('ledTweet',new five.Led({
		pin:12
	}));

	// reset led button
	app.set('btnReset',new five.Button({
		pin:10
	}));
	app.get('btnReset').on('down',function(){
		app.get('ledTweet').off();
	});
	//credenciales de el twitter api
	var t = new twitter({
		consumer_key: credentials.consumer_key,
		consumer_secret: credentials.consumer_secret,
		access_token_key: credentials.access_token_key,
		access_token_secret: credentials.access_token_secret
	});
	app.set('twitter',t);
	app.configure(function(){
		if(app.get('env')=='production'){

		}

		if(app.get('env')=='development'){
			
		}
});

app.listen(80,function(){
	app.get('ledStatus').on();

	app.get('twitter').stream(
		'statuses/filter',
		{
			track:'@rolilink'
		},
		function(stream){
			stream.on('data',function(tweet){
				app.get('ledTweet').on();
				console.log(tweet.text);
			});
		}
	);
});

});
