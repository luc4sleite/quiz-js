const tabelaResultado = document.querySelector(".resultado");
const nome = document.querySelector("#nome");
const rankingDados = document.querySelector("#ranking-dados")
const armazenarRanking = [
    {
        nome: "Gabriel",
        tema: "JavaScript",
        tempo: "00:42",
        data: "28/07/2023",
        pontos: 9
    },
    {
        nome: "Lucas",
        tema: "CSS",
        tempo: "00:30",
        data: "29/07/2023",
        pontos: 7
    }
];

export function armazenaDados(nome, tema, tempo, data, pontos){
    for(let i = 0; i < armazenarRanking.length; i++){
        if(pontos > armazenarRanking[i].pontos){
            armazenarRanking.splice(i, 0, 
                {
                    nome: nome,
                    tema: tema,
                    tempo: tempo,
                    data: data,
                    pontos: pontos
                }
            )
        }
        //arrumar a condição se caso os pontos forem menor q todos da tabela;
        console.log(armazenarRanking);
    }
}

export function exibirRanking(id, pontos) {
    const data = new Date();
    const dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    var dataQuiz = dia + '/' + mes + '/' + ano;

    const tema = document.querySelector(`#${id}`)
    tema.style.display = "none";
    tabelaResultado.style.display = "flex";
    for(let i = 0; i < armazenarRanking.length; i++){
        rankingDados.innerHTML += `
            <tr>
                <td>${armazenarRanking[i].nome}</td>
                <td>${armazenarRanking[i].tema}</td>
                <td>${armazenarRanking[i].tempo}</td>
                <td>${armazenarRanking[i].data}</td>
                <td>${armazenarRanking[i].pontos}/10</td>
            </tr>
        `
        console.log(i);
    }

    tabelaResultado.innerHTML += `
    <div class="desempenho">
    <span>seu</span>
    <h3>Desempenho</h3>
    <div class="media">
        <div class="media-acerto">
            <h4>Média de acertos</h3>
            <p>${pontos}/10</p>
        </div>
        <div class="media-erro">
            <h4>Média de erros</h3>
            <p>${pontos - 10}/10</p>
        </div>
        </div>
    </div>
    `
    
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