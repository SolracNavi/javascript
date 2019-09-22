var botones = {
  LEFT: 1,
  RIGHT: 2,
  CENTER: 4
};

document.addEventListener("mousedown", dibujarMouse);
var pizarra = document.getElementById("area_de_dibujo");
var papel = pizarra.getContext("2d");
var x = 150
var y = 150

dibujarLinea ("green", x-1, y-1, x+1, y+1, papel);

function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarMouse(evento)
{
  colour1 = "green";
  colour2 = "black";
  colour3 = "red";
  switch (evento.buttons) {
    case botones.LEFT:
        dibujarLinea (colour1, x, y, evento.x, evento.y, papel);
        x=evento.x;
        y=evento.y;
    break;
    case botones.RIGHT:
        dibujarLinea (colour2, x, y, evento.x, evento.y, papel);
        x=evento.x;
        y=evento.y;
    break;
    case botones.CENTER:
        dibujarLinea(colour3, x, y, evento.x, evento.y, papel);
        x=evento.x;
        y=evento.y;
    break;
  }

}

z = Math.ceil((Math.random(0.1, 0.4)) * 100);
console.log(z);
