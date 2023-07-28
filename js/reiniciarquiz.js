// Encontra o botão de reiniciar e adiciona um evento de clique
const btnReiniciar = document.querySelector(".btns button:last-child");
btnReiniciar.addEventListener("click", reiniciarPagina);

// Função para reiniciar completamente a página
function reiniciarPagina() {
  // Recarrega a página, retornando ao seu estado inicial
window.location.reload();
}

