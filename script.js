let text = document.getElementById("text_line");
let button = document.getElementById("button");
button.addEventListener("click", checkNumber);
var play = document.getElementById("play");
play.addEventListener("click", reset);

let numGotIt = document.getElementById("numGotIt");
let resultNumber = document.getElementById("resultNumber");
let checkNum = document.getElementById("checkNum");
let sc = document.getElementById("sc");
let Highsc = document.getElementById("Highsc");

let randomNum = 0;

function reset() {
    var remove1 = text.value = '';
    score = 10;
    randomNum = Math.trunc(Math.random() * 100) + 1;
    console.log(randomNum); // delete later
    sc.innerHTML = '';
    numGotIt.innerHTML = 'Guess My number!';
    checkNum.innerHTML = '👌🏼 Let\'s Start!';
    resultNumber.innerHTML = '?';
    document.body.style.background = "linear-gradient(to top right, rgb(227, 104, 216), lightyellow)";
}


function Getimg(src) {
    let img = document.getElementById('high');
    img.src = src;
}
reset();
var score = 10;
const highscore = [0];

function checkNumber() {

    console.log(score)
    sc.innerHTML = score;
    const num = Number(text.value);
    console.log(num); // delete later
    if (num > 0) {
        if (num === randomNum) {
            numGotIt.innerHTML = 'You got it!';
            checkNum.innerHTML = 'Correct Number!';
            Getimg("images/win.png");
            resultNumber.innerHTML = num;
            document.body.style.background = "linear-gradient(to top right, rgba(11, 213, 119, 0.92), rgba(31, 114, 238, 0.92))";
            if (highscore[0] < score) {
                highscore.push(score);
                highscore.shift();
                console.log('gsdfg' + highscore);
                Highsc.innerHTML = highscore;
            }
            score--;
        } else if (num > randomNum) {
            checkNum.innerHTML = 'Too high';
            Getimg("images/high.png");
            score--;
        } else if (num < randomNum) {
            checkNum.innerHTML = 'Too Low';
            Getimg("images/low.png");
            score--;

        }
    } else {
        checkNum.innerHTML = 'Enter a Number';
        Getimg("/images/Error1.png");

    }

}