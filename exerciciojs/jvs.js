function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 10
    msg.innerHTML = hora
    
    if(hora >= 0 && hora < 12){
        //Boa Dia
        img.scr ='imagens/manha2.jpg'
        document.body.style.background = '#908d4d'
    }else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'imagens/tarde2.jpg'
        document.body.style.background = '#9b655c'
    }else{
        //Boa Noite
        img.src = 'imagens/noite2.jpg'
        document.body.style.background ='#632c1c'
    }
}