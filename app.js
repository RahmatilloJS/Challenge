const check = document.querySelector('.check')
const again = document.querySelector('.again')
const guess = document.querySelector('.guess')
const number = document.querySelector('.number')
const score = document.querySelector('.score')
const highscore = document.querySelector('.highscore')
const message = document.querySelector('.message')
const body = document.querySelector('body')



again.onclick = function(){
    guess.value = ""
    score.innerHTML = '20'
    body.style.background = '#222'
    message.textContent = 'Start guessing...'
    check.classList.remove('none-dis')
    number.textContent = '?'
    if(counter < highscore.textContent){
        highscore.textContent = counter
    }
    counter = 20
    function getRandom2(){
        let random = Math.floor(Math.random() * 20 + 1)
        return random
    }

    randomNum = getRandom2()
    console.log(randomNum);
}

function getRandom() {
    let random = Math.floor(Math.random() * 20 + 1)
    return random;
}

let randomNum = getRandom()
console.log(randomNum);
let counter = 20
let zero = 0

check.onclick = function () {
    randomCheck()
    counter--
    if(guess.value == ""){
        message.innerHTML = "Write number firstly!"
    }
    else if (counter < 0) {
        message.innerHTML = 'You lost';
        number.innerHTML = randomNum;
        document.body.style.background = 'red'
        score.innerHTML = 0;
        check.classList.add('none-dis')

    }
    else if (counter > 0) {
        score.innerHTML = counter
    }

}

function randomCheck() {
    if (guess.value > randomNum) {
        message.innerHTML = 'Too high!'
        document.body.style.background = '#222222'
    }
    else if (guess.value < randomNum) {
        message.innerHTML = 'Too low!'
        document.body.style.background = '#222222'
    }
    else if (guess.value == randomNum) {
        message.innerHTML = 'You WON!'
        document.body.style.background = 'rgb(157, 218, 66)'
        let high = highscore.innerHTML = counter
        number.innerHTML = randomNum
        check.classList.add('none-dis')
        highscore = randomNum
    }
    

}