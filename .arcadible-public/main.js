const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function draw(canvas, ctx) {
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function render() {
  resize();
  draw(canvas, ctx);
}

render();

window.addEventListener("resize", render);
