let count = +prompt('How many cats must be drawn', 'Enter number here');
let smile = prompt('1 for :), 2 for :(, 3 for -_-, cat for guess what');

switch (smile) {
    case 1: smile = ':)'
        break;
    case 2: smile = ':('
        break;
    case 3: smile = '-_-'
        break;
    case 'cat': smile = '=^.^='
        break;
}

function drawCats(howManyTimes, whatToDraw) {
    for (let i=0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
}

drawCats(count, smile);