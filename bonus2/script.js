//console.log("ciao");
const image = document.getElementById('lamp')
//console.log(image)
const mainButton = document.getElementById('button')
console.log(mainButton)
const bt1 = document.getElementById('btn1')

const bt2 = document.getElementById('btn2')

const bt3 = document.getElementById('btn3')

const bt4 = document.getElementById('btn4')

const bt5 = document.getElementById('btn5')

mainButton.style.fontSize = '30px'
bt1.style.fontSize = '30px'
bt2.style.fontSize = '30px'
bt3.style.fontSize = '30px'
bt4.style.fontSize = '30px'
bt5.style.fontSize = '30px'

mainButton.addEventListener('click' , function () {
    
    if(image.src.includes("white_lamp.png") ){
    image.src =" img/yellow_lamp.png "
    image.alt = "lampadina accesa"
    mainButton.innerText = 'spengimi';
    mainButton.style.display = "none"
    bt1.style.display = "inline"
    
    
     } else{
        image.src =" img/white_lamp.png "
        image.alt = "lampadina spenta"
        mainButton.innerText = 'acendimi';
        console.log('sono nell else ')
     }
})

bt1.addEventListener('click', function() {
   bt1.style.display = "none"
   bt2.style.display = "inline"
})


bt2.addEventListener('click', function(){
   bt2.style.display = "none"
   bt3.style.display = "inline"
})


bt3.addEventListener('click', function(){
   bt3.style.display = "none"
   bt4.style.display = "inline"
})


bt4.addEventListener('click', function(){
   bt4.style.display = "none"
   bt5.style.display = "inline"
})

bt5.addEventListener('click', function(){
   bt5.style.display = "none"
   mainButton.style.display = "inline"
})

