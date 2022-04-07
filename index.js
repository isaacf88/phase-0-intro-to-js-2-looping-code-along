// Code your solutions in this file



function writeCards(names, event) {
    let newCards = [];
    for (let i=0; i<names.length; i++) {
        let message = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        newCards.push(message);
    }
    return newCards;
}

writeCards(names);

function countDown(int) {
    let i=10;
    while (i >= 0) {
        console.log(i)
        i--;
    }
    return int
}