let colourSample = null;
let answers = [];
let correctColourCode = null;
let score = 0;
let total = 0;
let easy = false;
let medium = false;
let hard = false;
let mode = 0;

//initialize page
window.onload = function () {
    colourSample = document.getElementById("colourSample");


    //build answers array
    if (easy == true) {
        answers.push(document.getElementById("a"));
        answers.push(document.getElementById("b"));
    } else if (medium == true) {
        answers.push(document.getElementById("a"));
        answers.push(document.getElementById("b"));
        answers.push(document.getElementById("c"));
        answers.push(document.getElementById("d"));
    } else {
        answers.push(document.getElementById("a"));
        answers.push(document.getElementById("b"));
        answers.push(document.getElementById("c"));
        answers.push(document.getElementById("d"));
        answers.push(document.getElementById("e"));
        answers.push(document.getElementById("f"));
        answers.push(document.getElementById("g"));
        answers.push(document.getElementById("h"));
    }

        score = 0;
        total = 0;
        document.getElementById("score").innerHTML = score + " / " + total;

    for (i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", function () {
            markIt(this);
        });

    }

}

//marks current question
function markIt (elem) {
    
    if (mode == 0) {
        let gotItRight = false;
        total++;
        console.log("Comparing " + elem.innerHTML + " to " + correctColourCode);
        
        if (elem.innerHTML == correctColourCode) {
            score++;
            gotItRight = true;
        } 
        
        document.getElementById("score").innerHTML = score + " / " + total;

        if (total <= 10) {
            window.setTimeout(function () {
                    if (gotItRight) {
                        colourSample.innerHTML = "Correct";
                    } else {
                    colourSample.innerHTML = "Incorrect";
                    }
            }, 100);
        }


        if (total >= 10) {
            document.getElementById("a").style.display = "none";
            document.getElementById("b").style.display = "none";
            document.getElementById("c").style.display = "none";
            document.getElementById("d").style.display = "none";
            document.getElementById("e").style.display = "none";
            document.getElementById("f").style.display = "none";
            document.getElementById("g").style.display = "none";
            document.getElementById("h").style.display = "none";
            window.setTimeout (function () {
                colourSample.innerHTML = "Game over your score was: " + score + " / " + total;
            }, 1000);
            document.getElementById("new").style.display = "block";
        } else if (total <10) {
            window.setTimeout(function () {
                loadNewQuestion();
            }, 1300);
        }
    } else { // game mode 2
        let gotItRight = false;
        total++;
        let correctColourCodeRGB = hex2rgb(correctColourCode);
        console.log("Comparing " + elem.style.backgroundColor + " to " + "rgb(" + correctColourCodeRGB.r +", " +  correctColourCodeRGB.g + ", " +correctColourCodeRGB.b + ")" );

        let correctColourCodeRGBMark = "rgb(" + correctColourCodeRGB.r +", " +  correctColourCodeRGB.g + ", " +correctColourCodeRGB.b + ")";
       
        if (elem.style.backgroundColor == correctColourCodeRGBMark) {
            score++;
            gotItRight = true;
        } 
        
        document.getElementById("score").innerHTML = score + " / " + total;

        if (total <= 10) {
            window.setTimeout(function () {
                    if (gotItRight) {
                        colourSample.innerHTML = "Correct";
                    } else {
                    colourSample.innerHTML = "Incorrect";
                    }
            }, 100);
        }


        if (total >= 10) {
            document.getElementById("a").style.display = "none";
            document.getElementById("b").style.display = "none";
            document.getElementById("c").style.display = "none";
            document.getElementById("d").style.display = "none";
            document.getElementById("e").style.display = "none";
            document.getElementById("f").style.display = "none";
            document.getElementById("g").style.display = "none";
            document.getElementById("h").style.display = "none";
            window.setTimeout (function () {
                colourSample.innerHTML = "Game over your score was: " + score + " / " + total;
            }, 1000);
            document.getElementById("new").style.display = "block";
        } else if (total <10) {
            window.setTimeout(function () {
                loadNewQuestion();
            }, 1300);
        }
    }

}

