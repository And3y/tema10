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
var third = document.querySelectorAll('.third-group');
var buttonWrap = document.querySelectorAll('.button-wrap');
var tekstOne = document.getElementById('tekst1');
var tekstTwo = document.getElementById('tekst2');
var tekstThree = document.getElementById('tekst3');
var info = document.getElementById('infogfx');
var cta = document.getElementById('call-to-action');
var nextOne = document.getElementById('next-1');
var nextTwo = document.getElementById('next-2');
var nextThree = document.getElementById('next-3');

nextOne.addEventListener('click', nextScreenOne);
nextTwo.addEventListener('click', nextScreenTwo);
nextThree.addEventListener('click', nextScreenThree);

function log(loggDis) {
    console.log(loggDis);
}

function nextScreenOne() {
    hideButton(buttonWrap[0]);
    showButton(buttonWrap[1]);
    fadeTextOut(second);
    hideDiv(tekstOne);
    hideDiv(tekstTwo);
    showDiv(info);
    log('fra 1 til 2');

    setTimeout(function () {
        nextTwo.classList.add('btn-animation');
    }, 7000)

}

function nextScreenTwo() {
    hideButton(buttonWrap[1]);
    showButton(buttonWrap[2]);
    hideDiv(info);
    showDiv(tekstThree);

    setTimeout(function () {
        fadeIn(intro[5]);
    }, 500);

    setTimeout(function () {
        fadeIn(intro[6]);
    }, 2000);
    log('fra 2 til 3');

    setTimeout(function () {
        nextThree.classList.add('btn-animation');
    }, 5000)

}

function nextScreenThree() {
    hideButton(buttonWrap[2]);
    hideDiv(tekstThree);
    fadeTextOut(third);
    showDiv(cta);
    log('fra 3 til 4');
}

//  Hide the buttons to come *omnious music*
for (var i = 0; i < buttonWrap.length; i++) {
    buttonWrap[i].style.display = 'none';
    buttonWrap[0].style.display = 'flex';
}

//  Hide all text
for (var i = 0; i < intro.length; i++) {
    intro[i].style.opacity = '0';
}

// reveal first line
first[0].classList.add('fade-in');

// reveal another line
function fadeIn(arrayName) {
    arrayName.classList.remove('fade-out');
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
    fadeOut(divName)
    divName.style.display = 'none';
}

function showDiv(divName) {
    divName.style.display = 'block';
    fadeIn(divName);
}

function hideButton(divName) {
    divName.style.display = 'none';
}

function showButton(divName) {
    divName.style.display = 'flex';
}

// Get goin', son!

hideDiv(info); //hide that sucker
hideDiv(cta); //this one too!

setTimeout(function () {
    fadeIn(first[1]);
}, 2000)

// fade out first group
setTimeout(function () {
    fadeTextOut(first);
}, 5000)

// start of second group
setTimeout(function () {
    fadeIn(second[0]);
}, 6000)

setTimeout(function () {
    fadeIn(second[1]);
}, 7500)

setTimeout(function () {
    fadeIn(second[2]);
}, 10000)

setTimeout(function () {
    nextOne.classList.add('btn-animation');
}, 13000)
