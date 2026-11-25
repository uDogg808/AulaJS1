const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

function soma(num1, num2) {
    return (num1 + num2);
}

function subtracao(num1, num2) {
    return (num1 - num2);
}

function multiplicacao(num1, num2) {
    return (num1 * num2);
}

function divisao(num1, num2) {
    return (num1 / num2);
}

const btnsoma = document.getElementById("soma");
const btnsub = document.getElementById("sub");
const btnmulti = document.getElementById("multi");
const btndivi = document.getElementById("divi");
const resultado = document.getElementById("resultado");

btnsoma.addEventListener("click", function () {
    if (num1.value === "" || num1.value === "") {
        resultado.textContent = "Por favor, preencha os campos.";
        resultado.className = "erro";
        return;
    }

    const resultado_operacao = soma(
        Number(num1.value),
        Number(num2.value)
    );
    resultado.textContent = `resultado da soma: ${resultado_operacao}`;
});

btnsub.addEventListener("click", function () {
    if (num1.value === "" || num1.value === "") {
        resultado.textContent = "Por favor, preencha os campos.";
        resultado.className = "erro";
        return;
    }

    const resultado_operacao = subtracao(
        Number(num1.value),
        Number(num2.value)
    );
    resultado.textContent = `resultado da subtração: ${resultado_operacao}`;
});

btndivi.addEventListener("click", function () {
    if (num1.value === "" || num1.value === "") {
        resultado.textContent = "Por favor, preencha os campos.";
        resultado.className = "erro";
        return;
    } else if (num2.value === "0") {
        resultado.textContent = "não é possivel dividir por 0 seu imbecil.";
        resultado.className = "erro";
        return;
    }

    const resultado_operacao = divisao(
        Number(num1.value),
        Number(num2.value)
    );
    resultado.textContent = `resultado da divisão: ${resultado_operacao}`;
});

btnmulti.addEventListener("click", function () {
    if (num1.value === "" || num1.value === "") {
        resultado.textContent = "Por favor, preencha os campos.";
        resultado.className = "erro";
        return;
    }

    const resultado_operacao = multiplicacao(
        Number(num1.value),
        Number(num2.value)
    );
    resultado.textContent = `resultado da multiplicação: ${resultado_operacao}`;
});