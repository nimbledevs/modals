'use strict' ;
let openButtons = document.querySelectorAll('.show-modal'); 
console.log (openButtons);
let box = document.querySelector('.modalBox') ;
let closeModal = document.querySelector('.close-modals');
let body = document.querySelector('body');
let overlay = document.querySelector('.overlay');

for (let i = 0 ; i < openButtons.length ;i++ )
openButtons[i].addEventListener('click',()=>{
    box.classList.remove('hidden');
    overlay.classList.remove ('hidden')

});
let closeModalbox = function (){
    box.classList.add('hidden');
    overlay.classList.add('hidden'); 
}

closeModal.addEventListener('click',closeModalbox);
overlay.addEventListener('click',closeModalbox);

