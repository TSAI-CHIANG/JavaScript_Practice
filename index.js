// var player1 = prompt("Playe 1's Name:");
// var player2 = prompt("Playe 2's Name:");


var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImgSrc1 = "./images" + "/dice" + randomNumber1 + ".png"
var image1 = document.querySelectorAll("div img")[0];
image1.setAttribute("src", randomDiceImgSrc1)

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImgSrc2 = "./images" + "/dice" + randomNumber2 + ".png"
var image2 = document.querySelectorAll("div img")[1];
image2.setAttribute("src", randomDiceImgSrc2)


// if (randomNumber1 === 1) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
// }
// else if (randomNumber1 === 2) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice2.png");

// }

// else if (randomNumber1 === 3) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
// }

// else if (randomNumber1 === 4) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
// }

// else if (randomNumber1 === 5) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
// }

// else {
//     document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
// }


//



// if (randomNumber2 === 1) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
// }
// else if (randomNumber2 === 2) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice2.png");

// }

// else if (randomNumber2 === 3) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
// }

// else if (randomNumber2 === 4) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
// }

// else if (randomNumber2 === 5) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
// }

// else {
//     document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
// }


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"

}

