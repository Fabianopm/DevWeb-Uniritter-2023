/*Função criada para mostrar os numeros clicados;
Ela vai receber um parâmetro "num";*/
function insert(num) {
  var numero = document.getElementById("resultado").innerHTML;
  console.log("Cliquei no", num);
  document.getElementById("resultado").innerHTML +=
    num; /*+= num ---> numero + num*/
}

/*Funçaõ criada para apagar os numeros aparentes no visor*/
function clean() {
  document.getElementById("resultado").innerHTML = "";
}

/*Função criada para apagar caractere por caractere do último ao primeiro*/
function back() {
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(
    0, resultado.length - 1
  );
}

/*Funçaõ criada para realizar os calculos, usei o eval ela retorna o valor de retorno da função*/
function calcular() {
  var resultado = document.getElementById("resultado").innerHTML;
  if (resultado) {
    document.getElementById("resultado").innerHTML = eval(resultado);
  } else {
    document.getElementById("resultado").innerHTML = "Inválido";
  }
}
