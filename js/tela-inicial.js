import { exibePerguntas } from "./exibePerguntas.js";
import { perguntasHTML } from "./ques-html.js";
import { perguntasCSS } from "./ques-css.js";
import { perguntasJavaScript } from "./ques-js.js";
import { verificarRespostas } from "./verificarRespostas.js";

const campoNome = document.querySelector(".nome");
const btnAcesso = document.querySelector("#btn-inicio");
const pagina = document.querySelector(".acesso-container");
const quiz = document.querySelector("#tema-quiz");
const html = document.querySelector("#HTML");
const css = document.querySelector("#CSS");
const js = document.querySelector("#JavaScript");
const btnConcluir = document.querySelector("#btn-concluir");

function iniciarQuiz(){  
    if(quiz.value == "selecione"){
        html.style.display = "none";
        css.style.display = "none";
        js.style.display = "none";

    }else if(quiz.value == "HTML"){
        html.style.display = "flex";
        exibePerguntas(perguntasHTML, "HTML");
        btnConcluir.addEventListener("click", ()=>{
            verificarRespostas(perguntasHTML);
        });

    }else if(quiz.value == "CSS"){
        css.style.display = "flex";
        exibePerguntas(perguntasCSS, "CSS");
        btnConcluir.addEventListener("click", ()=>{
            verificarRespostas(perguntasCSS);
        });

    }else if(quiz.value == "JavaScript"){
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
    }
}

btnAcesso.addEventListener("click", validarNome);
btnAcesso.addEventListener("click", iniciarQuiz);

