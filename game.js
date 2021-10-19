var vida_1 = 100;
var vida_2 = 100;
function comecar_telas(imgPath) {

    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = 'url(' + imgPath + ')';

    fundo.style.display = 'block';
}
function comecar_lut1(imgPath) {
    var lutador_1 = document.getElementById('lutador_1');
    lutador_1.innerHTML = '<img src=' + imgPath + '>'

    lutador_1.style.display = 'block';


}
function comecar_lut2(imgPath) {
    var lutador_2 = document.getElementById('lutador_2');
    lutador_2.innerHTML = '<img src=' + imgPath + '>'

    lutador_2.style.display = 'block';
}
function tirar_vida1() {
    var lutador = pers2.value
    vida_2 = vida_2 - 5;
    vida_lt2.style.width = vida_2 + `%`;


    if (vida_2 == '0' & lutador == "imgs/personagens/bison.gif") {
        lutador_2.innerHTML = '<img src="imgs/derrotados/mbisonderrotado.gif">'
    } else if (vida_2 == '0' & lutador == "imgs/personagens/balrog.gif") {
        lutador_2.innerHTML = '<img src="imgs/derrotados/balrogderrotado.gif">'
    } else if (vida_2 == '0' & lutador == "imgs/personagens/blanka.gif") {
        lutador_2.innerHTML = '<img src="imgs/derrotados/blankaderrotado.gif">'
    } else if (vida_2 == '0' & lutador == "imgs/personagens/chun-li.gif") {
        lutador_2.innerHTML = '<img src="imgs/derrotados/chunliderrotado.gif">'
    } else if (vida_2 == '0' & lutador == "imgs/personagens/dhalsim.gif") {
        lutador_2.innerHTML = '<img src="imgs/derrotados/dhalsimderrotado.gif">'
    } else if (vida_2 == '0' & lutador == "imgs/personagens/ehonda.gif") {
        lutador_2.innerHTML = '<img src="imgs/derrotados/ehondaderrotado.gif">'
    } else if (vida_2 == '0' & lutador == "imgs/personagens/guile.gif") {
        lutador_2.innerHTML = '<img src="imgs/derrotados/guilederrotado.gif">'
    } else if (vida_2 == '0' & lutador == "imgs/personagens/ken.gif") {
        lutador_2.innerHTML = '<img src="imgs/derrotados/kenderrotado.gif">'
    } else if (vida_2 == '0' & lutador == "imgs/personagens/ryu.gif") {
        lutador_2.innerHTML = '<img src="imgs/derrotados/ryuderrotado.gif">'
    } else if (vida_2 == '0' & lutador == "imgs/personagens/sagat.gif") {
        lutador_2.innerHTML = '<img src="imgs/derrotados/sagatderrotado.gif">'
    } else if (vida_2 == '0' & lutador == "imgs/personagens/vega.gif") {
        lutador_2.innerHTML = '<img src="imgs/derrotados/vegaderrotado.gif">'
    } else if (vida_2 == '0' & lutador == "imgs/personagens/zangief.gif") {
        lutador_2.innerHTML = '<img src="imgs/derrotados/zangiefderrotado.gif">'
    }
}

function tirar_vida2() {
    var lutador = pers1.value
    vida_1 = vida_1 - 5;
    vida_lt1.style.width = vida_1 + `%`;

    if (vida_1 == '0' & lutador == "imgs/personagens/bison.gif") {
        lutador_1.innerHTML = '<img src="imgs/derrotados/mbisonderrotado.gif">'
    } else if (vida_1 == '0' & lutador == "imgs/personagens/balrog.gif") {
        lutador_1.innerHTML = '<img src="imgs/derrotados/balrogderrotado.gif">'
    } else if (vida_1 == '0' & lutador == "imgs/personagens/blanka.gif") {
        lutador_1.innerHTML = '<img src="imgs/derrotados/blankaderrotado.gif">'
    } else if (vida_1 == '0' & lutador == "imgs/personagens/chun-li.gif") {
        lutador_1.innerHTML = '<img src="imgs/derrotados/chunliderrotado.gif">'
    } else if (vida_1 == '0' & lutador == "imgs/personagens/dhalsim.gif") {
        lutador_1.innerHTML = '<img src="imgs/derrotados/dhalsimderrotado.gif">'
    } else if (vida_1 == '0' & lutador == "imgs/personagens/ehonda.gif") {
        lutador_1.innerHTML = '<img src="imgs/derrotados/ehondaderrotado.gif">'
    } else if (vida_1 == '0' & lutador == "imgs/personagens/guile.gif") {
        lutador_1.innerHTML = '<img src="imgs/derrotados/guilederrotado.gif">'
    } else if (vida_1 == '0' & lutador == "imgs/personagens/ken.gif") {
        lutador_1.innerHTML = '<img src="imgs/derrotados/kenderrotado.gif">'
    } else if (vida_1 == '0' & lutador == "imgs/personagens/ryu.gif") {
        lutador_1.innerHTML = '<img src="imgs/derrotados/ryuderrotado.gif">'
    } else if (vida_1 == '0' & lutador == "imgs/personagens/sagat.gif") {
        lutador_1.innerHTML = '<img src="imgs/derrotados/sagatderrotado.gif">'
    } else if (vida_1 == '0' & lutador == "imgs/personagens/vega.gif") {
        lutador_1.innerHTML = '<img src="imgs/derrotados/vegaderrotado.gif">'
    } else if (vida_1 == '0' & lutador == "imgs/personagens/zangief.gif") {
        lutador_1.innerHTML = '<img src="imgs/derrotados/zangiefderrotado.gif">'
    }
}
function revanche() {
    location.reload();
}
