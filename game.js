const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
resize();
let x = canvas.width/2;
let y = canvas.height/2;
tick();

function tick() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillRect(x-5,y-5,10,10);

  if (false) {
    
  }

  window.requestAnimationFrame(tick);
}

window.onresize = function(){
  resize();
}

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
