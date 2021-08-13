var playerCount, allPlayers, gameState = 0;
var database;
var form, player; 
var back_img;

function preload()
{
  /*back_img = loadImage("kind court.jpg");*/
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
if(playerCount === 4)
{
  game.update(1);
}
if(gameState === 1)
{
  clear();
  game.play();
}
if(gameState === 2)
{
  game.end();
}

}