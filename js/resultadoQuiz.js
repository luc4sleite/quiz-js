import { dadosRanking } from "./dadosRanking.js";

const tabelaResultado = document.querySelector(".resultado");
const desempenho = document.querySelector(".desempenho");
const rankingDados = document.querySelector("#ranking-dados");

export function incluirDados(nome, tema, tempo, data, pontos) {
    dadosRanking.push({
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

console.log(calculaMedia());

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

    console.log(dadosRanking);
    
    // <div class="ranking-temas">
    // <span>temas</span>
    // <h3>Ranking</h3>
    // <div class="ranking-temas-container">
    //     <div class="ranking-unico">
    //         <h4>HTML</h4>
    //         <ol>
    //             <li>gabriel</li>
    //             <li>gustavo</li>
    //             <li>lucas</li>
    //             <li>fernando</li>
    //             <li>pedro</li>
    //         </ol>
    //     </div>
    //     <div class="ranking-unico">
    //         <h4>CSS</h4>
    //         <ol>
    //             <li>gabriel</li>
    //             <li>gustavo</li>
    //             <li>lucas</li>
    //             <li>fernando</li>
    //             <li>pedro</li>
    //         </ol>
    //     </div>
    //     <div class="ranking-unico">
    //         <h4>JavaScript</h4>
    //         <ol>
    //             <li>gabriel</li>
    //             <li>gustavo</li>
    //             <li>lucas</li>
    //             <li>fernando</li>
    //             <li>pedro</li>
    //         </ol>
    //     </div>
    // </div>
    // </div>
}