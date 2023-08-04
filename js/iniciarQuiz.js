function iniciarQuiz() {
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const dataAtual = `${dia}/${mes}/${ano}`;


    if (quiz.value == "HTML" && campoNome.value != "") {
        html.style.display = "flex";
        exibePerguntas(perguntasHTML, "HTML");
        btnJogarNovamente.style.display = "none";
        btnConcluir.style.display = "none";

        btnVerificar.addEventListener("click", () => {
            const dataFinal = new Date();
            const tempo = calcularTempoPercorrido(data, dataFinal);
            const tempoFormatado = `${tempo.minutos}:${tempo.segundos}`;
            const pontuacao = verificarRespostas(perguntasHTML);
            pararCronometro();
            incluirDados(campoNome.value, quiz.value, tempoFormatado, dataAtual, pontuacao);
            btnConcluir.style.display = "flex";
            btnVerificar.style.display = "none";
            window.scrollTo(0, 0);

            btnConcluir.addEventListener("click", () => {
                exibirRanking(quiz.value, pontuacao);
                exibirRankingTemas();
                btnConcluir.style.display = "none";
                btnJogarNovamente.style.display = "flex";
                html.style.display = "none";
                window.scrollTo(0, 0);

                btnJogarNovamente.addEventListener("click", () => {
                    desmarcarAlternativas();
                    limparCampos();
                    ranking.style.display = "none";
                    reiniciarConcluirDiv.style.display = "none";
                    pagina.style.display = "flex";
                    pararCronometro();
                    cronometroDisplay.style.display = "none";
                });
            });
        })
    }
    else if (quiz.value == "CSS" && campoNome.value != "") {
        css.style.display = "flex";
        exibePerguntas(perguntasCSS, "CSS");
        btnJogarNovamente.style.display = "none";
        btnConcluir.style.display = "none";

        btnVerificar.addEventListener("click", () => {
            const dataFinal = new Date();
            const tempo = calcularTempoPercorrido(data, dataFinal);
            const tempoFormatado = `${tempo.minutos}:${tempo.segundos}`;
            const pontuacao = verificarRespostas(perguntasCSS);
            pararCronometro();
            incluirDados(campoNome.value, quiz.value, tempoFormatado, dataAtual, pontuacao);
            btnConcluir.style.display = "flex";
            btnVerificar.style.display = "none";
            window.scrollTo(0, 0);

            btnConcluir.addEventListener("click", () => {
                exibirRanking(quiz.value, pontuacao);
                exibirRankingTemas();
                btnConcluir.style.display = "none";
                btnJogarNovamente.style.display = "flex";
                css.style.display = "none";
                window.scrollTo(0, 0);

                btnJogarNovamente.addEventListener("click", () => {
                    desmarcarAlternativas();
                    limparCampos();
                    ranking.style.display = "none";
                    reiniciarConcluirDiv.style.display = "none";
                    pagina.style.display = "flex";
                    pararCronometro();
                    cronometroDisplay.style.display = "none";
                });
            });
        })
    } else if (quiz.value == "JavaScript" && campoNome.value != "") {
        js.style.display = "flex";
        exibePerguntas(perguntasJavaScript, "JavaScript");
        btnJogarNovamente.style.display = "none";
        btnConcluir.style.display = "none";

        btnVerificar.addEventListener("click", () => {
            const dataFinal = new Date();
            const tempo = calcularTempoPercorrido(data, dataFinal);
            const tempoFormatado = `${tempo.minutos}:${tempo.segundos}`;
            const pontuacao = verificarRespostas(perguntasJavaScript);
            pararCronometro();
            incluirDados(campoNome.value, quiz.value, tempoFormatado, dataAtual, pontuacao);
            btnConcluir.style.display = "flex";
            btnVerificar.style.display = "none";
            window.scrollTo(0, 0);

            btnConcluir.addEventListener("click", () => {
                exibirRanking(quiz.value, pontuacao);
                exibirRankingTemas();
                btnConcluir.style.display = "none";
                btnJogarNovamente.style.display = "flex";
                js.style.display = "none";
                window.scrollTo(0, 0);

                btnJogarNovamente.addEventListener("click", () => {
                    desmarcarAlternativas();
                    limparCampos();
                    ranking.style.display = "none";
                    reiniciarConcluirDiv.style.display = "none";
                    pagina.style.display = "flex";
                    pararCronometro();
                    cronometroDisplay.style.display = "none";
                });
            });
        })
    }
}