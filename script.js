console.log("ciao");
const image = document.getElementById('lamp')
console.log(image)
const mainbutton = document.getElementById('button1')
console.log(mainbutton)
mainbutton.addEventListener('click', function() {
    image.src =" img/yellow_lamp.png "
    image.alt = "lampadina accesa"
    console.log('hai cliccato')
    
})