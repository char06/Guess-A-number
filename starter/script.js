"use strict";

//This defines the number that will be selected as the secre_number.
const secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secret_number;

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
    document.querySelector("body").style.backgroundColor = "#60b347";

    // This will indicate if the guess is greater than the secret number.
  } else if (guess > secret_number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬆️ Number too High!";
      //This code will decrease the score every time there is a wrong answer.
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💥💀Game over,you LOST!";
      document.querySelector(".score").textContent = 0;
    }
    // This will indicate if the guess is lower than the secret number.
  } else if (guess < secret_number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬇️ Number too Low!";
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
