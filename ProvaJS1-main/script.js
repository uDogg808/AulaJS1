// Funções puras (recebem parâmetros e retornam resultados sem acessar a página)
function calcularDesconto(valor) {
    if (valor >= 200) {
        return valor * 0.10;
    }
    return 0;
}

function calcularParcela(total, parcelas) {
    return total / parcelas;
}

function classificarCompra(total) {
    if (total >= 500) {
        return "Compra grande";
    } else if (total >= 200) {
        return "Compra média";
    } else {
        return "Compra pequena";
    }
}

// Evento de clique no botão
document.getElementById("btnSimular").addEventListener("click", function () {
    const valorTexto = document.getElementById("inputValor").value.trim();
    const parcelasTexto = document.getElementById("inputParcelas").value.trim();
    const resumo = document.getElementById("resumo");
    const listaParcelas = document.getElementById("parcelas");

    // Limpa a lista antes de cada nova simulação
    listaParcelas.innerHTML = "";

    // Validação 1: campo vazio
    if (valorTexto === "" || parcelasTexto === "") {
        resumo.textContent = "Por favor, preencha todos os campos.";
        resumo.className = "erro";
        return;
    }

    const valor = Number(valorTexto);
    const numParcelas = Number(parcelasTexto);

    // Validação 2: valor menor ou igual a zero
    if (valor <= 0) {
        resumo.textContent = "Informe um valor maior que zero.";
        resumo.className = "erro";
        return;
    }

    // Validação 3: parcelas menor que 1 ou maior que 12
    if (numParcelas < 1 || numParcelas > 12 || !Number.isInteger(numParcelas)) {
        resumo.textContent = "Escolha de 1 a 12 parcelas.";
        resumo.className = "erro";
        return;
    }

    // Cálculos usando as funções
    const desconto = calcularDesconto(valor);
    const total = valor - desconto;
    const valorParcela = calcularParcela(total, numParcelas);
    const classificacao = classificarCompra(total);

    // Define a classe de cor conforme a classificação
    if (classificacao === "Compra grande") {
        resumo.className = "grande";
    } else if (classificacao === "Compra média") {
        resumo.className = "media";
    } else {
        resumo.className = "pequena";
    }

    // Exibe o resumo formatado
    resumo.textContent = `Total com desconto: R$ ${total.toFixed(2)} (desconto de R$ ${desconto.toFixed(2)}) - ${classificacao}`;

    // Laço for para gerar a lista de parcelas
    for (let i = 1; i <= numParcelas; i++) {
        const item = document.createElement("li");
        item.textContent = `Parcela ${i} de ${numParcelas}: R$ ${valorParcela.toFixed(2)}`;
        listaParcelas.appendChild(item);
    }
});
