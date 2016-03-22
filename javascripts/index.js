//Variables 
var numberofSquares = 6;
var colors = generateRandomColor(numberofSquares);
var squares = document.querySelectorAll(".sqaure");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var headline = document.querySelector("#headline");
var resetButton = document.querySelector("#reset");
// var easyButton = document.querySelector("#easyButton");
// var hardButton = document.querySelector("#hardButton");
var modeButtons = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;

//loop through the buttons 
for (var i = 0; i < modeButtons.length; i++) {

  modeButtons[i].addEventListener("click", function() {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");

    if (this.textContent === "Easy") {
      numberofSquares = 3;
    } else {
      numberofSquares = 6;
    }
    reset();
  });
}

function reset() {
  colors = generateRandomColor(numberofSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  message.textContent = "";

  for (var i = 0; i < squares.length; i++) {
    //if there is a color in the array 
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }

  }
  headline.style.background = "steelblue";

}

//Loop through the sqaures and each square will get a random color 
//MAIN LOGIC OF THE GAME
for (var i = 0; i < squares.length; i++) {

  squares[i].style.background = colors[i];
  //Add Click listener to the squares 
  squares[i].addEventListener("click", function() {

    var clickedColor = this.style.background;
    // if the clickedColor color is matched with picked color, a message will display saying "Correct" else "Try Again"  
    if (clickedColor === pickedColor) {
      message.textContent = "Correct !!";
      changeColor(clickedColor); // function to change the color
      headline.style.background = clickedColor;
      resetButton.textContent = "Play Again";

    } else {

      this.style.background = "#323232";
      message.textContent = "Try Again!";
    }

  });

} //END OF THE LOOP

//Function for the changing the squares color to the color of the correct answer
function changeColor(color) {
  //loop through the color
  for (var i = 0; i < squares.length; i++) {
    //Change the color of the sqaures to the same color of the correct answer
    squares[i].style.background = pickedColor;
  }
}

//Function to pick up a ranomize number colors array;
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//generateRadnom Color 
function generateRandomColor(num) {
  //create empty array to hold all the random colors
  var newArray = [];

  //loop through the number and push it to the array
  for (var i = 0; i < num; i++) {
    newArray.push(randomColor());
  }
  return newArray
}

//Ceate Random color
function randomColor() {

  var green = Math.floor(Math.random() * 256); // the reason 256 and NOT 255 is that we need to include all numbers 0 to 255
  var blue = Math.floor(Math.random() * 256);
  var red = Math.floor(Math.random() * 256);
  var color = "rgb(" + red + ", " + green + ", " + blue + ")";

  return color;
}

//RESET BUTTON
resetButton.addEventListener("click", function() {
  colors = generateRandomColor(numberofSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors";

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }

  headline.style.background = "steelblue";
  message.textContent = "";
});
