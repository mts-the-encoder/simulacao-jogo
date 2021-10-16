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

