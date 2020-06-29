let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); //....
let box = 32; // 32px cada quadradinho
let snake = [];
snake [0] = {
  x: 8 * box,
  y: 8 * box
}

function criarBG() {
  context.fillStyle = "lightgreen"; // Estilo do Canvas
  context.fillRect(0, 0, 16 * box, 16 * box); // Desenha o retângulo onde vai acontecer o jogo - x e y altura e largura
}

function criarCobrinha() {
  for(i=0; i < snake.length; i++) {
    context.fillStyle = "green"
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
  
}

criarBG();
criarCobrinha();