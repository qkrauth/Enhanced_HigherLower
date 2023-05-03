const totalGuesses = [];
let valid_num = false
let number, input;

while (!valid_num) {
    input = window.prompt("Enter a number:");
    number = Number(Math.round(input));

    if (number != NaN && number > 0) {
        valid_num = true;
    }

    console.log(number);
}

const num = Math.floor(Math.random() * number) + 1;

console.log(num);

function doGuess() {
    const guess = Number(document.getElementById("guess").value);

    const message = document.getElementById("message");

    console.log(guess);

    if (guess <= 0 || guess > number) {
        message.innerHTML = `Out of range. Keep your guesses between 1 and ${number}`
        return;
    }

    if (!totalGuesses.includes(guess)) {
        totalGuesses.push(guess)
    } else {
        message.innerHTML = "You already guessed this number, try again"
        return;
    }

    if (guess == num) {
        message.innerHTML = `Correct! It took you ${totalGuesses.length} tries. The numbers you guessed were ${totalGuesses}`
    }

    else if (guess > num) {
        message.innerHTML = "Too high!"

        if (!totalGuesses.includes(guess)) {
            totalGuesses.push(guess)
        }
    }

    else if (guess < num) {
        message.innerHTML = "Too low!"

        if (!totalGuesses.includes(guess)) {
            totalGuesses.push(guess)
        }
    }

    else {
        message.innerHTML = "Try again"
    }
};