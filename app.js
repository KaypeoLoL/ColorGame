var colors = [
  "rgb(255, 0, 0)",
  "rgb(200, 100, 50)",
  "rgb(225, 225, 40)",
  "rgb(255, 50, 100)",
  "rgb(255, 255, 255)",
  "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("h1 span");

var pickedColor = colors[3];

colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.background = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function (){
    //grab color of clicked squares
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
      alert("Correct!");
    }else {
      alert("WRONG!!!");
    }
  });
}
