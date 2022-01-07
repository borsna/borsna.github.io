var canvas = document.getElementById("c");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

ctx.font = '32px monospace';
ctx.textBaseline = "center";
ctx.textAlign = "center";

// Create gradient
var gradientBackground = ctx.createLinearGradient(canvas.width/2,0,canvas.width/2,canvas.height);
gradientBackground.addColorStop(0,"LightBlue");
gradientBackground.addColorStop(1,"blue");

ctx.fillStyle = gradientBackground;

(function () {
  var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

gravity = 0.3;
friction = 0.8;
var progress = {
  x: 10,
  y: 1000,
  width:100,
  height:10,
  score: 99,
  max:100,
  draw: function(ctx){
    ctx.fillStyle = 'green';
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width/this.score, this.height);
  }
}
var player = {
  x: canvas.width / 2,
  y: 200,
  width: 100,
  height: 64,
  speed: 3,
  velX: 0,
  velY: 0,
  jumping: false,
  grounded: true,
  draw: function (ctx) {
    ctx.font = '64px monospace';
    ctx.fillText('⚽', this.x, this.y, this.width);
    
  },
  update: function(){
      this.velX *= friction;
      this.velY += gravity;
    
      this.x += this.velX;
      this.y += this.velY;
      if (this.x <= 0) {
        this.x = 0;
        this.velX *= -1;
      }
    
      if (this.y >= canvas.height-this.height/2) {
        this.y = canvas.height-this.height/2;
        this.velY = 0;
        this.grounded = true;
        this.jumping = false;
      }
  }
};

function gameloop() {
  ctx.save();

  ctx.fillRect(0,0,canvas.width,canvas.height);

  // Bottom
  ctx.font = '32px serif';
  for(i=-5;i<canvas.width;i+=26){
    ctx.fillText('📦', i, canvas.height+10);
  }
  
  // Player
  player.update();
  player.draw(ctx);

  progress.draw(ctx);

  ctx.restore();
  requestAnimationFrame(gameloop);
}

window.addEventListener('load', function () {
  gameloop();
});


document.body.addEventListener('mousedown', function(e) {
  
});

document.body.addEventListener('mouseup', function(e) {
  
});

document.body.addEventListener('touchmove', function(e) {
  
});

document.body.addEventListener('touchstart', function(e) {
  
});

document.body.addEventListener('touchend', function(e) {
  
});