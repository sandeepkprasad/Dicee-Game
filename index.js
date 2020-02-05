// Code for 1st dice.
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random number between 1 to 6.
var randomImageSource = "images/dice" + randomNumber1 + ".png"; // Random dice image.
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); // Set random image attribute.

// Code for 2nd dice.
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Code for result declaration.
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
