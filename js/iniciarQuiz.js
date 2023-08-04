import { reiniciarQuiz } from "./reiniciarquiz.js";
import { exibeTema } from "./exibeTema.js";
import { concluirQuiz } from "./concluirQuiz.js";
import { verificarQuiz } from "./verificarQuiz.js";

const campoNome = document.querySelector(".nome");
const quiz = document.querySelector("#tema-quiz");
const btnConcluir = document.querySelector("#btn-concluir");
const btnJogarNovamente = document.querySelector("#btn-jogar");
const btnVerificar = document.querySelector("#btn-verificar");

function limparCampos(nome, tema) {
    nome.value = "";
    tema.value = "selecione";
}

export function iniciarQuiz() {
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
                concluirQuiz(campoNome, quiz, pontuacao);
                limparCampos(campoNome, quiz);
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
                concluirQuiz(campoNome.value, quiz.value, pontuacao);
                limparCampos(campoNome, quiz);
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
                concluirQuiz(campoNome.value, quiz.value, pontuacao);
                limparCampos(campoNome, quiz);
                btnJogarNovamente.addEventListener("click", () => {
                    reiniciarQuiz();
                });
            });
        })
    }
}