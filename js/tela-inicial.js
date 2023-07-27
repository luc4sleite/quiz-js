//verificar dados tela inicial
const campoNome = document.querySelector(".nome");
const btnAcesso = document.querySelector("#btn-inicio");
const pagina = document.querySelector(".acesso-container");
const quiz = document.querySelector("#tema");
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

    }else if(quiz.value == "CSS"){
        css.style.display = "flex";

    }else if(quiz.value == "JavaScript"){
        js.style.display = "flex";
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

