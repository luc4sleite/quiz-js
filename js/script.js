//Função alterar o tema, cronometro e botão de play/pause criar arquivos separados.

// Só a chamadas das funções!

import { perguntasHTML, exibePerguntas } from "./ques-html.js";
import { perguntasCSS } from "./ques-css.js";
import { perguntasJavaScript } from "./ques-js.js";

const secaoHTML = document.querySelector(".tema1");

exibePerguntas(perguntasHTML);
exibePerguntas(perguntasCSS);
exibePerguntas(perguntasJavaScript);
