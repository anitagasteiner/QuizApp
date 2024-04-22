function init() {
    showQuestion();
    showAnswers();
    showQuestionNumber();
    showNumberOfQuestions();
}

function showQuestion() {
    let question = questions[currentQuestion]['question']; // an der Stelle "currentQuestion" -> Variable "currentQuestion" dafür definiert
    document.getElementById('questionText').innerHTML = question;
}

function showAnswers() {
    let answers = document.getElementById('answers');
    answers.innerHTML = generateAnswersHTML();
}

function showQuestionNumber() {
    let number = currentQuestion + 1;
    document.getElementById('questionNumber').innerHTML = number;
}

function showNumberOfQuestions() {
    document.getElementById('numberOfQuestions').innerHTML = questions.length;
}