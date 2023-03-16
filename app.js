const check = document.querySelector('.check')
const again = document.querySelector('.again')
const guess = document.querySelector('.guess')
const number = document.querySelector('.number')
const score = document.querySelector('.score')
const highscore = document.querySelector('.highscore')
const message = document.querySelector('.message')




function getRandom() {
    let random = Math.floor(Math.random() * 20 + 1)
    return random;
}

const randomNum = getRandom()
console.log(randomNum);
let counter = 20
const zero = 0

check.onclick = function () {
    randomCheck()
    counter--
    // console.log( typeof guess.value );
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
    }
    

}

again.onclick = function () {
    location.reload()
}
