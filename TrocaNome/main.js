function inverterFrase(inputFrase, resultado) {
  const input = document.getElementById("inputFrase");
  const fraseOriginal = input.value; //Pegar o valor da frase digitada
  const fraseInvertida = fraseOriginal.split(" ").reverse().join(" "); //split para dividir a string e coloca-la em um array,
  //reverse para iverter os itens do array. E o Joim para juntar todos os elementos do array em uma string e retorna a mesma.
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = fraseInvertida; //Mostrar o resultado na tela.
}