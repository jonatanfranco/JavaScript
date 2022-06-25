const cacular = document.getElementById('calcular')

function imc(){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getAnimations('resultado')

    if(nome !== '' && peso != ''){
       alert('valor preenchido!')
       const valorIMC = (peso / (altura * altura)).toFixed(2)

       resultado.textContent = valorIMC

    }else{
        resultado.textContent = 'preencha todos os campos!'
    }
}
calcular.addEventListener('click', imc)