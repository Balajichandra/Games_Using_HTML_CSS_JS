const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");



const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)] // getting random object from words
    let wordArray = randomObj.word.split("");// splitting each letter from word
    for(let i= wordArray.length - 1; i>0;i--){
        let j = Math.floor(Math.random() * (i+1)); // getting random word
        // shuffle and swiping wordArray letters random number
        [wordArray[i],wordArray[j]] = [wordArray[j],wordArray[i]];
    }
    //passing shuffled word as word text
    wordText.innerText = wordArray.join("");

    // passing hint
    hintText.innerText = randomObj.hint;

    // passing random word to correct word
    correctWord = randomObj.word.toLocaleLowerCase();
    //console.log(wordArray,randomObj.word);
}
initGame();

const checkWord = () => {
    //getting user input word
    let userWord = inputField.value.toLocaleLowerCase();
    if(userWord !== correctWord){
        return alert(`OOPS! ${userWord} is not correct word`);
    } else {
        return alert(`Congrats! ${userWord.toUpperCase()} its correct word`);
    }
    initGame();
}

//refresing the words
refreshBtn.addEventListener("click",initGame)
//checking the word
checkBtn.addEventListener("click",checkWord);