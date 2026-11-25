function tabuada(n1, limite) {
    const lista = document.getElementById("resultado");
    lista.innerHTML = "";
    for (let i = 0; i <= limite.value; i++) {
        const li = document.createElement("li");
        li.textContent = `${n1.value} x ${i} = ${n1.value * i}`;
        lista.appendChild(li);
    }
}

const btn = document.getElementById("boton")

btn.addEventListener("click", function () {
const n1 = document.getElementById("n1")
const limite = document.getElementById("limite")
  if (n1.value === "") {
    resultado.textContent = "Por favor, preencha o campo.";
    resultado.className = "erro";
    return;
  }

  tabuada(n1, limite);

});