// Declaring variables
let randomNum1;
const img1 = document.querySelector(".img1");

let randomNum2;
const img2 = document.querySelector(".img2");

const title = document.querySelector("h1");
const btn = document.querySelector(".btn");

// Call function for initial dice roll or when user resfresh browser
rollDice();

//Add click event to button element
btn.addEventListener("click", () => {
  // call function when user click the button
  rollDice();
});

// Main function to roll the dice and give the result output
function rollDice() {
  randomNum1 = Math.floor(Math.random() * 6) + 1;
  img1.setAttribute("src", `images/dice${randomNum1}.png`);

  randomNum2 = Math.floor(Math.random() * 6) + 1;
  img2.setAttribute("src", `images/dice${randomNum2}.png`);

  if (randomNum1 > randomNum2) {
    title.textContent = "🚩Player 1 Wins!";
  } else if (randomNum2 > randomNum1) {
    title.textContent = "Player 2 Wins!🚩";
  } else {
    title.textContent = "Draw!";
  }
}
