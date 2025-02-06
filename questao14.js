
var  num = prompt("Informe um número :");
var  num2 = prompt("Informe um número :");

function soma(num , num2){///Função de soma, onde tem como parâmetros os dois números que serão somados

    return Number(num) + Number(num2);///Retorna a soma dos numeros
///O uso do Number foi necessário , pois retornaria a concatenação de dois números
}


 alert("A soma desses números é "+soma(num,num2));///Chama a função , passa os parâmetros e printa na tela o valor da soma
