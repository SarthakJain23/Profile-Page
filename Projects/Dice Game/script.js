var p1dice = Math.floor(Math.random() * 6) + 1;
var p2dice = Math.floor(Math.random() * 6) + 1;

var img1;
var img2;

switch (p1dice) {
    case 1:
        img1 = 'images/dice1.png'
        break;
    case 2:
        img1 = 'images/dice2.png'
        break;
    case 3:
        img1 = 'images/dice3.png'
        break;
    case 4:
        img1 = 'images/dice4.png'
        break;
    case 5:
        img1 = 'images/dice5.png'
        break;
    case 6:
        img1 = 'images/dice6.png'
        break;
}

switch (p2dice) {
    case 1:
        img2 = 'images/dice1.png'
        break;
    case 2:
        img2 = 'images/dice2.png'
        break;
    case 3:
        img2 = 'images/dice3.png'
        break;
    case 4:
        img2 = 'images/dice4.png'
        break;
    case 5:
        img2 = 'images/dice5.png'
        break;
    case 6:
        img2 = 'images/dice6.png'
        break;
}

document.querySelectorAll('img')[0].setAttribute('src', img1)
document.querySelectorAll('img')[1].setAttribute('src', img2)

if (p1dice > p2dice) {
    document.querySelector('h1').innerText = '🚩 Player 1 Wins'
}
else if (p1dice < p2dice) {
    document.querySelector('h1').innerText = 'Player 2 Wins 🚩'
}
else
{
    document.querySelector('h1').innerText = 'Draw!'
}