//loads new question
function loadNewQuestion() {
    if (mode == 0) { //colour in big box
        if(easy == true) { 
            
            let colourCode = getRandomHexCode();
            colourSample.innerHTML = "";
            colourSample.style.backgroundColor = colourCode;

            let solution = Math.floor(Math.random() * 2);
            for(let i = 0; i < 2; i++) {
                if(i == solution) {
                    answers[i].innerHTML = colourCode;
                    answers[i].style.backgroundColor = "#444";
                } else {
                    answers[i].innerHTML = getRandomHexCode();
                    answers[i].style.backgroundColor = "#444";
                }
            }

            correctColourCode = colourCode; 
        } else if (medium == true) {
            let colourCode = getRandomHexCode();
            colourSample.innerHTML = "";
            colourSample.style.backgroundColor = colourCode;


            let solution = Math.floor(Math.random() * 4);
            for(let i = 0; i < 4; i++) {
                if(i == solution) {
                    answers[i].innerHTML = colourCode;
                    answers[i].style.backgroundColor = "#444";
                } else {
                    answers[i].innerHTML = getRandomHexCode();
                    answers[i].style.backgroundColor = "#444";
                }
            }

            correctColourCode = colourCode; 
        } else {
            let colourCode = getRandomHexCode();
            colourSample.innerHTML = "";
            colourSample.style.backgroundColor = colourCode;


            let solution = Math.floor(Math.random() * 8);
            for(let i = 0; i < 8; i++) {
                if(i == solution) {
                    answers[i].innerHTML = colourCode;
                    answers[i].style.backgroundColor = "#444";
                } else {
                    answers[i].innerHTML = getRandomHexCode();
                    answers[i].style.backgroundColor = "#444";
                }
            }
            correctColourCode = colourCode; 
        }
    } else { //code in big box
        if(easy == true) { 
            
            let colourCode = getRandomHexCode();
            colourSample.innerText = colourCode;
            colourSample.style.backgroundColor = "white";


            let solution = Math.floor(Math.random() * 2);
            for(let i = 0; i < 2; i++) {
                if(i == solution) {
                    answers[i].style.backgroundColor = colourCode;
                    answers[i].innerText = "";
                } else {
                    answers[i].style.backgroundColor = getRandomHexCode();
                    answers[i].innerText = "";
                }
            }

            correctColourCode = colourCode; 
        } else if (medium == true) {
            let colourCode = getRandomHexCode();
            colourSample.innerText = colourCode;
            colourSample.style.backgroundColor = "white";


            let solution = Math.floor(Math.random() * 4);
            for(let i = 0; i < 4; i++) {
                if(i == solution) {
                    answers[i].style.backgroundColor = colourCode;
                    answers[i].innerText = "";
                } else {
                    answers[i].style.backgroundColor = getRandomHexCode();
                    answers[i].innerText = "";
                }
            }

            correctColourCode = colourCode; 
        } else {
            let colourCode = getRandomHexCode();
            colourSample.innerText = colourCode;
            colourSample.style.backgroundColor = "white";


            let solution = Math.floor(Math.random() * 8);
            for(let i = 0; i < 8; i++) {
                if(i == solution) {
                    answers[i].style.backgroundColor = colourCode;
                    answers[i].innerText = "";
                } else {
                    answers[i].style.backgroundColor = getRandomHexCode();
                    answers[i].innerText = "";
                }
            }

            correctColourCode = colourCode; 
        }
    }

}

//gets random hex code 
function getRandomHexCode () {
    let result = [];
    let hexRef = ["0", "1", "2", "3", "4", "5", "6", "7", 
    "8", "9", "a", "b", "c", "d", "e", "f"];

    result.push("#");

    for (let n = 0; n < 6; n++) {
        result.push(hexRef[Math.floor(Math.random() * 16)]);
    }

    return result.join("");
}


//prompts game difficulty selection and then loads new game
function loadNewGame() {
    document.getElementById("lightbox").style.display = "block";
    score = 0;
    total = 0;
    document.getElementById("score").innerHTML = score + " / " + total;
}

function selectModeEasy() {
    total = 0;
    score = 0;
    easy = true;
    medium = false;
    hard = false;
    document.getElementById("a").style.display = "block";
    document.getElementById("b").style.display = "block";
    document.getElementById("c").style.display = "none";
    document.getElementById("d").style.display = "none";
    document.getElementById("e").style.display = "none";
    document.getElementById("f").style.display = "none";
    document.getElementById("g").style.display = "none";
    document.getElementById("h").style.display = "none";
    loadNewQuestion();
    document.getElementById("lightbox").style.display = "none";
    document.getElementById("new").style.display = "none";
}


function selectModeMedium() {
    total = 0;
    score = 0;
    easy = false;
    medium = true;
    hard = false;
    document.getElementById("a").style.display = "block";
    document.getElementById("b").style.display = "block";
    document.getElementById("c").style.display = "block";
    document.getElementById("d").style.display = "block";
    document.getElementById("e").style.display = "none";
    document.getElementById("f").style.display = "none";
    document.getElementById("g").style.display = "none";
    document.getElementById("h").style.display = "none";
    loadNewQuestion();
    document.getElementById("lightbox").style.display = "none";
    document.getElementById("new").style.display = "none";
}


function selectModeHard() {
    total = 0;
    score = 0;
    easy = false;
    medium = false;
    hard = true;
    document.getElementById("a").style.display = "block";
    document.getElementById("b").style.display = "block";
    document.getElementById("c").style.display = "block";
    document.getElementById("d").style.display = "block";
    document.getElementById("e").style.display = "block";
    document.getElementById("f").style.display = "block";
    document.getElementById("g").style.display = "block";
    document.getElementById("h").style.display = "block";
    loadNewQuestion();
    document.getElementById("lightbox").style.display = "none";
    document.getElementById("new").style.display = "none";
}

function switchGameMode() {
    if (mode == 0) {
        document.getElementById("switchGM").value = "Switch to guess code based on colour";
        mode = 1;
        loadNewGame();
    } else {
        document.getElementById("switchGM").value = "Switch to guess colour based on code";
        mode = 0;
        loadNewGame();
    }
}


const hex2rgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    // return {r, g, b} 
    return { r, g, b };
}

console.log(hex2rgb("#000000"));