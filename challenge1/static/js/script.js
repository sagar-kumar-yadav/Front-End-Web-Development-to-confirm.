// challenge 1: your age in days

function ageInDays() {
    var birthYear = prompt('what year are you born... Good Friend?');
    var ageInDayss = (2021 - birthYear) * 365;
    h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('you are '+ageInDayss+' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// challenge 2: cat generater
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif";
    div.appendChild(image);
}


// chalenge 3: Rock Paper Scissor
function rpsGame(yourChoice) {
    console.log(yourChoice);

    var humanChoice, botChoice;
    humanChoice = yourChoice.id;                    // user select number

    botChoice = numberToChoice(randToRPSInt());     // bot select number
    console.log('computer coice:', botChoice);

    result  = decideWinner(humanChoice, botChoice);  // [0, 1]  human lost | bot own
    console.log(result);
    
    message = finalMessage[result];   // {'message': 'you won', 'color': 'green'}
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRPSInt() {                           // function for return random value
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {                   // bot choice
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice, computerChoice) {     
    var rpsDatabase = {
        'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourscore, computerScore]) {
    if (yourscore === 0) {
        return {'message': 'you lost', 'color': 'red'};
    } else if ( yourscore === 0.5) {
        return {'message': 'you tied!', 'color': 'yellow'};
    } else {
        return {'message': 'you won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImagechoice, finalMessage) {
    var imageDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    // lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDataBase[humanImageChoice] + "'>"
}