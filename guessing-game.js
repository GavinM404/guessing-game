// Importing readline
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

const askRepeat = () => {
    const repeatYesOrNo = (answer) => {
        if (!answer.toLowerCase() === 'yes'){
            console.log('Ok! Bai!');
            r1.close();
            return false;
          }
        if (answer.toLowerCase() === 'yes') {
          askLimit();
        }
      };
    r1.question("Would you like to play again? ",repeatYesOrNo)
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
        max = Number(num);
        r1.question("Enter a min number: ", secondAnswer);

    }
    const secondAnswer = (num) => {
        min = Number(num);
        secretNumer = randomInRange(min, max);
        askGuess();
    }
    r1.question("Enter a max number: ", firstAnswer)

}



const checkGuess = (num) => {

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
        r1.close()
        console.log('You lose!');
        askRepeat();
    }
    r1.question("Make your guess! ", (guess) =>{
        if (!checkGuess(guess)) {
            askGuess();
    }

 })
};



askLimit()
