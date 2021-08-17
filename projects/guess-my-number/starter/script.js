'use strict';
/*
document.querySelector('.message');
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Você acertou!!!';

document.querySelector('.number').textContent = 13;

console.log(document.querySelector('.score'));
//document.querySelector('.score').textContent = 10;
//console.log((document.querySelector('.score').textContent = 10));
*/
console.log(document.querySelector('.guess').value);
//document.querySelector('.guess').value = 10;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
});
