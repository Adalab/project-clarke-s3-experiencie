'use strict';

// colapsables
var whiteHeadings = document.querySelector('.panel-heading');

function toggleInput(target){
  if (target.classList.contains('hidden'))
  target.classList.remove('hidden');
  // aside.classList.remove('hidden');
  else
  target.classList.add('hidden');
  // aside.classList.add('hidden');
 }
whiteHeadings.addEventListener('click', toggleInput);
