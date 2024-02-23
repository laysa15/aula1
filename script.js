const turnOn = document.getElementById('ligar')
const turnOff = document.getElementById('desligar');
const lamp = document.getElementById('lamp');

function ligar (){
   alert("foi")

   lamp.src = 'ligada.jpg'
}

turnOn.addEventListener('click',ligar);


function desligar (){
    alert("foi")
 
    lamp.src = 'desligada.jpeg'
 }
 
 turnOff.addEventListener('click',desligar);