'use strict';

var hamburguerButton= document.querySelector('.hamburguer-button');
var hamburguerButtonClose= document.querySelector('.hamburguer-button-close');
var menuLateral= document.querySelector('.menu-lateral');
// var burguerDown= document.querySelector('.burguer-down');

function showMenu() {
  menuLateral.classList.toggle('animation-menu');
  hamburguerButton.classList.toggle('close-button');

  // burguerDown.classList.toggle('animation-burguer');
}

hamburguerButton.addEventListener('click', showMenu);
