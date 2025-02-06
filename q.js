
var raio = prompt("Informe o raio do circurlo"); 6
function areaCirculo( raio){

    return Math.PI * Math.pow(raio,2)//Usei as funções de pi e de potência 
   
}/// Utilizei como exemplo 
 var resultado = areaCirculo(raio);///Atribui o resultado da função para variável resultado

 alert("Área desse circulo "+ resultado.toFixed(2));
