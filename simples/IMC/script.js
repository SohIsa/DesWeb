const altr = document.getElementById('altr');
const peso = document.getElementById('peso');
const destino = document.getElementById('condicao')

function calculoIMC () {
    let imc = Number(peso.value) / Number(altr.value)**2
    let sexo = document.querySelector('input[name=sexo]').value
    let surpresa

    if (sexo == "fem") {
        if (imc < 19.1) {
            surpresa = "Abaixo do peso"
        } else if (imc <25.8) {
            surpresa = 'Peso Normal'
        } else if (imc < 27.3) {
            surpresa = 'Marginalmente Acima'
        } else if (imc < 32.3) {
            surpresa = 'Acima do peso ideal'
        } else {
            surpresa = "Obeso"
        }
    } else {
        if (imc < 20.7) {
            surpresa = "Abaixo do peso"
        } else if (imc < 26.4) {
            surpresa = 'Peso Normal'
        } else if (imc < 27.8) {
            surpresa = 'Marginalmente Acima'
        } else if (imc < 32.3) {
            surpresa = 'Acima do peso ideal'
        } else {
            surpresa = "Obeso"
        }
    } 

    destino.value = surpresa
}