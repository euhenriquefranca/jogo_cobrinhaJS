let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); //....
let box = 32; // 32px cada quadradinho

function criarBG() {
  context.fillStyle = "lightgreen"; // Estilo do Canvas
  context.fillRect(0, 0, 16 * box, 16 * box); // Desenha o retângulo onde vai acontecer o jogo - x e y altura e largura
}

criarBG();