
let intervaloCronometro;
let segundos = 0;

export function iniciarCronometro() {
  segundos = 0;
  atualizarCronometroDisplay();
  document.getElementById("cronometroDisplay").style.display = "block";
  intervaloCronometro = setInterval(atualizarCronometro, 1000);
}

export function pararCronometro() {
  clearInterval(intervaloCronometro);
  return segundos;
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

export function calcularTempoPercorrido(dataInicial, dataFinal) {
  const data1 = new Date(dataInicial);
  const data2 = new Date(dataFinal);

  // Calcula a diferença entre as duas datas em milissegundos
  const diferencaEmMilissegundos = Math.abs(data2 - data1);

  // Converte a diferença para segundos
  const segundos = Math.floor(diferencaEmMilissegundos / 1000);

  // Converte os segundos para minutos
  const minutos = Math.floor(segundos / 60);

  return {
    minutos: String(minutos % 60,).padStart(2, "0"),
    segundos: String(segundos % 60).padStart(2, "0")
  };
}