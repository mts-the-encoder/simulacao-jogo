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
    } else if (tela == 'tela-ryu') {
        fundo.style.display = 'block';
    } else if (tela = 'tela-ken') {
        fundo.style.display = 'block';
    } else if (tela = 'tela-guile') {
        fundo.style.display = 'block';
    } else if (tela = 'tela-chun') {
        fundo.style.display = 'block';
    } else if (tela = 'tela-zangief') {
        fundo.style.display = 'block';
    } else if (tela = 'tela-honda') {
        fundo.style.display = 'block';
    } else if (tela = 'tela-dhalsim') {
        fundo.style.display = 'block';
    } else if (tela = 'tela-balrog') {
        fundo.style.display = 'block';
    } else if (tela = 'tela-vega') {
        fundo.style.display = 'block';
    } else if (tela = 'tela-bison') {
        fundo.style.display = 'block';
    } else if (tela == 'tela-blanka') {
        fundo.style.display = 'block'
    } else if (tela == 'tela=sagat') {
        fundo.style.display = 'block'
    }
}
