'use strict';

var hamburguerButton= document.querySelector('.hamburguer-button');
var hamburguerButtonClose= document.querySelector('.hamburguer-button-close');
var menuLateral= document.querySelector('.menu-lateral');

function showMenu() {
  menuLateral.classList.toggle('animation-menu');
  hamburguerButton.classList.toggle('close-button');
}

hamburguerButton.addEventListener('click', showMenu);

// colapsables

function displayStories(target) {
  var idStories = target.currentTarget.getAttribute('data-id');
  var stories = document.querySelectorAll('.panel-body');
  var storiesContainer = document.querySelectorAll('.container-fluid');
  stories[idStories].classList.toggle('hidden');
}

var storiesContainer = document.querySelectorAll('.container-fluid');

for (var i = 0; i < storiesContainer.length; i++) {

  if(storiesContainer){
    storiesContainer[i].addEventListener('click', displayStories);
  }
};

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
