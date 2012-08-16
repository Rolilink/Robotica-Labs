//constants
int LED = 13;
int BUTTON = 7;
int gBUTTON;
//configs
void setup(){
	pinMode(LED,OUTPUT);
	pinMode(BUTTON,INPUT);
        gBUTTON = LOW;
}

//main
void loop(){
	int buttonstate = digitalRead(BUTTON);
	if(buttonstate == HIGH){
		if(gBUTTON == LOW){
			gBUTTON = HIGH;
		}else{
			gBUTTON = LOW;
		}
                delay(600);
	}
	digitalWrite(LED,gBUTTON);
}
