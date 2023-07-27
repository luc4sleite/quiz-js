export function verificarRespostas(perguntas) {
    const respostasSelecionadas = {};
    let pontuacao = 0;

    const perguntasList = document.querySelectorAll(".pergunta-container");

    for (let pergunta of perguntasList) {
        const idPergunta = pergunta.id;
        const respostaSelecionada = pergunta.querySelector(".alternativa:checked");
        
        if (respostaSelecionada) {
            const resposta = respostaSelecionada.value;
            respostasSelecionadas[idPergunta - 1] = resposta;

            if (resposta == perguntas[idPergunta - 1].resposta) {
                pontuacao++;
            }
        }
    }

    console.log(respostasSelecionadas);
    console.log(pontuacao);
}
