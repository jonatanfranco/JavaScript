'use strict'


const display = document.getElementById('display')
const numeros = document.querySelectorAll('[id*=tecla]')
const operadores = document.querySelectorAll('[id*=operador]')


let novoNumero = true
let operador
let numeroAnterior

const operacaoPendente = () => operador !== undefined


const calcular = () => {

    if (operacaoPendente()) {
        const numeroAtual = parseFloat(display.textContent.replace('.','').replace(',', '.'))
        novoNumero = true
        const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`)
        atualizarDisplay(resultado)  
    }
}

