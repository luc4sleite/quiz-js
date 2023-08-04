import { iniciarCronometro } from "./cronometro.js";

const campoNome = document.querySelector(".nome");
const pagina = document.querySelector(".acesso-container");
const quiz = document.querySelector("#tema-quiz");
const btnVerificar = document.querySelector("#btn-verificar")
const reiniciarConcluirDiv = document.querySelector("#botoes");

export function validarNome() {
    const valor = campoNome.value;
    if (valor == "") {
        alert("Insira um nome");
    } else if (quiz.value == "selecione") {
        alert("Escolha o tema");
    } else {
        pagina.style.display = "none";
        iniciarCronometro();
        reiniciarConcluirDiv.style.display = "flex"
        btnVerificar.style.display = "flex";
    }
}