import { exibePerguntas } from "./exibePerguntas.js";
import { perguntasHTML } from "./ques-html.js";
import { perguntasCSS } from "./ques-css.js";
import { perguntasJavaScript } from "./ques-js.js";
import { verificarRespostas } from "./verificarRespostas.js";
import { calcularTempoPercorrido, iniciarCronometro } from "./cronometro.js";
import { pararCronometro } from "./cronometro.js";
import { exibirRanking, incluirDados } from "./resultadoQuiz.js";

const campoNome = document.querySelector(".nome");
const btnAcesso = document.querySelector("#btn-inicio");
const pagina = document.querySelector(".acesso-container");
const quiz = document.querySelector("#tema-quiz");
const html = document.querySelector("#HTML");
const css = document.querySelector("#CSS");
const js = document.querySelector("#JavaScript");
const btnConcluir = document.querySelector("#btn-concluir");
const btnJogarNovamente = document.querySelector("#btn-jogar")
const reiniciarConcluirDiv = document.querySelector("#botoes");
const ranking = document.querySelector(".resultado");
const cronometroDisplay = document.querySelector("#cronometroDisplay");

function iniciarQuiz(){
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const dataAtual = `${dia}/${mes}/${ano}`;


    if(quiz.value == "HTML" && campoNome.value != ""){
        html.style.display = "flex";
        exibePerguntas(perguntasHTML, "HTML");
        btnJogarNovamente.style.display = "none";
        
        btnConcluir.addEventListener("click", ()=>{
            const dataFinal = new Date();
            const tempo = calcularTempoPercorrido(data, dataFinal);
            const tempoFormatado = `${tempo.minutos}:${tempo.segundos}`;
            const pontuacao = verificarRespostas(perguntasHTML);
            pararCronometro();
            incluirDados(campoNome.value, quiz.value, tempoFormatado, dataAtual, pontuacao);
            exibirRanking(quiz.value, pontuacao);
            btnConcluir.style.display = "none";
            btnJogarNovamente.style.display = "flex";
            
            btnJogarNovamente.addEventListener("click", ()=>{
                html.style.display = "none";
                ranking.style.display = "none";
                reiniciarConcluirDiv.style.display = "none";
                pagina.style.display = "flex";
                pararCronometro();
                cronometroDisplay.style.display = "none";
            });
        });

    }else if(quiz.value == "CSS" && campoNome.value != ""){
        css.style.display = "flex";
        exibePerguntas(perguntasCSS, "CSS");
        btnConcluir.addEventListener("click", ()=>{
            const pontuacao = verificarRespostas(perguntasCSS);
            // armazenaDados(campoNome.value, quiz.value, "00:00", "31/04/2002", pontuacao);
            exibirRanking(quiz.value, pontuacao);
            const tempo = pararCronometro();
            console.log(tempo);
        });

    }else if(quiz.value == "JavaScript" && campoNome.value != ""){
        js.style.display = "flex";
        exibePerguntas(perguntasJavaScript, "JavaScript");
        btnConcluir.addEventListener("click", ()=>{
            const pontuacao = verificarRespostas(perguntasJavaScript);
            // armazenaDados(campoNome.value, quiz.value, "00:00", "31/04/2002", pontuacao);
            exibirRanking(quiz.value, pontuacao);
            const tempo = pararCronometro();
            console.log(tempo);
        });
    }
}

function validarNome() {
    const valor = campoNome.value;
    if(valor == ""){
        alert("Insira um nome");
    }else if(quiz.value == "selecione"){
        alert("Escolha o tema");
    }else{
        pagina.style.display = "none";
        iniciarCronometro();
        reiniciarConcluirDiv.style.display = "flex"
        btnConcluir.style.display = "flex";
    }
}

// function concluir() {
//     if(ranking.style.display == "flex"){
//         ranking.style.display = "none";
//         pagina.style.display = "flex";
//     }
// }

btnAcesso.addEventListener("click", validarNome);
btnAcesso.addEventListener("click", iniciarQuiz);
// const btnReiniciar = document.querySelector("#btn-reiniciar");
// btnReiniciar.addEventListener("click", concluir);



