var vida_1 = 100;
var vida_2 = 100;
function inciar_game() {
    var tela = telas_sf.value;
    var lutador1 = pers1.value;
    var lutador2 = pers2.value;

    if (tela == 'selecionar_t') {
        alert("ESCOLHA UMA TELA PARA JOGAR!!!")
    } else if (lutador1 == 'selecionar_p') {
        alert("VOCÊ DEVE ESCOLHER DOIS LUTADORES PARA CONTINUAR")
    } else if (lutador2 == 'selecionar_p2') {
        alert("VOCÊ DEVE ESCOLHER DOIS LUTADORES PARA CONTINUAR")
    }
    else {
        fundo.style.display = 'block'
    }
}
