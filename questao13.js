var raio = prompt("Informe o raio do circurlo");

function areaCirculo(raio) {
  if (raio < 0) {
    alert("O raio não pode ser negatvio !!");
    return;
  } else {
    return Math.PI * Math.pow(raio, 2); //Usei as funções de pi e de potência
  }
}
var resultado = areaCirculo(raio); ///Atribui o resultado da função para variável resultado

alert("Área desse circulo " + resultado.toFixed(2));
