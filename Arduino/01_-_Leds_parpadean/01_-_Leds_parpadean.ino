int amarillo = 13;
int rojo = 7;
int milisegundos = 100;

void setup()
{
  pinMode(amarillo, OUTPUT);
  pinMode(rojo, OUTPUT);
}

void loop()
{
  digitalWrite(amarillo, HIGH);
  digitalWrite(rojo, LOW);
  delay(milisegundos);
  digitalWrite(amarillo, LOW);
  digitalWrite(rojo, HIGH);
  delay(milisegundos);
}
