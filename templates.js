function generateAnswersHTML() {
    let answer1 = questions[currentQuestion]['answer1'];
    let answer2 = questions[currentQuestion]['answer2'];
    let answer3 = questions[currentQuestion]['answer3'];
    let answer4 = questions[currentQuestion]['answer4'];
    return /*html*/`
    <div class="card mb-2">
        <div id="answer1" class="card-body answers" onclick="proofAnswer(${currentQuestion}, 1)">
            <b>A</b>
            <div>${answer1}</div>
        </div>
    </div>
    <div class="card mb-2">
        <div id="answer2" class="card-body answers" onclick="proofAnswer(${currentQuestion}, 2)">
            <b>B</b>
            <div>${answer2}</div>
        </div>
    </div>
    <div class="card mb-2">
        <div id="answer3" class="card-body answers" onclick="proofAnswer(${currentQuestion}, 3)">
            <b>C</b>
            <div>${answer3}</div>
        </div>
    </div>
    <div class="card mb-2">
        <div id="answer4" class="card-body answers" onclick="proofAnswer(${currentQuestion}, 4)">
            <b>D</b>
            <div>${answer4}</div>
        </div>
    </div>
    `;
}