$(document).ready(function(){

$('#ledon').click(function(){
	socket = io.connect('http://localhost');
	socket.emit('ledon');
});
$('#ledoff').click(function(){
	socket = io.connect('http://localhost');
	socket.emit('ledoff');
});
$('#ledstrobe').click(function(){
	socket = io.connect('http://localhost');
	socket.emit('ledstrobe');
});
})
