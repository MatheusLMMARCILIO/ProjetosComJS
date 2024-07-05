const turnOn = document.querySelector('.TurnOn')
const turnOff = document.querySelector('.TurnOff')
const lamp = document.querySelector('.lamp')


const lampOn = () => {
    lamp.src = './img/ligada.jpg'
}

const lampOff = () => {
    lamp.src = './img/desligada.jpg'
}



turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)




// mouseover == quando o passar o mousse por cima dela
// mouseleave == quando eu tirar o mause de cima dela

