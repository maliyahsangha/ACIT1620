
let flashcard = {}; // stores questions and answers

function saveQuestion() {
    flashcard.question = document.getElementById("question").textContent = question.value;
    // value is the input from the user

    console.log(flashcard.question);
    }

function saveAnswer() {
    flashcard.answer = document.getElementById("answer").textContent = answer.value; 

    console.log(flashcard.answer);
    }

function viewFlashcard() {
    let displayCard = document.getElementById("display");
    displayCard.innerHTML =
    `<p>Question: ${flashcard.question}</p>
    <p>Answer: ${flashcard.answer}</p>`;
    } // displays the inputted question and answer