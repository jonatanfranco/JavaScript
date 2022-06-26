const turnOn = document.getElementById('turnOn')
const trueOff = document.getElementById('trueOff')
const lamp = document.getElementById('lamp')


function lampOn(){ //função metodo para execução troca lampada
    lamp.src = './img/ligada.jpg'
}
function lampOff(){
    lamp.src = './img/desligada.jpg'
}
function lampBroken(){ //função metodo para quebrar lampada 
    lamp.src = './img/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn) //funcao
trueOff.addEventListener('click', lampOff ) //função
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('click', lampBroken)//função