$(document).ready( function(){
  var game = $('.game');
  if(game){
    var canvas = game[0];

    canvas.setAttribute('width', '400px');
    canvas.setAttribute('height', '400px');

    var context = canvas.getContext("2d");
    
    context.fillStyle="#FF0000";
    positionX = 10;
    positionY = 10;
    width = 10;
    height = 10;
    context.fillRect(positionX, positionY, width, height);  
  }
});
