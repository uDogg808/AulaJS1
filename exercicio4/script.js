function contagem(n1) {
    let lista = []
    let n = n1.value
    while (n > 0) {
        lista.push(n);
        n--;
    }
    lista.push("fim!")
    return lista;
}

function somatotal(lista) {
    let soma = 0;
    lista.splice(-1)
    for (let i = 0; i < lista.length; i++) {
        soma += Number(lista[i]);
    }
    return soma;
}

const botao = document.getElementById("boton");
const num1 = document.getElementById("n1");
const resultado = document.getElementById("resultado");
const soma = document.getElementById("soma");

botao.addEventListener("click", function () {
    if (n1.value === "") {
        resultado.textContent = "Por favor, preencha o campo.";
        resultado.className = "erro";
        return;
    }

    const lista = contagem(n1);
    resultado.textContent = lista;
    const soma2 = somatotal(lista);
    soma.textContent = soma2;
});