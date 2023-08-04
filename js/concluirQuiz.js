import { exibirRanking } from "./resultadoQuiz.js";
import { exibirRankingTemas } from "./resultadoQuiz.js";

const html = document.querySelector("#HTML");
const css = document.querySelector("#CSS");
const js = document.querySelector("#JavaScript");
const btnConcluir = document.querySelector("#btn-concluir");
const btnJogarNovamente = document.querySelector("#btn-jogar");

export function concluirQuiz(nome, tema, pontuacao) {
    exibirRanking(pontuacao);
    exibirRankingTemas();
    desmarcarAlternativas();
    btnConcluir.style.display = "none";
    btnJogarNovamente.style.display = "flex";
    html.style.display = "none";
    css.style.display = "none";
    js.style.display = "none";
    window.scrollTo(0, 0);
}

function desmarcarAlternativas() {
    const inputEl = document.querySelectorAll(".alternativa");
    for (let input of inputEl) {
        input.checked = false;
    }
}