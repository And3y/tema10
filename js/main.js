//      /######## /#######   /######  /##       /##      
//     |__  ##__/| ##__  ## /##__  ##| ##      | ##      
//        | ##   | ##  \ ##| ##  \ ##| ##      | ##      
//        | ##   | #######/| ##  | ##| ##      | ##      
//        | ##   | ##__  ##| ##  | ##| ##      | ##      
//        | ##   | ##  \ ##| ##  | ##| ##      | ##      
//        | ##   | ##  | ##|  ######/| ########| ########
//        |__/   |__/  |__/ \______/ |________/|________/

//                                              BY Team-AA

var intro = document.querySelectorAll('.intro');
var first = document.querySelectorAll('.first-group');
var second = document.querySelectorAll('.second-group');
var tekstOne = document.getElementById('tekst1');
var tekstTwo = document.getElementById('tekst2');
var info = document.querySelector('.infogfx');

//  Hide all text
for (var i = 0; i < intro.length; i++) {
    intro[i].style.opacity = '0';
}

// reveal first line
first[0].classList.add('fade-in');

// reveal another line
function fadeIn(arrayName) {
    arrayName.classList.remove('fade-out')
    arrayName.classList.add('fade-in');
}

// fade text out
function fadeTextOut(arrayName) {
    if (arrayName[1].classList.contains('fade-in')) {
        for (var i = 0; i < arrayName.length; i++) {
            arrayName[i].classList.remove('fade-in');
            arrayName[i].classList.add('fade-out');
        }
    }
}
// fade out div
function fadeOut(className) {
    className.classList.remove('fade-in');
    className.classList.add('fade-out');
}


function hideDiv(divName) {
    fadeOut(info)
    divName.style.display = 'none';
}

function showDiv(divName) {
    divName.style.display = 'block';
    fadeIn(info);
}

// Get goin', son!

hideDiv(info); //hide that sucker

setTimeout(function () {
    fadeIn(first[1]);
}, 2000)

// fade out first group
setTimeout(function () {
    fadeTextOut(first);
}, 4000)

// start of second group
setTimeout(function () {
    fadeIn(second[0]);
}, 5000)

setTimeout(function () {
    fadeIn(second[1]);
}, 6000)

setTimeout(function () {
    fadeIn(second[2]);
}, 7000)
// Fade out second group
setTimeout(function () {
    fadeTextOut(second);
}, 9000)

// show the map
//hide the first textgroup
setTimeout(function () { 
    hideDiv(tekstOne);
}, 11000)
    
setTimeout(function () {
    showDiv(info);
}, 11000)

setTimeout(function () {
    hideDiv(info);
}, 15000)

// after map text

setTimeout(function () {
    fadeIn(intro[5]);
}, 16000);

setTimeout(function () {
    fadeIn(intro[6]);
}, 17000);

// call to action   FIIIXXXXX IIIITTTT 
setTimeout()
setTimeout(function() {
    
}, )