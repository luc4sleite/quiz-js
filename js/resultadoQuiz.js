import { dadosRanking } from "./dadosRanking.js";

const tabelaResultado = document.querySelector(".resultado");
const desempenho = document.querySelector(".desempenho");
const rankingDados = document.querySelector("#ranking-dados");
const rankingTemasHTML = document.querySelector(".ranking-temas-html");
const rankingTemasCSS = document.querySelector(".ranking-temas-css");
const rankingTemasJS = document.querySelector(".ranking-temas-javascript");

export function incluirDados(nome, tema, tempo, data, pontos) {
    dadosRanking.push({
        id: dadosRanking.length + 1,
        nome: nome,
        tema: tema,
        tempo: tempo,
        data: data,
        pontos: pontos
    });
    
}

function calculaMedia() {
    let media = 0;
    for (let i = 0; i < dadosRanking.length; i++) {
        media += dadosRanking[i].pontos;
    }
    media = media / dadosRanking.length;
    return media;
}

function ordenarRanking() {
    dadosRanking.sort((a, b) => {
        if (a.pontos > b.pontos) {
            return -1;
        } else if (a.pontos < b.pontos) {
            return 1;
        } else {
            return 0;
        }
    });
}

export function exibirRanking(id, pontos) {
    ordenarRanking();
    tabelaResultado.style.display = "flex";
    rankingDados.innerHTML = "";
    for(let i = 0; i < dadosRanking.length; i++){
        rankingDados.innerHTML += `
            <tr>
                <td>${dadosRanking[i].nome}</td>
                <td>${dadosRanking[i].tema}</td>
                <td>${dadosRanking[i].tempo}</td>
                <td>${dadosRanking[i].data}</td>
                <td>${dadosRanking[i].pontos}/10</td>
            </tr>
        `
    }

    desempenho.innerHTML = `
        <span>seu</span>
        <h3>Desempenho</h3>
        <div class="usuario">
            <div class="usuario-acerto">
                <h4>Acertos</h3>
                <p>${pontos}/10</p>
            </div>
            <div class="usuario-erro">
                <h4>Erros</h3>
                <p>${Math.abs(pontos - 10)}/10</p>
            </div>
        </div>
        <div class="media">
            <h3>Média de acertos</h3>
            <p class="verde">${calculaMedia().toFixed(1)}/10</p>
            <h3>Média de erros</h3>
            <p class="vermelho">${(10 - calculaMedia()).toFixed(1)}/10</p>
        </div>
    `
}

export function exibirRankingTemas(){
    rankingTemasHTML.innerHTML = "";
    rankingTemasCSS.innerHTML = "";
    rankingTemasJS.innerHTML = "";
    for(let i = 0; i < dadosRanking.length; i++){
        if(dadosRanking[i].tema == "HTML"){
            rankingTemasHTML.innerHTML += `
                <li>
                    <div>
                        <h4>${dadosRanking[i].nome}</h4>
                        <p>${dadosRanking[i].pontos}/10</p>
                    </div>
                </li>
            `
        } else if (dadosRanking[i].tema == "CSS"){
            rankingTemasCSS.innerHTML += `
                <li>
                    <div>
                        <h4>${dadosRanking[i].nome}</h4>
                        <p>${dadosRanking[i].pontos}/10</p>
                    </div>
                </li>
            `
        } else if (dadosRanking[i].tema == "JavaScript"){
            rankingTemasJS.innerHTML += `
                <li>
                    <div>
                        <h4>${dadosRanking[i].nome}</h4>
                        <p>${dadosRanking[i].pontos}/10</p>
                    </div>
                </li>
            `
        }
    }
}