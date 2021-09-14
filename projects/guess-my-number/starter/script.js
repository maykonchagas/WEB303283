'use strict';

// Sorteio do número que será realizado toda vez que iniciamos o jogo.
let secretNumber = Math.trunc(Math.random() * 20 + 1);

// Variável da pontuação, que será usada para decrementar o valor inicial
let score = 20;
let highscore = 0;

// Tirar no final do jogo
//document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ Insira um número!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Você acertou!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 muito alto' : '📉 muito baixo');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 você perdeu!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Clique no botão De novo! Para voltar as mensagens no estado atual
// e reiniciar o jogo sem perder o valor do highscore.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20 + 1);

  console.log((secretNumber = Math.trunc(Math.random() * 20 + 1)));

  document.querySelector('.message').textContent = '🔍 Adivinhe...';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
