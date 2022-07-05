'USE STRICT';
const display = document.getElementById('display')
const numeros = document.getElementById('[id*=tecla]') // seletor todos que tem tecla no nome,mas nao ta funcionando.

const atualizarDisplay = (texto) =>{
    display.textContent += texto
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent)  // nao ta funcionando

numeros.array.forEach(element => {
    click.numeros = addEventListener('click',inserirNumero)
});  // nao ta funcionando