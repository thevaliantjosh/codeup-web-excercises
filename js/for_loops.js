//alert("Welcome to the For Loops Exercise!");


function showMultiplicationTable(number) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${number} x ${i} = ${i * number}`);
    }
}

let randomNumber = Math.floor(Math.random() * 200) + 20;

    for(let i = 0; i <= 10; i++) {
        if (randomNumber % 2 === 0) {
            console.log(`${randomNumber} is even`);
        } else {
            console.log(`${randomNumber} is odd`);
        }
    }

