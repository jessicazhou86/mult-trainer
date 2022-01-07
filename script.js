"use strict";

// come up with random number between 0 and 12
const generateRandNum = function () {
  return Math.trunc(Math.random() * 11) + 1;
};

let score = 0;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNewNums = function () {
  const firstNum = generateRandNum();
  const secondNum = generateRandNum();
  document.querySelector(".number").textContent = `${firstNum} x ${secondNum}`;
  return firstNum * secondNum;
};

let correctAnswer = displayNewNums();

const submitAnswer = function () {
  const answer = Number(document.querySelector(".answer").value);

  // no guess
  if (!answer) {
    displayMessage("no number entered");

    // correct answer
  } else if (answer === correctAnswer) {
    displayMessage("correct!");

    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";

    score++;
    document.querySelector(".score").textContent = score;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    document.querySelector(".answer").value = "";
    document.querySelector(".number").style.width = "15rem";
    correctAnswer = displayNewNums();

    // answer too high or low
  } else if (answer !== correctAnswer) {
    if (score > 0) {
      score--;
      document.querySelector(".score").textContent = score;
    }
    displayMessage(answer > correctAnswer ? "too high" : "too low");
    document.querySelector("body").style.backgroundColor = "red";
  }
};

// check when button clicked and when enter pressed
document.querySelector(".check").addEventListener("click", submitAnswer);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    submitAnswer();
  }
});

// reset using again button
document.querySelector(".again").addEventListener("click", function () {
  correctAnswer = displayNewNums();
  score = 0;
  displayMessage("good luck :)");
  document.querySelector(".score").textContent = score;
  document.querySelector(".answer").value = "";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "15rem";
});
