const randomNumber = Math.floor(Math.random()*10) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);

    if (!userGuess || userGuess < 1 || userGuess > 10) {
        alert("Please enter a valid number between 1 and 10.");
        return;
    }

    if (userGuess === randomNumber) {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT.");
    } else if (userGuess > randomNumber) {
        alert("OOPS SORRY!! TRY A SMALLER NUMBER.");
    } else {
        alert("OOPS SORRY!! TRY A LARGER NUMBER.");
    }
}