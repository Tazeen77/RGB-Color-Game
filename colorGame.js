
var noOfSquares=6;
//pallet
var arr= [];
//color picked for target
var picked;
//to get all the squares div
var squares = document.getElementsByClassName("square");
//to get the RGB display
var colorDisplay = document.getElementById("colorDisplay");
//message that can be empty, try again or correct
var message = document.getElementById("message");
//heading
var head = document.querySelector("h1");
//reset button
var reset = document.getElementById("NewColor");
//easy button
var easybtn = document.getElementById("easybtn");
//hard button
var hardbtn = document.getElementById("hardbtn");


init();

//function init to be called at the time of page loading
function init()
{
	//generate random coloured palette
	arr= generateRandomColor(noOfSquares);
	//get target color randomly from the array size
	picked = arr[randomPickedColorIndex()];
	//updating target RGB display
	colorDisplay.textContent = picked;

	for(var i=0;i<squares.length;i++)
		{
			//setting square's color one by one to palette color
			squares[i].style.backgroundColor=arr[i];

			//adding eventListener to all squares
			squares[i].addEventListener("click",function(){
				if(picked===this.style.backgroundColor)
					{
						message.textContent="Correct";
						message.style.color="green";
						//when correct, set everything to the target color and set newcolor to playagain
						changeColor(this.style.backgroundColor);
						reset.textContent="Play Again?";
					}
				else
					{
						message.textContent="Try Again";
						message.style.color="red";
						//to hide the wrong square
						this.style.backgroundColor ="#232323";
					}
			});
		}
}

//eventlistener for reset button
reset.addEventListener("click", resetIn);

//eventlistener for easy button
easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	noOfSquares=3;
	picked = arr[randomPickedColorIndex()];
	for(var i=3;i<6;i++)
		squares[i].style.display="none";
});


//eventlistener for hard button
hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	noOfSquares=6;
	resetIn();
	for(var i=0;i<squares.length;i++)
		{
			squares[i].style.display="block";
		}

});

//to get the random color from existing palette
function randomPickedColorIndex()
{
	return Math.floor(Math.random()*arr.length);
}

//to get the random palette of colors
function generateRandomColor(limit)
{
	var color=[];
	for(var i=0;i<limit;i++)
		color.push(rgbGenerator());
	return color;

}


//to generate a single rgb 
function rgbGenerator()
{
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")" ;
}

//when correct, change everything to the correct color
function changeColor(color)
{
	for(var i=0;i<squares.length;i++)
		squares[i].style.backgroundColor=color;
	head.style.backgroundColor=color;
}



//set things when player try to reset
function resetIn(){
	arr=generateRandomColor(noOfSquares);
	picked=arr[randomPickedColorIndex()];
	colorDisplay.textContent = picked;
	message.textContent="";
	head.style.backgroundColor= "steelblue";

	for(var i=0;i<squares.length;i++)
		squares[i].style.backgroundColor=arr[i];

}





