const firstNumber = Number.parseInt(prompt('inserisci un numero'), 10);
const secondNumber = Number.parseInt(prompt('inserisci un numero'), 10);

if (firstNumber === secondNumber){
    console.log(firstNumber, secondNumber);
}else if (firstNumber>secondNumber){
    console.log( firstNumber);
}else {
    console.log(secondNumber)
}