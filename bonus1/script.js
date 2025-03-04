//console.log("ciao");
const image = document.getElementById('lamp')
//console.log(image)
const mainButton = document.getElementById('button')
console.log(mainButton)


mainButton.addEventListener('click' , function () {
    
    if(image.src.includes("white_lamp.png") ){
    image.src =" img/yellow_lamp.png "
    image.alt = "lampadina accesa"
    mainButton.innerText = 'spengimi';
    
     } else{
        image.src =" img/white_lamp.png "
        image.alt = "lampadina spenta"
        mainButton.innerText = 'acendimi';
        console.log('sono nell else ')
     }
})


