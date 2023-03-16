const slideBotoes = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

const informacoes = document.querySelectorAll(".informacoes");

slideBotoes.forEach((botao, indice) => {

    botao.addEventListener('click', () => {

        desativarBotao();

        selecionarBotao(botao);

        newFunction();

        mostrarImagem(indice);
    })
})

function mostrarImagem(indice) {
    imagens[indice].classList.add('ativa');
    informacoes[indice].classList.add("escolhida");
}

function selecionarBotao(botao) {
    botao.classList.add('selecionado');
}

function newFunction() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');

    const informacaoEscolhida = document.querySelector(".escolhida");
    informacaoEscolhida.classList.remove("escolhida");

}

function desativarBotao() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
