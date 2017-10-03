//      /$$$$$$$$ /$$$$$$$   /$$$$$$  /$$       /$$      
//     |__  $$__/| $$__  $$ /$$__  $$| $$      | $$      
//        | $$   | $$  \ $$| $$  \ $$| $$      | $$      
//        | $$   | $$$$$$$/| $$  | $$| $$      | $$      
//        | $$   | $$__  $$| $$  | $$| $$      | $$      
//        | $$   | $$  \ $$| $$  | $$| $$      | $$      
//        | $$   | $$  | $$|  $$$$$$/| $$$$$$$$| $$$$$$$$
//        |__/   |__/  |__/ \______/ |________/|________/
//
//                                                 BY A&a
var intro = document.querySelectorAll('.intro');
var first = document.querySelectorAll('.first-group');

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
function fadeItOut(){
    if (first[1].classList.contains('fade-in')) {
        for (var i = 0; i < first.length; i++) {
            first[i].classList.remove('fade-in');
            first[i].classList.add('fade-out');
        }
    }
}

// Get goin'
//setTimeout(fadeIn, 2000);
setTimeout(function() {
    fadeIn(first[1]);
}, 2000)

setTimeout(fadeItOut, 4000);