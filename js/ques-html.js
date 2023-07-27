export const perguntasHTML = [
    {
        id: 1,
        pergunta: "O que significa a sigla HTML?",
        alternativas: [
            "HyperText Markup Language (Linguagem de Marcação de HiperTexto)",
            "Home Tool Markup Language (Linguagem de Marcação de Ferramentas Domésticas)",
            "High-Level Markup Language (Linguagem de Marcação de Alto Nível)",
            "Hyperlink and Text Markup Language (Linguagem de Marcação de Hiperlink e Texto)",
        ],
        resposta:
            "HyperText Markup Language (Linguagem de Marcação de HiperTexto)",
    },
    {
        id: 2,
        pergunta: "Qual tag HTML é usada para criar um link em uma página?",
        alternativas: ["&lt;link&gt;", "&lt;a&gt;", "&lt;href&gt;", "&lt;url&gt;"],
        resposta: "&lt;a&gt;",
    },
    {
        id: 3,
        pergunta: "Qual tag HTML é usada para criar uma quebra de linha?",
        alternativas: ["&lt;br&gt;", "&lt;nl&gt;", "&lt;lb&gt;", "&lt;break&gt;"],
        resposta: "&lt;br&gt;",
    },
    {
        id: 4,
        pergunta: "Como inserir um comentário no código HTML?",
        alternativas: [
            "/* comentário */",
            "// comentário",
            "&lt;!-- comentário --&gt;",
            "&lt;coment&gt;comentário&lt;/coment&gt;",
        ],
        resposta: "&lt;!-- comentário --&gt;",
    },
    {
        id: 5,
        pergunta:
            "Qual atributo HTML é usado para definir estilos embutidos em um elemento?",
        alternativas: ["class", "style", "script", "id"],
        resposta: "style",
    },
    {
        id: 6,
        pergunta: "Qual tag HTML é usada para criar uma lista ordenada?",
        alternativas: ["&lt;ul&gt;", "&lt;li&gt;", "&lt;ol&gt;", "&lt;dl&gt;"],
        resposta: "&lt;ol&gt;",
    },
    {
        id: 7,
        pergunta:
            "Qual é a versão mais recente do HTML até o momento (setembro de 2021)?",
        alternativas: ["HTML4", "XHTML", "HTML5", "HTMLX"],
        resposta: "HTML5",
    },
    {
        id: 8,
        pergunta:
            "Qual atributo HTML é usado para definir um texto alternativo para uma imagem?",
        alternativas: ["&lt;alt&gt;", "&lt;description&gt;", "&lt;imgalt&gt;", "&lt;alttext&gt;"],
        resposta: "&lt;alt&gt;",
    },
    {
        id: 9,
        pergunta: "Para qual finalidade é usada a tag &lt;iframe&gt; em HTML?",
        alternativas: [
            "Inserir uma imagem",
            "Inserir um vídeo",
            "Exibir um conteúdo de uma página dentro de outra página",
            "Criar um link",
        ],
        resposta: "Exibir um conteúdo de uma página dentro de outra página",
    },
    {
        id: 10,
        pergunta:
            "Qual elemento HTML é usado para definir um cabeçalho ou título para a página?",
        alternativas: ["&lt;header&gt;", "&lt;title&gt;", "&lt;h1&gt;", "&lt;head&gt;"],
        resposta: "&lt;title&gt;",
    },
];

const secaoHTML = document.querySelector(".tema");

export function exibePerguntas(perguntas) {
    secaoHTML.innerHTML = "";
    secaoHTML.innerHTML = `
        <span>Tema</span>
        <h2>HTML</h2>
    `
    console.log(perguntas[0].alternativas[0])
    for (let i = 0; i <= perguntas.length - 1; i++) {
        console.log(i);
        secaoHTML.innerHTML += `
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