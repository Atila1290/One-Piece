const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll('.personagem');


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
         desselecionarPersonagem();


        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

    });
})


function desselecionarPersonagem() {
    const personagensSelecionado = document.querySelector(".personagem.selecionado");
    personagensSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

