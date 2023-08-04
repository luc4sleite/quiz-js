import { validarNome } from "./validarNome.js";
import { tocarMusica } from "./musica.js";
import { darkMode } from "./mudancaTema.js";
import { iniciarQuiz } from "./iniciarQuiz.js";

const btnAcesso = document.querySelector("#btn-inicio");

btnAcesso.addEventListener("click", validarNome);
btnAcesso.addEventListener("click", iniciarQuiz);
darkMode();
// tocarMusica();