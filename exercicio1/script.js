// ----- Funções: só recebem valores e devolvem um resultado (não mexem na página) -----
function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

function situacaoDoAluno(media) {
  if (media >= 6) {
    return "Aprovado";
  }
  return "Reprovado";
}

// Desafio: devolve a classe CSS de acordo com a situação
function corDaSituacao(situacao) {
  if (situacao === "Aprovado") {
    return "sucesso";
  }
  return "erro";
}

// ----- Evento: lê os campos, chama as funções e mostra o resultado -----
const botao = document.getElementById("btnMedia");
const inputNota1 = document.getElementById("nota1");
const inputNota2 = document.getElementById("nota2");
const inputNota3 = document.getElementById("nota3");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {
  if (inputNota1.value === "" || inputNota2.value === "" || inputNota3.value === "") {
    resultado.textContent = "Por favor, preencha as três notas.";
    resultado.className = "erro";
    return;
  }

  const media = calcularMedia(
    Number(inputNota1.value),
    Number(inputNota2.value),
    Number(inputNota3.value)
  );
  const situacao = situacaoDoAluno(media);

  resultado.textContent = `Média: ${media.toFixed(1)} - ${situacao}`;
  resultado.className = corDaSituacao(situacao);
});
