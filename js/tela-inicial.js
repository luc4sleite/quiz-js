import { exibePerguntas } from "./exibePerguntas.js";
import { perguntasHTML } from "./ques-html.js";
import { perguntasCSS } from "./ques-css.js";
import { perguntasJavaScript } from "./ques-js.js";
import { verificarRespostas } from "./verificarRespostas.js";
import { iniciarCronometro } from "./cronometro.js";

const campoNome = document.querySelector(".nome");
const btnAcesso = document.querySelector("#btn-inicio");
const pagina = document.querySelector(".acesso-container");
const quiz = document.querySelector("#tema-quiz");
const html = document.querySelector("#HTML");
const css = document.querySelector("#CSS");
const js = document.querySelector("#JavaScript");
const btnConcluir = document.querySelector("#btn-concluir");

function iniciarQuiz(){
    if(quiz.value == "HTML" && campoNome.value != ""){
        html.style.display = "flex";
        exibePerguntas(perguntasHTML, "HTML");
        btnConcluir.addEventListener("click", ()=>{
            verificarRespostas(perguntasHTML);
        });

    }else if(quiz.value == "CSS" && campoNome.value != ""){
        css.style.display = "flex";
        exibePerguntas(perguntasCSS, "CSS");
        btnConcluir.addEventListener("click", ()=>{
            verificarRespostas(perguntasCSS);
        });

    }else if(quiz.value == "JavaScript" && campoNome.value != ""){
        js.style.display = "flex";
        exibePerguntas(perguntasJavaScript, "JavaScript");
        btnConcluir.addEventListener("click", ()=>{
            verificarRespostas(perguntasJavaScript);
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
    }
}

btnAcesso.addEventListener("click", validarNome);
btnAcesso.addEventListener("click", iniciarQuiz);



