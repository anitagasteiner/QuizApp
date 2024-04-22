function generateAnswersHTML() {
    let answer1 = questions[currentQuestion]['answer1'];
    let answer2 = questions[currentQuestion]['answer2'];
    let answer3 = questions[currentQuestion]['answer3'];
    let answer4 = questions[currentQuestion]['answer4'];
    return /*html*/`
    <div class="card mb-2">
        <div class="card-body answers">
            <b>A</b>
            <div>${answer1}</div>
        </div>
    </div>
    <div class="card mb-2">
        <div class="card-body answers">
            <b>B</b>
            <div>${answer2}</div>
        </div>
    </div>
    <div class="card mb-2">
        <div class="card-body answers">
            <b>C</b>
            <div>${answer3}</div>
        </div>
    </div>
    <div class="card mb-2">
        <div class="card-body answers"><b>D</b> <div>${answer4}</div></div>
    </div>
    `;
}