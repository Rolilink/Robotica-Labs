//constantes
	int LED = 13;
// config
void setup(){
	// declara el pin del LED osea el 13 como pin de salida
	pinMode(LED,OUTPUT);


}

// main loop
void loop(){
	digitalWrite(LED,HIGH);
	delay(6000);
	digitalWrite(LED,LOW);
}