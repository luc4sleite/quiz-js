import { exibePerguntas } from "./exibePerguntas.js";
import { perguntasHTML } from "./ques-html.js";
import { perguntasCSS } from "./ques-css.js";
import { perguntasJavaScript } from "./ques-js.js";
const campoNome = document.querySelector(".nome");
const btnAcesso = document.querySelector("#btn-inicio");
const pagina = document.querySelector(".acesso-container");
const quiz = document.querySelector("#tema-quiz");
const html = document.querySelector("#html");
const css = document.querySelector("#css");
const js = document.querySelector("#js");


function iniciarQuiz(){ 

    if(quiz.value == "selecione"){
        html.style.display = "none";
        css.style.display = "none";
        js.style.display = "none";

    }else if(quiz.value == "HTML"){
        html.style.display = "flex";
        exibePerguntas(perguntasHTML, "html");

    }else if(quiz.value == "CSS"){
        css.style.display = "flex";
        exibePerguntas(perguntasCSS, "css");

    }else if(quiz.value == "JavaScript"){
        js.style.display = "flex";
        exibePerguntas(perguntasJavaScript, "js");
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

