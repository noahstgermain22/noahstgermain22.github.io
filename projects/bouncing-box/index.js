
/*eslint-disable no-unused-vars */
(function(){
    'use strict';
    /* global jQuery */

    //////////////////////////////////////////////////////////////////
    /////////////////// SETUP DO NOT DELETE //////////////////////////
    //////////////////////////////////////////////////////////////////
    
    var box = jQuery('.box');	// reference to the HTML .box element
    var board = jQuery('.board');	// reference to the HTML .board element
    var boardWidth = board.width();	// the maximum X-Coordinate of the screen
    
    // Every 50 milliseconds, call the update Function (see below)
    var interval = setInterval(update, 50);
    

    
    // Every time the box is clicked, call the handleBoxClick Function (see below)
    box.on('click', handleBoxClick);

    // moves the Box to a new position on the screen along the X-Axis
    function moveBoxTo(newPositionX) {
        box.css("left", newPositionX);
    }
    
    
    
    // changes the text displayed on the Box
    function changeBoxText(newText) {
        box.text(newText);
    }

    //////////////////////////////////////////////////////////////////
    /////////////////// YOUR CODE BELOW HERE /////////////////////////
    //////////////////////////////////////////////////////////////////
    
    // TODO 2 - Variable declarations 
   var positionX = 0;
   var points = 0;
    var speed = 10;
    var positionY = 0;
    var directionY = 0;
   /* var boardHeight = jQuery(window).height();*/
    
    /*
    This Function will be called 20 times/second. Each time it is called,
    it should move the Box to a new location. If the box drifts off the screen
    turn it around! 
    */
    
  
    function update() {
   positionX = positionX + speed;
  moveBoxTo(positionX);
    if (positionX > boardWidth) {
        speed = points * -3;
}
    if (positionX < 0){
       speed = points * 3; 
    }
   
   box.css('top', positionY);
   
   positionY = directionY + speed;
    directionY = positionY + speed; 
   
    if (positionY > 600){
        directionY = -speed;
        
    }
    if (positionY < 0){
        directionY = speed;
        
    }
    
}
 


    /* 
    This Function will be called each time the box is clicked. Each time it is called,
    it should increase the points total, increase the speed, and move the box to
    the left side of the screen.
    */
    function handleBoxClick() {
     positionX = 0;
     positionY = 0;
     changeBoxText(1);
      points = points + 1;
    changeBoxText(points);
    speed = points * 3;
    
    
}
   
})();