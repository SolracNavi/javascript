var exp = document.getElementById("expendio");
var papel = exp.getContext("2d");
var p = 0;


var bitcoin = {
  url: "https://bitcoin.es/wp-content/uploads/2018/11/bills-btc-696x348.png",
  cargaOk: false
};

var ethereum = {
  url: "https://bitcoin.es/wp-content/uploads/2018/11/bills-eth-696x348.png",
  cargaOk: false
};

var litecoin = {
  url: "https://bitcoin.es/wp-content/uploads/2018/11/bills-ltc-696x348.png",
  cargaOk: false
};

var monero = {
  url: "https://bitcoin.es/wp-content/uploads/2018/11/bills-xmr-696x348.png",
  cargaOk: false
};

var iota = {
  url: "https://bitcoin.es/wp-content/uploads/2018/11/bills-iota-696x348.png",
  cargaOk: false
};

var stellar = {
  url: "https://bitcoin.es/wp-content/uploads/2018/11/bills-lumen-696x348.png",
  cargaOk: false
};


bitcoin.imagen = new Image();
bitcoin.imagen.src = bitcoin.url;
bitcoin.imagen.addEventListener("load", cargarBitcoin);

ethereum.imagen = new Image();
ethereum.imagen.src = ethereum.url;
ethereum.imagen.addEventListener("load", cargarEthereum);

litecoin.imagen = new Image();
litecoin.imagen.src = litecoin.url;
litecoin.imagen.addEventListener("load", cargarLitecoin);

monero.imagen = new Image();
monero.imagen.src = monero.url;
monero.imagen.addEventListener("load", cargarMonero);

iota.imagen = new Image();
iota.imagen.src = iota.url;
iota.imagen.addEventListener("load", cargarIota);

stellar.imagen = new Image();
stellar.imagen.src = stellar.url;
stellar.imagen.addEventListener("load", cargarStellar);

function cargarBitcoin()
{
  bitcoin.cargaOk = true;
}

function cargarEthereum()
{
  ethereum.cargaOk = true;
}

function cargarLitecoin()
{
  litecoin.cargaOk = true;
}

function cargarMonero()
{
  monero.cargaOk = true;
}

function cargarIota()
{
  iota.cargaOk = true;
}

function cargarStellar()
{
  stellar.cargaOk = true;
}

var w = 120;
var r = 50;

function dibujarDinero(nombre, x, y)
{
  if (bitcoin.cargaOk)
  {
  papel.drawImage(nombre, x, y, w, r);
  }
  if (ethereum.cargaOk)
  {
    papel.drawImage(nombre, x, y, w, r);
  }
  if (litecoin.cargaOk)
  {
    papel.drawImage(nombre, x, y, w, r);
  }
  if (monero.cargaOk)
  {
    papel.drawImage(nombre, x, y, w, r);
  }
  if (iota.cargaOk)
  {
    papel.drawImage(nombre, x, y, w, r);
  }
  if (stellar.cargaOk)
  {
    papel.drawImage(nombre, x, y, w, r);
  }
}

class Billete
{
  constructor(n, v, c)
  {
    this.nombre = n;
    this.valor = v;
    this.cantidad = c;
  }
}

var imagenes = [];
imagenes["Bitcoin"] = bitcoin.imagen;
imagenes["Ethereum"] = ethereum.imagen;
imagenes["Litecoin"] = litecoin.imagen;
imagenes["Monero"] = monero.imagen;
imagenes["Iota"] = iota.imagen;
imagenes["Stellar"] = stellar.imagen;



function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {
    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);
      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }
      entregado.push( new Billete(bi.nombre,bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);
    }
  }
  if(dinero > 0)
  {
    resultado.innerHTML = "Soy un cajero malo y no puedo darte esa cifra";
  }
  else
  {
    for(var e of entregado)
    {
      if(e.cantidad > 0)
      {
        resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
        var z = imagenes[e.nombre]
        dibujarDinero(z,p,0);
        p+= 120;
      }
    }


  }

}

var caja = [];
var entregado = [];
caja.push( new Billete("Bitcoin",10000,10) );
caja.push( new Billete("Litecoin",250,10) );
caja.push( new Billete("Ethereum",100,30) );
caja.push( new Billete("Monero",50,10) );
caja.push( new Billete("Iota",10,10) );
caja.push( new Billete("Stellar",1,10) );
var dinero = 0;
var div = 0;
var papeles = 0;


var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
