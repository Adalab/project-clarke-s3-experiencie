'use strict';

// colapsables
var showStories = document.querySelectorAll('.flecha-abajo');
var stories = document.querySelector('.panel-body');

// function toggleInput(){
//   if (showStories.classList.contains('hidden')){
// showStories.classList.remove('hidden');
// stories.classList.remove('hidden');
// }
//   else {
//   showStories.classList.add('hidden');
//   stories.classList.add('hidden');
//    }
// }

function toggleInput(target){
  if (target.classList.contains('hidden')){
target.classList.remove('hidden');
// target.classList.remove('hidden');
}
  else {
  target.classList.add('hidden');
  // target.classList.add('hidden');
   }
}

var toggle = function(){
  document.querySelectorAll('.flecha-abajo').forEach(toggleInput);
  var stories = document.querySelector('.panel-body');
  toggleInput(stories);
  };
  document.querySelectorAll('.flecha-abajo').forEach(function (input) {
    input.addEventListener('click', toggle);
  });




showStories.addEventListener('click', toggleInput(input));


// var toggle = function(){
//   document.querySelectorAll('.flecha-abajo').forEach(toggleInput);
// };
//   var aside = document.querySelector('.preview');
//   toggleInput(aside);
//   var main = document.querySelector('main');
// toggleInput(main);

// window.onload = function (){
//   document.querySelectorAll('.eye-logo').forEach(function (input) {
//     input.addEventListener('click', toggle);
//
//   });
// };
