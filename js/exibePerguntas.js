import { perguntasHTML } from "./ques-html.js";

export function exibePerguntas(perguntas, id) {
    const tema = document.getElementById(`${id}`);
    tema.innerHTML = "";
    tema.innerHTML = `
        <span>Tema</span>
        <h2>${id}</h2>
    `
    for (let i = 0; i <= perguntas.length - 1; i++) {
        tema.innerHTML += `
            <div class="pergunta-container">
                <span>Questão ${perguntas[i].id}</span>
                <h3>${perguntas[i].pergunta}</h3>
                <div class="resposta-container">
                    <input type="radio" value="${perguntas[i].alternativas[0]}"  id="resposta1-${perguntas[i].id}" name="resposta"> 
                    <label for="resposta1-${perguntas[i].id}">${perguntas[i].alternativas[0]}</label>
                </div>
                <div class="resposta-container">
                    <input type="radio" value="${perguntas[i].alternativas[1]}"  id="resposta2-${perguntas[i].id}" name="resposta"> 
                    <label for="resposta2-${perguntas[i].id}">${perguntas[i].alternativas[1]}</label>
                </div>
                <div class="resposta-container">
                    <input type="radio" value="${perguntas[i].alternativas[2]}"  id="resposta3-${perguntas[i].id}" name="resposta"> 
                    <label for="resposta3-${perguntas[i].id}">${perguntas[i].alternativas[2]}</label>
                </div>
                <div class="resposta-container">
                    <input type="radio" value="${perguntas[i].alternativas[3]}"  id="resposta4-${perguntas[i].id}" name="resposta"> 
                    <label for="resposta4-${perguntas[i].id}">${perguntas[i].alternativas[3]}</label>
                </div>
            </div>
        `
    }
}