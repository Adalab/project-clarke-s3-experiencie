'use strict';


var counterParagrapHidden = document.querySelector('.paragraph-counter');


var counter = 0;
var time = document.querySelector('.cie-counter');
var total = 7597;
var temp = setInterval(incrementCounter, 10);

function incrementCounter(){
  if(counter < 7500) {
    counter =  counter + 100;
    time.innerHTML = counter;
  } else if(7500 <= counter && counter < total){ // 7499 - 7596
    counter =  counter + 1;
    time.innerHTML = counter;
  } else {
    clearInterval(temp);
    counterParagrapHidden.classList.remove('hidden-xs');
  }
}
