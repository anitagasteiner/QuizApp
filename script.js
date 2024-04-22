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
        hideButtonNextQuestion(numberOfQuestions);
        init();
    } else {
        showDialogEnd();
        handleDialogEnd();
        noMoreAnswersPossible();
    }  
}

function hideButtonNextQuestion(numberOfQuestions) {
    if (currentQuestion == numberOfQuestions - 1) {
        document.getElementById('buttonNextQuestion').classList.add('hide');
    }    
}

function proofAnswer(currentQuestion, selection) { // Diese Funktion wird beim Klicken auf eine Antwortmöglichkeit ausgeführt. Folgende Variablen werden übergeben: "currentQuestion" -> welche Frage gerade angezeigt wird; "selection" -> Nummer der gewählten Antwortmöglichkeit (1, 2, 3 oder 4)
    let rightAnswer = questions[currentQuestion]['rightAnswer'];
    let chosenAnswer = document.getElementById('answer' + selection);
    if (rightAnswer == selection) {
        chosenAnswer.classList.add('bg-green'); // chosenAnswer.parentNode.classList.add('bg-success'); -> 'bg-success': von bootstrap vordefinierter grüner Hintergrund, wird durch "parentNode" dem übergeordneten Element hinzugefügt
        rightAnswers = rightAnswers + 1;
        handleDialogYes();        
    } else {
        chosenAnswer.classList.add('bg-red'); // chosenAnswer.parentNode.classList.add('bg-danger'); -> 'bg-danger': von bootstrap vordefinierter roter Hintergrund, wird durch "parentNode" dem übergeordneten Element hinzugefügt
        handleDialogNo();
    }
}

function handleDialogYes() {
    document.getElementById('dialogYes').classList.toggle('hide');
}

function handleDialogNo() {
    document.getElementById('dialogNo').classList.toggle('hide');
}

function handleDialogEnd() {
    document.getElementById('dialogEnd').classList.toggle('hide');
}

function showDialogEnd() {
     document.getElementById('totalNumberOfQuestions').innerHTML = questions.length; // Anzahl der Fragen insgesamt wird angezeigt.
     document.getElementById('numberOfRightQuestions').innerHTML = rightAnswers; // Anzahl der richtig beantworteten Fragen wird angezeigt.
}

function restart() {
    currentQuestion = 0;
    rightAnswers = 0;
    document.getElementById('buttonNextQuestion').classList.remove('hide');
}

function noMoreAnswersPossible() { // Nach Beantwortung der letzten Frage wird durch erneutes Klicken auf die einzelnen Antworten keine Funktion mehr aufgerufen.
    document.getElementById('answer1').onclick = null;
    document.getElementById('answer2').onclick = null;
    document.getElementById('answer3').onclick = null;
    document.getElementById('answer4').onclick = null;
}