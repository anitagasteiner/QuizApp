function init() {
    showQuestion();
    showAnswers();
    showQuestionNumber();
    showNumberOfQuestions();
}

function showQuestion() { // Aktuelle Frage wird angezeigt.
    let question = questions[currentQuestion]['question']; // an der Stelle "currentQuestion" -> Variable "currentQuestion" dafür definiert
    document.getElementById('questionText').innerHTML = question;
}

function showAnswers() { // Zur aktuellen Frage gehörige Antwortmöglichkeiten werden angezeigt.
    let answers = document.getElementById('answers');
    answers.innerHTML = generateAnswersHTML();
}

function showQuestionNumber() { // Nummer der aktuellen Frage wird angezeigt.
    let number = currentQuestion + 1;
    document.getElementById('questionNumber').innerHTML = number;
}

function showNumberOfQuestions() { // Anzahl der Fragen insgesamt wird angezeigt.
    document.getElementById('numberOfQuestions').innerHTML = questions.length;
}

function nextQuestion() { // Nächste Frage wird angezeigt.
    let numberOfQuestions = questions.length;
    if (currentQuestion < numberOfQuestions - 1) {
        currentQuestion = currentQuestion + 1;
        init();
    } else {
        alert('This was the last question.')
    }  
}

function proofAnswer(currentQuestion, selection) { // Diese Funktion wird beim Klicken auf eine Antwortmöglichkeit ausgeführt. Folgende Variablen werden übergeben: "currentQuestion" -> welche Frage gerade angezeigt wird; "selection" -> Nummer der gewählten Antwortmöglichkeit (1, 2, 3 oder 4)
    let rightAnswer = questions[currentQuestion]['rightAnswer'];
    let chosenAnswer = document.getElementById('answer' + selection);
    if (rightAnswer == selection) {
        chosenAnswer.classList.add('bg-green');
        // chosenAnswer.parentNode.classList.add('bg-success'); -> 'bg-success': von bootstrap vordefinierter grüner Hintergrund, wird durch "parentNode" dem übergeordneten Element hinzugefügt
    } else {
        chosenAnswer.classList.add('bg-red');
        // chosenAnswer.parentNode.classList.add('bg-danger'); -> 'bg-danger': von bootstrap vordefinierter roter Hintergrund, wird durch "parentNode" dem übergeordneten Element hinzugefügt
    }
}