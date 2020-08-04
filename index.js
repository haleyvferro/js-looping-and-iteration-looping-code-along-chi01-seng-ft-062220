// Code your solutions in this file
// const names = ["Ada", "Brendan", "Ali"];

// function writeCards(names) {
//     let i = 0; 
//     while (i < names.length) {
//         console.log(`Thank you, ${names[i]}, for the wonderful birthday gift!`);
//         i++;
//     }

//     return names;
// }

function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

// writeCards(names);

function countDown(number) {
    while (number >= 0) {
        console.log(number--)
    }

}