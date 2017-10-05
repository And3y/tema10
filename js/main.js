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
var tekst = document.querySelector('.tekst');
var info = document.querySelector('.infogfx');

//  Hide all text
for (var i = 0; i < intro.length; i++) {
    intro[i].style.opacity = '0';
}

// reveal first line
first[0].classList.add('fade-in');

// reveal another line
function fadeIn(arrayName) {
    arrayName.classList.add('fade-in');
}

// fade text out
function fadeItOut(arrayName) {
    if (arrayName[1].classList.contains('fade-in')) {
        for (var i = 0; i < arrayName.length; i++) {
            arrayName[i].classList.remove('fade-in');
            arrayName[i].classList.add('fade-out');
        }
    }
}

// Hide text-div
function hideText() {
    tekst.style.display = 'none';
}

info.style.display = 'none';



function showMap() {
    info.style.display = 'block';
    fadeIn(info);
}

// Get goin'

setTimeout(function () {
    fadeIn(first[1]);
}, 2000)

// fade out first group
setTimeout(function () {
    fadeItOut(first);
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
    fadeItOut(second);
}, 9000)

setTimeout(hideText, 11000);
setTimeout(showMap, 11000);