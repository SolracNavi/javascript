document.addEventListener("keyup", moverCerdo);
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}
var vp = document.getElementById("villapoban");
var papel = vp.getContext("2d");
var fondo = new Image();
fondo.addEventListener("load", cargarFondo);
var x = 150;
var y = 150;
var fondo = {
  url: "tile.png",
  cargaOK: false
};
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};
var pollo = {
  url: "pollo.png",
  cargaOK: false
};
/*Creo una variable para que haga random en la primera pasada y poder agregar un "else"  para que las pasadas posteriores no sean random*/
var primeraPasadaVacas = true;
var primeraPasadaPollos = true;
/*Creo dos arreglos para recordar las posiciones de las vacas y los pollos en pasadas posteriores a la primera*/
var todasLasVacas = [];
var todosLosPollos = [];



fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarCerdo()
{
  cerdo.cargaOK = true;
  dibujar();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}
function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    if (primeraPasadaVacas)
    {
        for(var v=0; v < 10; v++)
        {
        var x = aleatorio(0,7);
        var y = aleatorio(0,7);
        var x = x * 60;
        var y = y * 60;
        papel.drawImage(vaca.imagen, x, y);
        /*Agrego las posiciones x e y de cada vaca en el arreglo*/
        todasLasVacas.push(x, y);
        }
        primeraPasadaVacas = false;
    }
    else {
      for (var i = 0; i < todasLasVacas.length; i=i+2)
      {
        x=todasLasVacas[i];
        y=todasLasVacas[i+1];
        papel.drawImage(vaca.imagen, x, y);
      }
    }
  }
  if(cerdo.cargaOK)
  {
    movimiento = 7;
      moverCerdo(movimiento);
  }
  if(pollo.cargaOK)
  {
    if (primeraPasadaPollos)
    {
        for(var v=0; v < 7; v++)
        {
        var x = aleatorio(0,7);
        var y = aleatorio(0,7);
        var x = x * 60;
        var y = y * 60;
        papel.drawImage(pollo.imagen, x, y);
        /*Agrego las posiciones x e y de cada pollo en el arreglo*/
        todosLosPollos.push(x, y);
        }
        primeraPasadaPollos = false;
    }
    else {
      for (var i = 0; i < todosLosPollos.length; i=i+2)
      {
        x=todosLosPollos[i];
        y=todosLosPollos[i+1];
        papel.drawImage(pollo.imagen, x, y);
      }
    }
  }
}

function moverCerdo (evento)
{
  var movimiento = 7;
  switch (evento.keyCode)
  {
    case teclas.UP:
    y = y - movimiento;
    dibujar();
    break;
    case teclas.DOWN:
    y = y + movimiento;
    dibujar();
    break;
    case teclas.LEFT:
    x = x - movimiento;
    dibujar();
    break;
    case teclas.RIGHT:
    x = x + movimiento;
    dibujar();
    break;
    default:
    papel.drawImage(cerdo.imagen, x, y);
  }
}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min +1)) + min;
  return resultado;
}
