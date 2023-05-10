// Importing readline
const readline = require('readline');


// Creating interface
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let min = 0;
let max = 0;

const randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const askRange = () => {

    const firstAnswer = (num) => {
        max = Number(num);
        r1.question("Enter a min number: ", secondAnswer);

    }
    const secondAnswer = (num) => {
        min = Number(num);
        askGuess();
    }
    r1.question("Enter a max number: ", firstAnswer)

}

let secretNumer = randomInRange(min, max);


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



askRange()
