/*
    O que precisamos fazer? - quando clicar no botão de personagem na lista temos que marcar o botão como selecionado e mostrar o personagem correspondente 

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como selecionado
    Passo 1 - Pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
    Passo 2 - Adicionar a classe "selecionado" no botão que o usuário clicou
    Passo 3 - Verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele

    OBJETIVO 2 - Quando clicar no botão do personagem mostrar as informações do personagem
    Passo 1 - Pegar os personagens no JS pra poder mostrar ou esconder ele 
    Passo 2 - Adicionar a classe "selecionado" no personagem que o usuário selecionou
    Passo 3 - Verificar se já existia um personagem selecionado, se sim, devemos remover a seleção dele
*/

// OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como selecionado
// Passo 1 - Pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles

const botoesPersonagem = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

function desmarcarSelecionado(selector) {
    const itemSelecionado = document.querySelector(`${selector}.selecionado`);
    if (itemSelecionado) {
        itemSelecionado.classList.remove("selecionado");
    }
}

function selecionarItem(item) {
    item.classList.add("selecionado");
}

botoesPersonagem.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // Desmarca botão e personagem atualmente selecionados
        desmarcarSelecionado(".botao");
        desmarcarSelecionado(".personagem");

        // Marca o novo botão e personagem como selecionados
        selecionarItem(botao);
        selecionarItem(personagens[indice]);
    });
});
