import { pararCronometro, calcularTempoPercorrido } from "./cronometro.js";
import { verificarRespostas } from "./verificarRespostas.js";
import { perguntasHTML } from "./ques-html.js";
import { perguntasCSS } from "./ques-css.js";
import { perguntasJavaScript } from "./ques-js.js";
import { incluirDados } from "./resultadoQuiz.js";

const btnConcluir = document.querySelector("#btn-concluir");
const btnVerificar = document.querySelector("#btn-verificar")

export function verificarQuiz(nome, tema, data, dataAtual) {
    const dataFinal = new Date();
    const tempo = calcularTempoPercorrido(data, dataFinal);
    const tempoFormatado = `${tempo.minutos}:${tempo.segundos}`;
    btnConcluir.style.display = "flex";
    btnVerificar.style.display = "none";
    window.scrollTo(0, 0);
    pararCronometro();
    let pontuacao = 0;
    if(tema == "HTML"){
        pontuacao = verificarRespostas(perguntasHTML);
    } else if (tema == "CSS"){
        pontuacao = verificarRespostas(perguntasCSS);
    } else if (tema == "JavaScript"){
        pontuacao = verificarRespostas(perguntasJavaScript);
    }
    incluirDados(nome, tema, tempoFormatado, dataAtual, pontuacao);
    return pontuacao;
}
