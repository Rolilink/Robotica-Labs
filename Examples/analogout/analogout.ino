//variables 
int LED = 10;
//config
void setup(){
	pinMode(LED,OUTPUT);
}
//main
void loop(){
 	for(int i=0;i<=255;i++){
		analogWrite(LED,i);
		delay(10);
	}
	for(int i=255;i>=0;i--){
		analogWrite(LED,i);
		delay(10);
	}
}
