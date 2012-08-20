var five = require("johnny-five"),
    board, led;
var led;
board = new five.Board({
  debug: true
});

board.on("ready", function() {

  led = new five.Led({
    pin: 9
  });
  
  led.strobe(100);
});