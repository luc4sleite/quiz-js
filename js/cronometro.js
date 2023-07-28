
let intervaloCronometro;
let segundos = 0;

export function iniciarCronometro() {
  segundos = 0;
  atualizarCronometroDisplay();
  document.getElementById("cronometroDisplay").style.display = "block";
  intervaloCronometro = setInterval(atualizarCronometro, 1000);
}

function pararCronometro() {
  clearInterval(intervaloCronometro);
}

function atualizarCronometro() {
  segundos++;
  atualizarCronometroDisplay();
}

function atualizarCronometroDisplay() {
  const minutos = Math.floor(segundos / 60);
  const segundosDisplay = String(segundos % 60).padStart(2, "0");
  const tempoDisplay = `${minutos}:${segundosDisplay}`;
  document.getElementById("cronometroDisplay").innerText = tempoDisplay;
}
