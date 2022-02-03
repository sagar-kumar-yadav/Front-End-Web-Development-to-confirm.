console.log('JS Loaded');

var countdownElement = document.getElementById('countdown');
var bgImageElement = document.getElementById('bg-image');


var initialCountDownVal = countdownElement.innerHTML;

setInterval(function () {
    initialCountDownVal = initialCountDownVal > 0 ? initialCountDownVal - 1 : 0;
    countdownElement.innerHTML = initialCountDownVal;

    var backImgPath = initialCountDownVal % 2 === 0 ? 'image/bg1.jpg' : 'image/bg2.jpg'

    bgImageElement.src = backImgPath;

    console.log('Interval Running')
}, 1000);