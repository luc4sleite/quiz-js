//reprodutor de musica

const botao = document.getElementById('botao');
const audioPlay = document.getElementById('audioPlay');
const reprodutor = document.getElementById('reprodutor');



botao.addEventListener('click', () => {
    if (reprodutor.innerText=="play_arrow") {
        reprodutor.innerText="pause"
        audioPlay.play()
        audioPlay.setAttribute('loop','true')
    }
    else{
        reprodutor.innerText="play_arrow"
        audioPlay.pause()
    }
});