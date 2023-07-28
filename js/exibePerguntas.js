export function exibePerguntas(perguntas, id) {
    const tema = document.getElementById(`${id}`);
    tema.innerHTML = "";
    tema.innerHTML = `
        <span>Tema</span>
        <h2>${id}</h2>
    `
    for (let i = 0; i <= perguntas.length - 1; i++) {
        tema.innerHTML += `
            <div class="pergunta-container" id="${perguntas[i].id}">
                <span>Questão ${perguntas[i].id}</span>
                <h3>${perguntas[i].pergunta}</h3>
                <div class="resposta-container">
                    <input class="alternativa" type="radio" value="1"  id="resposta1-${perguntas[i].id}" name="${perguntas[i].id}"> 
                    <label for="resposta1-${perguntas[i].id}">${perguntas[i].alternativas[0]}</label>
                </div>
                <div class="resposta-container">
                    <input class="alternativa" type="radio" value="2"  id="resposta2-${perguntas[i].id}" name="${perguntas[i].id}"> 
                    <label for="resposta2-${perguntas[i].id}">${perguntas[i].alternativas[1]}</label>
                </div>
                <div class="resposta-container">
                    <input class="alternativa" type="radio" value="3"  id="resposta3-${perguntas[i].id}" name="${perguntas[i].id}"> 
                    <label for="resposta3-${perguntas[i].id}">${perguntas[i].alternativas[2]}</label>
                </div>
                <div class="resposta-container">
                    <input class="alternativa" type="radio" value="4"  id="resposta4-${perguntas[i].id}" name="${perguntas[i].id}"> 
                    <label for="resposta4-${perguntas[i].id}">${perguntas[i].alternativas[3]}</label>
                </div>
            </div>
        `
        
    }
    const inputEl = document.querySelectorAll(".alternativa") 
    


    for(let input of inputEl){
        input.addEventListener("click", (event)=>{
            const inputClicked = event.target 
            // Verifica se é o El alvo      
            for(let otherInput of inputEl){
                const otherContainer = otherInput.parentNode;
                if (otherInput !== inputClicked) {
                    otherContainer.style.backgroundColor = 'var(--font-color-3)';
                    otherContainer.style.color = 'var(--font-color-1)';
                }

            }
            //verifica se ele esta checkado
            for(let otherInput of inputEl){
                const otherContainer = otherInput.parentNode;
                if(otherInput.checked){
                    otherContainer.style.backgroundColor = "var(--font-color-1)";
                    otherContainer.style.color = "var(--font-color-3)";
                }
            }
        })
    }
}

