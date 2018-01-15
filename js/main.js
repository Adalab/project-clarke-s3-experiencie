'use strict';

var hamburguerButton= document.querySelector('.hamburguer-button');
var hamburguerButtonClose= document.querySelector('.hamburguer-button-close');
var menuLateral= document.querySelector('.menu-lateral');

function showMenu() {
  menuLateral.classList.toggle('animation-menu');
  hamburguerButton.classList.toggle('close-button');
    //menuLateral.classList.toggle('hidden');
}

hamburguerButton.addEventListener('click', showMenu);
