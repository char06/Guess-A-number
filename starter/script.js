"use strict";

//This defines the number that will be selected as the secre_number.
let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Created this function to DRY the code and remove repeative code, in this case
//In this case with this on document.querySelector(".number").textContent
//const displayMessage = function (message) {
//document.querySelector(".message").textContent = message;
//}

//This resets the again back to its original settings.
document.querySelector(".again").addEventListener("click", function () {
  secret_number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").style.width = "15em";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = " ";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // Game logic
  //If there is no input in the check box
  if (!guess) {
    document.querySelector(".message").textContent = " ❌ No number!";
    // This compares the guess to the secret number
  } else if (guess === secret_number) {
    // This will indicate when the user enters a matching number and changes the body background color to green.
    document.querySelector(".message").textContent = " 🎉 Correct Number!";
    document.querySelector(".number").textContent = secret_number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30em";
    //This assigs the highest score to the game
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
    // This will indicate if the guess is greater than the secret number.
  } else if (guess !== secret_number) {
    if (score > 1) {
      //used the ternary operator to create DRY code.
      document.querySelector(".message").textContent =
        guess > secret_number ? "⬆️ Number too High!" : "⬇️ Number too Low!";
      //This code will decrease the score every time there is a wrong answer.
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💥💀Game over,you LOST!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
