// ----- random Player1
let randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number between 1 - 6
let randomImageSource = "images/dice" + randomNumber1 + ".png"; // images/dice1.png - dice6.png
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource); //img tag [0]'s src value -> randomImageSource

// ----- random Player2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); //querySelectorAll is for nodes

//----If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆Player1 Won!"; // querySelector is for specific element
} 
else if ( randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆Player2 Won!";
} else {
document.querySelector("h1").innerHTML = "Draw! Do it Again!!";
}