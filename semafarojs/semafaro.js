const img = document.getElementById('img')
const buttons = document.getElementById('buttons')

const trafficLight = (event) =>{
    turnOn[event.target.id]()
}
//*const nextIndex = () => {
  //  if (colorIndex < 2){
    //    colorIndex++
   // }else{
   //     colorIndex = 0;
   // }

//}
const changecolor = () => {
    const colores = ['red', 'yellow', 'grenn']
    const color = colors[colorIndex]
    turnOn[color]()
    colorIndex++
    //nextIndex()
}

const turnOn = {
    'red': () => img.src = './img/vermelho1.jpeg',
    'yellow': () => img.src = './img/amarelo.jpeg',
    'green': () => img.src = './img/verde.jpeg',
    'automatic' : () => setInterval(changecolor, 100)
}
buttons.addEventListener('click', trafficLight)



