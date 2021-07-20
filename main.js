let mainBtn = document.querySelector('.final-btn > button');
let mainQuestion = document.querySelector('.main-question > h3');
let wrapper = document.querySelector('.btns-wrapper');
let result = document.querySelector('.result-wrapper');
let resultAnswers = document.querySelector('.answers > span')
let resultQuestions = document.querySelector('.questions > span')
let resultBtn = document.querySelector('.result-wrapper > button');
let correctAnswer;
let score = 0;
let counter = 0;

mainBtn.addEventListener('click', function (){
    if (counter === 0){
        startQuiz();
    }
    else if(counter === 1) {
        secondQuestion();
        document.body.style.background = '#33658A'
    }
    else if(counter === 2){
        thirdQuestion();
        document.body.style.background = '#33658A'
    }
})
function thirdQuestion(){
    displayQuestion('Mom', 'Dad', 'Son', 'Daughter', 'Dog', 'Son');
    disableMainBtn()
}
function  secondQuestion(){
    displayQuestion('Slon', 'ruba', 'voron', 'begemot', 'jaba', 'jaba');
    disableMainBtn();
}
function disableMainBtn(){
    mainBtn.style.background = 'grey';
    mainBtn.disabled = true;
}
function activeMainBtn(){
    mainBtn.style.background = '#F26419';
    mainBtn.disabled = false;
    if (counter === 3){
        showResult();
    }
}
function startQuiz(){
    displayQuestion('Sobaka', 'sobaka', 'kit', 'zmeya', 'slon', 'kit');
    mainBtn.innerText = 'Next question';
    disableMainBtn();
}
function displayQuestion(title, first, second, third, fourth, answer){
   wrapper.innerHTML = `<button onclick="checkAnswer('${first}')">${first}</button> <button onclick="checkAnswer('${second}')">${second}</button> <button onclick="checkAnswer('${third}')">${third}</button> <button onclick="checkAnswer('${fourth}')">${fourth}</button>`;
   mainQuestion.innerText = title;
   correctAnswer = answer;
   let firstAns
}
function rightAnswer(){
    score++;
    counter++;
    document.body.style.background = '#3fa23f';
    activeMainBtn();
    let answerBtns = document.querySelectorAll('.btns-wrapper > button')
    answerBtns.forEach(function (item){
        item.disabled = true;
    });
}
function wrongAnswer(){
    console.log(false)
    counter++;
    document.body.style.background = '#f34848';
    activeMainBtn();
    let answerBtns = document.querySelectorAll('.btns-wrapper > button')
    answerBtns.forEach(function (item){
        item.disabled = true;
    });
}
function checkAnswer(n) {
    if (correctAnswer == n){
        rightAnswer();
    }
    else {
        wrongAnswer();
    }
}
function showResult(){
    mainBtn.innerText = 'Show Result';
    result.style.display = 'flex';
    resultAnswers.innerText = score;
    resultQuestions.innerText = counter;
}
resultBtn.addEventListener('click', function (){
    document.location.reload();
})