import { exibePerguntas } from "./exibePerguntas.js";
import { perguntasHTML } from "./ques-html.js";
import { perguntasCSS } from "./ques-css.js";
import { perguntasJavaScript } from "./ques-js.js";

const html = document.querySelector("#HTML");
const css = document.querySelector("#CSS");
const js = document.querySelector("#JavaScript");
const btnConcluir = document.querySelector("#btn-concluir");
const btnJogarNovamente = document.querySelector("#btn-jogar");

export function exibeTema(tema) {
    btnJogarNovamente.style.display = "none";
    btnConcluir.style.display = "none";
    if(tema == "HTML"){
        html.style.display = "flex";
        css.innerHTML = "";
        js.innerHTML = "";
        exibePerguntas(perguntasHTML, "HTML");
    } else if (tema == "CSS"){
        css.style.display = "flex";
        html.innerHTML = "";
        js.innerHTML = "";
        exibePerguntas(perguntasCSS, "CSS");
    } else if (tema == "JavaScript"){
        js.style.display = "flex";
        html.innerHTML = "";
        css.innerHTML = "";
        exibePerguntas(perguntasJavaScript, "JavaScript");
    }
}