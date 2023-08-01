export function verificarRespostas(perguntas) {
    const respostasSelecionadas = {};
    let pontuacao = 0;

    const perguntasList = document.querySelectorAll(".pergunta-container");

    for (let pergunta of perguntasList) {
        const idPergunta = pergunta.id;
        const respostaSelecionada = pergunta.querySelector(".alternativa:checked");
        const respostaCerta = perguntas[idPergunta - 1].resposta;
        
        if (respostaSelecionada) {
            const resposta = respostaSelecionada.value;
            respostasSelecionadas[idPergunta - 1] = resposta;

            if (resposta == perguntas[idPergunta - 1].resposta) {
                pontuacao++;
                respostaSelecionada.parentElement.style.backgroundColor = "green";
            } else {
                respostaSelecionada.parentElement.style.backgroundColor = "red";
            }
        }

        // for (let alternativa of pergunta.querySelectorAll(".alternativa")) {
        //     alternativa.disabled = true;
        // }

        pergunta.querySelector(".alternativa[value='" + respostaCerta + "']").parentElement.style.backgroundColor = "green";
        pergunta.querySelector(".alternativa[value='" + respostaCerta + "']").parentElement.style.color = "white";
    }
    return pontuacao;
}
