let slider1 = document.querySelector('#sliderJs1')
let slider2 = document.querySelector('#sliderJs2')
let slider3 = document.querySelector('#sliderJs3')

let elemWidth1 = 0
let elemWidth2 = 0
let offset = 0
setInterval(function () {
    elemWidth1 = document.querySelector('.slider_image').offsetWidth
    if ((elemWidth1 != elemWidth2) && (elemWidth2 != 0)) {
        offset = 0
        slider1.style.left = offset + 'px'
        slider2.style.left = offset + 'px'
        slider3.style.left = offset + 'px'
    }
    offset -= elemWidth1
    if (offset < (-1) * elemWidth1 * 3) {
        offset = 0
    }
    elemWidth2 = document.querySelector('.slider_image').offsetWidth
    if (elemWidth1 != elemWidth2) {
        offset = 0
        slider1.style.left = offset + 'px'
        slider2.style.left = offset + 'px'
        slider3.style.left = offset + 'px'
    }
    slider1.style.left = offset + 'px'
    slider2.style.left = offset + 'px'
    slider3.style.left = offset + 'px'
    elemWidth2 = document.querySelector('.slider_image').offsetWidth
}, 2000)