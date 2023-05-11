// Importing readline
const { clear } = require('console');
const readline = require('readline');


// Creating interface
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let min = 0;
let max = 0;
let secretNumer = 0;
let numAttempts = 5;

const randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const askLimit = () => {
   const limitAsk = (limit) => {
    numAttempts = limit;
    askRange()
   }
   r1.question("How attempts would you like? ",limitAsk)
}

const askRange = () => {

    const firstAnswer = (num) => {
        if (isNaN(num)){
            console.log(`"${num}" is not a valid range.`);
            r1.question("Enter a max number: ", firstAnswer)
        } else {
            max = Number(num);
            r1.question("Enter a min number: ", secondAnswer);

        }

    }
    const secondAnswer = (num) => {
        if (isNaN(num)){
            console.log(`"${num}" is not a valid range.`);
            r1.question("Enter a min number: ", secondAnswer);

        } else {
            min = Number(num);
            secretNumer = randomInRange(min, max);
            askGuess();
        }
    }
    r1.question("Enter a max number: ", firstAnswer)

}



const checkGuess = (num) => {
    if (Number(num) > max || Number(num) < min || isNaN(num)){
        console.log(`Your input of "${num}" is invalid`);
        return false;
    }
    if (Number(num) > secretNumer){
        console.log("Too high.")
        numAttempts--;
        return false;

    } else if (Number(num) < secretNumer) {
        console.log("Too low.")
        numAttempts--;
        return false;
    } else if (Number(num) === secretNumer) {
        console.log("Correct!!")
        //r1.close();
       // return true;
       askRepeat();

    }

};

const askGuess = (guess) => {

    if (numAttempts === 0){
        console.log('You lose!');
        askRepeat();
    }
    r1.question("Make your guess! ", (guess) =>{
        if (!checkGuess(guess)) {
            askGuess();
    }

 })
};

const askRepeat = () => {

    r1.question("Would you like to play again? ", (answer) => {
        if (answer.toLowerCase() === 'yes') {
            clear();
            askLimit();
          } else {
            r1.close()
          }
    })
}


askLimit()
