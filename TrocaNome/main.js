function inverterFrase(inputFrase, resultado) {
  const input = document.getElementById("inputFrase");
  const fraseOriginal = input.value;
  const fraseInvertida = fraseOriginal.split(" ").reverse().join(" ");
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = fraseInvertida;
}