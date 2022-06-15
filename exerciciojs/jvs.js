function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`

    if (hora >= 0 && hora < 12){
        // Bom Dia
        img.src = 'manha2.jpg'
    }else if (hora  >= 12 && < 18){
       //Boa Tarde
        img.src = 'tarde2.jpg'
    }else{
        // Boa Noite
        img.src = 'noite2.jpg'
    }
}