import { exibePerguntas } from "./exibePerguntas.js";
import { perguntasHTML } from "./ques-html.js";
import { perguntasCSS } from "./ques-css.js";
import { perguntasJavaScript } from "./ques-js.js";
import { verificarRespostas } from "./verificarRespostas.js";
import { calcularTempoPercorrido, iniciarCronometro } from "./cronometro.js";
import { pararCronometro } from "./cronometro.js";
import { exibirRanking, exibirRankingTemas, incluirDados } from "./resultadoQuiz.js";

const campoNome = document.querySelector(".nome");
const btnAcesso = document.querySelector("#btn-inicio");
const pagina = document.querySelector(".acesso-container");
const quiz = document.querySelector("#tema-quiz");
const html = document.querySelector("#HTML");
const css = document.querySelector("#CSS");
const js = document.querySelector("#JavaScript");
const btnConcluir = document.querySelector("#btn-concluir");
const btnJogarNovamente = document.querySelector("#btn-jogar");
const btnVerificar = document.querySelector("#btn-verificar")
const reiniciarConcluirDiv = document.querySelector("#botoes");
const ranking = document.querySelector(".resultado");
const cronometroDisplay = document.querySelector("#cronometroDisplay");

function limparCampos() {
    campoNome.value = "";
    quiz.value = "selecione";
}

function desmarcarAlternativas() {
    const inputEl = document.querySelectorAll(".alternativa");
    for (let input of inputEl) {
        input.checked = false;
    }
}

function reiniciarQuiz() {
    html.innerHTML = "";
    css.innerHTML = "";
    js.innerHTML = "";
    ranking.style.display = "none";
    reiniciarConcluirDiv.style.display = "none";
    pagina.style.display = "flex";
    pararCronometro();
    cronometroDisplay.style.display = "none";
}


function concluirQuiz(tema, pontuacao) {
    exibirRanking(tema, pontuacao);
    exibirRankingTemas();
    desmarcarAlternativas();
    limparCampos();
    btnConcluir.style.display = "none";
    btnJogarNovamente.style.display = "flex";
    html.style.display = "none";
    css.style.display = "none";
    js.style.display = "none";
    window.scrollTo(0, 0);
}

function exibeTema(tema) {
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

function verificarQuiz(nome, tema, data, dataAtual) {
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

function iniciarQuiz() {
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const dataAtual = `${dia}/${mes}/${ano}`;

    if (quiz.value == "HTML" && campoNome.value != "") {
        exibeTema("HTML");
        
        btnVerificar.addEventListener("click", () => {
            const pontuacao = verificarQuiz(campoNome.value, quiz.value, data, dataAtual);
            btnConcluir.addEventListener("click", () => {
                concluirQuiz(quiz.value, pontuacao);
                btnJogarNovamente.addEventListener("click", () => {
                    reiniciarQuiz();
                });
            });
        })
    }
    else if (quiz.value == "CSS" && campoNome.value != "") {
        exibeTema("CSS");

        btnVerificar.addEventListener("click", () => {
            const pontuacao = verificarQuiz(campoNome.value, quiz.value, data, dataAtual);
            btnConcluir.addEventListener("click", () => {
                concluirQuiz(quiz.value, pontuacao);
                btnJogarNovamente.addEventListener("click", () => {
                    reiniciarQuiz();
                });
            });
        })
    } else if (quiz.value == "JavaScript" && campoNome.value != "") {
        exibeTema("JavaScript");

        btnVerificar.addEventListener("click", () => {
            const pontuacao = verificarQuiz(campoNome.value, quiz.value, data, dataAtual);
            btnConcluir.addEventListener("click", () => {
                concluirQuiz(quiz.value, pontuacao);

                btnJogarNovamente.addEventListener("click", () => {
                    reiniciarQuiz();
                });
            });
        })
    }
}

function validarNome() {
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

btnAcesso.addEventListener("click", validarNome);
btnAcesso.addEventListener("click", iniciarQuiz);
