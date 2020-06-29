let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); //....
let box = 32; // 32px cada quadradinho
let snake = [];
snake [0] = {
  x: 8 * box,
  y: 8 * box
}
let direction = "right";

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
function iniciarJogo() {
  criarBG();
  criarCobrinha();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  //coordenadas da cobrinha
  if(direction == "right") snakeX += box; // acrescenta uma box a mais
  if(direction == "left") snakeX -= box; // diminui uma box para dar a impressão que ela está indo para esquerda
  if(direction == "up") snakeY -= box;
  if(direction == "down") snakeY += box;

  // função que retira o último elemento do nosso array
  snake.pop();

  // método que acrescenta elemento
  let newHead = {
    x: snakeX,
    y: snakeY
  }
  snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); // a cada 100ms o jogo será iniciado
