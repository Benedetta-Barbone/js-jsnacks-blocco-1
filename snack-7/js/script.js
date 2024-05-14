//Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

let n = Number.parseInt(prompt('inserisci un numero'), 10 );
if (n > 20 || n < 1 ){
    n = 12;
}

for (index=0; index<n; index++){
    const tempArray = [];

    for (index=0; index<10; index++){
        tempArray.push(Math.floor(Math.random()* 100) + 1);
    }
    console.log(tempArray);
}
