const totalGuesses = [];
let valid_num = false
let number, input;

while (!valid_num) {
    input = window.prompt("Enter a number:");
    number = Number(input);

    if (number != NaN && number > 0) {
        valid_num = true;
    }
}

const num = Math.floor(Math.random() * number) + 1;

console.log(num);

function doGuess() {
    const guess = Number(document.getElementById("guess").value);

    const message = document.getElementById("message");

    console.log(guess);

    if(guess == num) {
        message.innerHTML = "Correct!";
    }
    else if (guess > num) {
        message.innerHTML = "Too high!"
    }
    else {
        message.innerHTML = "Too low!"
    }
};