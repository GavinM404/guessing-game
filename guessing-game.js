// Importing readline
const readline = require('readline');


// Creating interface
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let secretNumer = 42;

const checkGuess = (num) => {

    if (Number(num) > secretNumer){
        console.log("Too high.")
        return false;

    } else if (Number(num) < secretNumer) {
        console.log("Too low.")
        return false;
    } else if (Number(num) === secretNumer) {
        console.log("Correct!!")
        r1.close();
        return true;

    }

};

const askGuess = (guess) => {
 r1.question("Make your guess! ", (guess) =>{
    if (!checkGuess(guess)) {
        askGuess();
    }
 })
};
askGuess();
