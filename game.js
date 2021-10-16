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
    } comecar_telas()
    comecar_lut1()
    comecar_lut2()

}
function comecar_telas() {
    var tela = telas_sf.value;

    if (tela == 'tela-ryu') {
        fundo.style.backgroundImage = `url('imgs/telas/ryustage.gif')`;
        fundo.style.display = 'block';
    } else if (tela = 'tela-guile') {
        fundo.style.backgroundImage = `url('imgs/telas/guilestage.png')`;
        fundo.style.display = 'block';
    } else if (tela = 'tela-chun') {
        fundo.style.backgroundImage = `url('imgs/telas/chunlistage.gif')`;
        fundo.style.display = 'block';
    } else if (tela = 'tela-zangief') {
        fundo.style.backgroundImage = `url('imgs/telas/zangiefsatge.gif')`;
        fundo.style.display = 'block';
    } else if (tela = 'tela-honda') {
        fundo.stylr.backgroundImage = `url('imgs/telas/hondastage.jpg')`;
        fundo.style.display = 'block';
    } else if (tela = 'tela-dhalsim') {
        fundo.style.backgroundImage = `url('imgs/telas/dhalsim.gif')`;
        fundo.style.display = 'block';
    } else if (tela = 'tela-balrog') {
        fundo.style.backgroundImage = `url('imgs/telas/balrog.jpg')`;
        fundo.style.display = 'block';
    } else if (tela = 'tela-vega') {
        fundo.style.backgroundImage = `url('imgs/telas/vegastage.gif')`;
        fundo.style.display = 'block';
    } else if (tela = 'tela-bison') {
        fundo.style.backgroundImage = `url('imgs/telas/bisonstage.gif')`;
        fundo.style.display = 'block';
    } else if (tela == 'tela-blanka') {
        fundo.style.backgroundImage = `url('imgs/telas/blankastage.jpg')`;
        fundo.style.display = 'block'
    } else if (tela == 'tela=sagat') {
        fundo.style.backgroundImage = `url('imgs/telas/sagatstage.jpg')`;
        fundo.style.display = 'block'
    } else if (tela == 'tela-ken') {
        fundo.style.backgroundImage = `url('imgs/telas/kenstage.gif')`;
        fundo.style.display = 'block';
    }

}
function comecar_lut1() {
    var lutador1 = pers1.value;

    if (lutador1 == 'bison') {
        lutador_1.innerHTML = `<img src="imgs/personagens/bison.gif">`
        lutador_1.style.display = 'block';
    } else if (lutador1 == 'blanka') {
        lutador_1.innerHTML = `<img src="imgs/personagens/blanka.gif">`
        lutador_1.style.display = 'block';
    } else if (lutador1 == 'chunli') {
        lutador_1.innerHTML = `<img src="imgs/personagens/chun-li.gif">`
        lutador_1.style.display = 'block';
    } else if (lutador1 == 'dhalsim') {
        lutador_1.innerHTML = `<img src="imgs/personagens/dhalsim.gif">`
        lutador_1.style.display = 'block';
    } else if (lutador1 == 'honda') {
        lutador_1.innerHTML = `<img src="imgs/personagens/ehonda.gif">`
        lutador_1.style.display = 'block';
    } else if (lutador1 == 'guile') {
        lutador_1.innerHTML = `<img src="imgs/personagens/guile.gif">`
        lutador_1.style.display = 'block';
    } else if (lutador1 == 'ken') {
        lutador_1.innerHTML = `<img src="imgs/personagens/ken.gif">`
        lutador_1.style.display = 'block';
    } else if (lutador1 == 'balrog') {
        lutador_1.innerHTML = `<img src="imgs/personagens/balrog.gif">`
        lutador_1.style.display = 'block';
    } else if (lutador1 == 'ryu') {
        lutador_1.innerHTML = `<img src="imgs/personagens/ryu.gif">`
        lutador_1.style.display = 'block';
    } else if (lutador1 == 'sagat') {
        lutador_1.innerHTML = `<img src="imgs/personagens/sagat.gif">`
        lutador_1.style.display = 'block';
    } else if (lutador1 == 'vega') {
        lutador_1.innerHTML = `<img src="imgs/personagens/vega.gif">`
        lutador_1.style.display = 'block';
    } else if (lutador1 == 'zangief') {
        lutador_1.innerHTML = `<img src="imgs/personagens/zangief.gif">`
        lutador_1.style.display = 'block';
    }

}
function comecar_lut2() {
    var lutador2 = pers2.value;

    if (lutador2 == 'bison2') {
        lutador_2.innerHTML = `<img src="imgs/personagens/bison.gif">`
        lutador_2.style.display = 'block';
    } else if (lutador2 == 'blanka2') {
        lutador_2.innerHTML = `<img src="imgs/personagens/blanka.gif">`
        lutador_2.style.display = 'block';
    } else if (lutador2 == 'chunli2') {
        lutador_2.innerHTML = `<img src="imgs/personagens/chun-li.gif">`
        lutador_2.style.display = 'block';
    } else if (lutador2 == 'dhalsim2') {
        lutador_2.innerHTML = `<img src="imgs/personagens/dhalsim.gif">`
        lutador_2.style.display = 'block';
    } else if (lutador2 == 'honda2') {
        lutador_2.innerHTML = `<img src="imgs/personagens/ehonda.gif">`
        lutador_2.style.display = 'block';
    } else if (lutador2 == 'guile2') {
        lutador_2.innerHTML = `<img src="imgs/personagens/guile.gif">`
        lutador_2.style.display = 'block';
    } else if (lutador2 == 'ken2') {
        lutador_2.innerHTML = `<img src="imgs/personagens/ken.gif">`
        lutador_2.style.display = 'block';
    } else if (lutador2 == 'balrog2') {
        lutador_2.innerHTML = `<img src="imgs/personagens/balrog.gif">`
        lutador_2.style.display = 'block';
    } else if (lutador2 == 'ryu2') {
        lutador_2.innerHTML = `<img src="imgs/personagens/ryu.gif">`
        lutador_2.style.display = 'block';
    } else if (lutador2 == 'sagat2') {
        lutador_2.innerHTML = `<img src="imgs/personagens/sagat.gif">`
        lutador_2.style.display = 'block';
    } else if (lutador2 == 'vega2') {
        lutador_2.innerHTML = `<img src="imgs/personagens/vega.gif">`
        lutador_2.style.display = 'block';
    } else if (lutador2 == 'zangief2') {
        lutador_2.innerHTML = `<img src="imgs/personagens/zangief.gif">`
        lutador_2.style.display = 'block';
    }




}