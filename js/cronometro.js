// Função para formatar o tempo em mm:ss
function formatohora(tempoEmsegundos) {
    const minutos = Math.floor((tempoEmsegundos % 3600) / 60);
    const segundos = tempoEmsegundos % 60;
    
    return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }

  // Função para atualizar o cronômetro
    function atualizarTempo() {
    horaAtual += 1;
    document.getElementById('cronometro').innerText = formatohora(horaAtual);
    }
    
  let horaAtual = 0; // Tempo inicial em segundos
    
  // Iniciar o cronômetro
  setInterval(atualizarTempo, 1000); // Atualiza o cronômetro a cada 1 segundo
    