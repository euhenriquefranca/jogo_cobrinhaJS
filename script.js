let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); //....
let box = 32; // 32px cada quadradinho
let snake = [];
snake [0] = {
  x: 8 * box,
  y: 8 * box
}
let direction = "right";
let food = { // gera números aleatório dentro do canvas
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
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
// comida para cobrinha
function drawFood() {
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, box, box);
}

// ao apertar a tecla o ouvidor de eventos vai chamar a update e passar como argumento o evento de tecla que foi citado.
document.addEventListener('keydown', update);

function update (event) {
  if(event.keyCode == 37 && direction != "right") direction = "left";
  if(event.keyCode == 38 && direction != "down") direction = "up";
  if(event.keyCode == 39 && direction != "left") direction = "right";
  if(event.keyCode == 40 && direction != "up") direction = "down";

}

// definir a direção da snake e impedir que ela desapareça da tela
function iniciarJogo() {
  if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
  if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
  if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
  if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

  criarBG();
  criarCobrinha();
  drawFood();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  //coordenadas da cobrinha
  if(direction == "right") snakeX += box; // acrescenta uma box a mais
  if(direction == "left") snakeX -= box; // diminui uma box para dar a impressão que ela está indo para esquerda
  if(direction == "up") snakeY -= box;
  if(direction == "down") snakeY += box;

  if(snakeX != food.x || snakeY != food.y) {
    snake.pop();    
  }
  else{food.x = Math.floor(Math.random() * 15 + 1) * box;
    food.y = Math.floor(Math.random() * 15 + 1) * box;
  }

  // método que acrescenta elemento
  let newHead = {
    x: snakeX,
    y: snakeY
  }
  snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); // a cada 100ms o jogo será iniciado
