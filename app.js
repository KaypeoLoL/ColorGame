var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("h1 span");
var header = document.querySelector("header");
var messageDisplay = document.querySelector("#message");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for(var i=0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      if(this.textContent ==="Easy"){
        numOfSquares = 3;
      } else {
        numOfSquares = 6;
      }
      reset();
    });
  }
}
function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function (){
      //grab color of clicked squares
      var clickedColor = this.style.background;
      //compare color to pickedColor
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        header.style.background = clickedColor;
      }else {
        this.style.background ="#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}
function reset(){
  colors = generateRandomColors(numOfSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
    squares[i].style.display ="block";
    squares[i].style.background = colors[i];
  } else {
    squares[i].style.display ="none";
  }
  }
  header.style.background = "steelblue";
  messageDisplay.textContent = "";
  resetButton.textContent = "New colors";
}

resetButton.addEventListener("click", function(){
  reset();
});




function changeColors(color) {
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
  header.style.background = color;

}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generateRandomColors(num){
  //declare array
  var arr = [];
  //repeat num of times
  for(var i = 0; i < num; i++){
    //get a random color
    arr.push(randomColor());
  }
  return arr;
};

function randomColor(){
  //pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick a "red" from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick a "red" from 0-255
  var b = Math.floor(Math.random() * 256);
  //return a rgb
  "rgb(r, g, b)"
  return "rgb(" + r +", " + g + ", " + b + ")";
};
