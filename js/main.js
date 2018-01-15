'use strict';

// colapsables
var showStories = document.querySelector('.flecha-abajo');
var stories = document.querySelector('.panel-body');

function toggleInput(target){
  if (target.classList.contains('hidden')){
target.classList.remove('hidden');
}
  else {
  target.classList.add('hidden');
   }
}

var toggle = function(){
  document.querySelectorAll('.flecha-abajo').forEach(toggleInput);
  var stories = document.querySelector('.panel-body');
  toggleInput(stories);
  };
  document.querySelectorAll('.flecha-abajo').forEach(function (target) {
    target.addEventListener('click', toggle);
  });

if(showStories){
  showStories.addEventListener('click', toggle);
}


var counter = 0;
var time = document.querySelector('.cie-counter');
var total = 7597;
var temp = setInterval(incrementCounter, 90);

function incrementCounter(){
  if(!time){
    return clearInterval(temp);
  }

  if(counter < 7500) {
    counter =  counter + 100;
    time.innerHTML = counter;
  } else if(7500 <= counter && counter < total){ // 7499 - 7596
    counter =  counter + 1;
    time.innerHTML = counter;
  } else {
    clearInterval(temp);
  }
}


var text = "Personas que en 2016 fueron encerradas en un Centro de Internamiento de Extranjeros";
var steps = 80;
var i=0;
var message= text.split('');
var paragraphCounter= document.querySelector ('.paragraph-counter');
var writeMachine = setInterval(showMessage,80);

function showMessage (){
  if(i < message.length && paragraphCounter){
    paragraphCounter.innerHTML+=message[i];
    i++;
    clearInterval(showMessage);
  }
}


carousel('pause')
