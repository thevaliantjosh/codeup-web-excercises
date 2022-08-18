//alert("Welcome to the For Loops Exercise!");


function showMultiplicationTable(number) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${number} x ${i} = ${i * number}`);
    }
}



function numberIsOdd(number) {
    return number % 2 !== 0;
}
function numberIsEven(number) {
    return number % 2 === 0;
}

    for (let randomNumber = 0; randomNumber <= 10; randomNumber++) {
        let randomNumber = Math.floor(Math.random() * 200) + 20;
        if (numberIsEven(randomNumber)) {
            console.log(`${randomNumber} is even`);
        } if (numberIsOdd(randomNumber)) {
            console.log(`${randomNumber} is odd`);
        }
    }

