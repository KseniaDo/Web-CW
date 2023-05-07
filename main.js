let slider1 = document.querySelector('#sliderJs1')
let slider2 = document.querySelector('#sliderJs2')
let slider3 = document.querySelector('#sliderJs3')

let offset1 = 0
let offset2 = 0
let offset3 = 0
setInterval(function(){
    offset1-=500
    if(offset1 < -500*3){
        offset1=0
    }
    slider1.style.left = offset1 + 'px'
}, 2000)

setInterval(function(){
    offset2-=300
    if(offset2 < -300*3){
        offset2=0
    }
    slider2.style.left = offset2 + 'px'
}, 2000)

setInterval(function(){
    offset3-=300
    if(offset3 < -300*3){
        offset3=0
    }
    slider3.style.left = offset3 + 'px'
}, 2000)