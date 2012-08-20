var express = require('express');
var five = require('johnny-five'),board,led;
var jade = require('jade');
var http = require('http');
var app = express();
var server = http.createServer(app);
var sockets = require('socket.io').listen(server);

app.set('env','development');
app.set('ledstrobing',false);
var board = five.Board({
	debug:true
});

board.on('ready',function(){
	app.configure(function(){
	app.set('led',new five.Led({
		pin:13
	}));
	app.set('statusled',new five.Led({
		pin:12
	}));
	app.use(express.static(__dirname + '/www'));
	app.engine('html', jade.__express);
	
	sockets.sockets.on('connection',function(socket){
		// ledon
		socket.on('ledon',function(data){
			app.get('led').on();
		});
		// ledoff
		socket.on('ledoff',function(data){
			app.get('led').off();
		});
		// ledstrobe
		socket.on('ledstrobe',function(data){
			if(app.get('ledstrobing')){
				app.get('led').stop();
				app.get('led').off();
				app.set('ledstrobing',false);	
			}
			else{
				app.get('led').strobe();
				app.set('ledstrobing',true);	
			}
			
		});
	})
	if(app.get('env')=='production'){

	}

	if(app.get('env')=='development'){
		
	}
});

app.get('/',function(req,res){
	res.render(__dirname + '/www/index.html')
});

server.listen(80,function(){
	app.get('statusled').on();
});

});
