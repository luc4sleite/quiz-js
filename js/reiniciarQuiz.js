import { pararCronometro } from "./cronometro.js";

const html = document.querySelector("#HTML");
const css = document.querySelector("#CSS");
const js = document.querySelector("#JavaScript");
const ranking = document.querySelector(".resultado");
const reiniciarConcluirDiv = document.querySelector("#botoes");
const pagina = document.querySelector(".acesso-container");
const cronometroDisplay = document.querySelector("#cronometroDisplay");

export function reiniciarQuiz() {
    html.innerHTML = "";
    css.innerHTML = "";
    js.innerHTML = "";
    ranking.style.display = "none";
    reiniciarConcluirDiv.style.display = "none";
    pagina.style.display = "flex";
    pararCronometro();
    cronometroDisplay.style.display = "none";
}