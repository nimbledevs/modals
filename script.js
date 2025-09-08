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

// set and map  
const mySet = new Set([1,2,3,3,4,5]);
console.log(mySet); 

console.log(mySet.add(6));
console.log(mySet.has(3));
console.log (mySet.size);