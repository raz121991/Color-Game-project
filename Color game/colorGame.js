var numColors = 6;
var squareColors = [];
var pickedColor;
var numOfTries = 0;

var squares = document.querySelectorAll(".square");
var rgbHeader = document.querySelector("#rgbHeader");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("button");
var modeButtons = document.querySelectorAll(".mode");
var tries = document.querySelector("#tries");

init();

function init(){
	setUpModes();
	setUpSquares();
	reset();
}

function setUpModes(){

for(var i = 0; i < modeButtons.length;i++)
{
   modeButtons[i].addEventListener("click",function(){
	modeButtons[0].classList.remove("selected");
	modeButtons[1].classList.remove("selected");
	this.classList.add("selected");
	if(this.textContent === "Easy")
	{
		numColors = 3;
	}
	else
	{
		numColors = 6;
	}
 reset();
   });
}
}

function setUpSquares(){

for(var i = 0; i < squares.length;i++)
{
	// coloring the squares in random colors
	squares[i].style.background = squareColors[i];
	// adding event listeners
	squares[i].addEventListener("click",function(){
		var currColor = this.style.background;
		if(currColor === pickedColor)
		{
			messageDisplay.textContent = "You are correct!";
			resetButton.textContent = "Play Again?";
			tries.textContent = "Tries: " + (numOfTries + 1);
			paintSameColorBlocks(pickedColor);
			h1.style.background = pickedColor;
		}
		else
		{
			updateNumOfTries();
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
  }
}



	
function updateNumOfTries(){
	tries.textContent = "Tries: " + ++numOfTries;
}

function reset(){
	squareColors = generateRandomColors(numColors);
	//pick a new random color from array
	pickedColor = pickColor();
	// change header to match the picked color
	rgbHeader.textContent = pickedColor;
	//reseting the number of tries per attempt
	numOfTries = 0;
	tries.textContent = "Tries: " + numOfTries;
	for(var i = 0; i < squares.length;i++)
	{
		if(squareColors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.background = squareColors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	resetButton.textContent = "New colors";
	messageDisplay.textContent = "";
}

//reset button event which resets the blocks color
resetButton.addEventListener("click",function(){
	reset();
})

//paint all blocked in the picked color
function paintSameColorBlocks(pickedColor){
	for(var i = 0; i < squares.length;i++)
	{
		squares[i].style.background = pickedColor;
	}
}

//picks a random color from the squares array
function pickColor(){
	var random = Math.floor(Math.random() * squareColors.length);
	return squareColors[random];
}

// creation of random array and inserting random colors into it
function generateRandomColors(num){
	var rand = [];
	for(var i = 0; i < num; i++)
	{
		var randColor = getRandColor();
		rand.push(randColor);
	}
	return rand;
}

//generate random rgb color
function getRandColor(){
	//rgb(0-255,0-255,0-255)
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")"; 
}