//alterar o tema para claro ou escuro

export function darkMode(){
    const tema = document.getElementById('tema')
    const botao = document.getElementById('toggle-theme')
    const corpo = document.getElementById('corpo')
    
    botao.addEventListener('click', () => {
        if(tema.innerText=="light_mode"){
            tema.innerText="dark_mode"
            corpo.setAttribute('class', 'light')
        }
        else{
            tema.innerText="light_mode" 
            corpo.setAttribute('class', 'dark')
        }
    
    })
}