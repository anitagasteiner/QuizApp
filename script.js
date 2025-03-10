function init() {
    showQuestion();
    showAnswers();
    showQuestionNumber();
    showNumberOfQuestions();
    disableButtonNextQuestion();
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

function nextQuestion() {
    if (moreQuestionsLeft()) { // Nächste Frage wird angezeigt.
        currentQuestion++;
        hideButtonNextQuestion();                
        init();
    } else {
        enableButtonResult();
        showDialogEnd();
        handleDialogEnd();        
    }
}

function moreQuestionsLeft() {
    return currentQuestion < questions.length - 1;
}

function hideButtonNextQuestion() {    
    if (arrivedAtLastQuestion()) {
        document.getElementById('buttonNextQuestion').classList.add('hide');
        handleButtonResult();
    }    
}

function arrivedAtLastQuestion() {
    let numberOfQuestions = questions.length;    
    return currentQuestion == numberOfQuestions - 1;
}

function proofAnswer(currentQuestion, selection) { // Diese Funktion wird beim Klicken auf eine Antwortmöglichkeit ausgeführt. Folgende Variablen werden übergeben: "currentQuestion" -> welche Frage gerade angezeigt wird; "selection" -> Nummer der gewählten Antwortmöglichkeit (1, 2, 3 oder 4)
    let rightAnswer = questions[currentQuestion]['rightAnswer'];
    let chosenAnswer = document.getElementById('answer' + selection);
    if (rightAnswer == selection) {
        reactionAnswerRight(chosenAnswer);        
        rightAnswers++;        
        showProgress();        
    } else {
        reactionAnswerWrong(chosenAnswer, rightAnswer);
        showProgress();        
    }
    enableButtonNextQuestion();
    enableButtonResult();
}

function reactionAnswerRight(chosenAnswer) {
    audioSuccess.play();
    chosenAnswer.classList.add('bg-green'); // Im Video von DevAk: chosenAnswer.parentNode.classList.add('bg-success'); -> 'bg-success': von bootstrap vordefinierter grüner Hintergrund, wird durch "parentNode" dem übergeordneten Element hinzugefügt
    handleDialogYes();
}

function reactionAnswerWrong(chosenAnswer, rightAnswer) {
    audioFail.play();
    chosenAnswer.classList.add('bg-red'); // Im Video von DevAk: chosenAnswer.parentNode.classList.add('bg-danger'); -> 'bg-danger': von bootstrap vordefinierter roter Hintergrund, wird durch "parentNode" dem übergeordneten Element hinzugefügt
    document.getElementById('answer' + rightAnswer).classList.add('bg-green');
    handleDialogNo();
}

function showProgress() {
    let numberOfQuestions = questions.length;
    let percentage = 100 / numberOfQuestions * (currentQuestion + 1);
    let percentageRounded = Math.round(percentage);
    document.getElementById('progressBar').innerHTML = generateProgressHTML(percentageRounded);
    document.getElementById('progressBar').style.width = `${percentageRounded}%`;
}

function resetProgress() {
    document.getElementById('progressBar').innerHTML = '0 &#x25;';
    document.getElementById('progressBar').style.width = '0%';
}

function enableButtonNextQuestion() {
    document.getElementById('buttonNextQuestion').disabled = false;
}

function disableButtonNextQuestion() {
    document.getElementById('buttonNextQuestion').disabled = true;
}

function enableButtonResult() {
    if (arrivedAtLastQuestion()) {
        document.getElementById('buttonResult').disabled = false;
    }
}

function disableButtonResult() {
    document.getElementById('buttonResult').disabled = true;
}

function handleButtonResult() {
    document.getElementById('buttonResult').classList.toggle('hide');
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
    document.getElementById('buttonResult').classList.add('hide');
    disableButtonNextQuestion();
    disableButtonResult();
    resetProgress();
}

function noMoreAnswersPossible() { // Funktion wird nach Beantwortung der jeweiligen Frage aufgerufen; durch erneutes Klicken auf die einzelnen Antworten wird dann keine Funktion mehr aufgerufen.
    document.getElementById('answer1').onclick = null;
    document.getElementById('answer2').onclick = null;
    document.getElementById('answer3').onclick = null;
    document.getElementById('answer4').onclick = null;
}

function openImpressum() {
    document.getElementById('quizContainer').classList.add('hide');
    document.getElementById('impressumContainer').classList.remove('hide');
    document.getElementById('cardImg').src = "img/imprint-1186346_640.jpg";
}

function closeImpressum() {
    document.getElementById('quizContainer').classList.remove('hide');
    document.getElementById('impressumContainer').classList.add('hide');
    document.getElementById('cardImg').src = "img/education-6305113_640.jpg";
}