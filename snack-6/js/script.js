//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const numeriInteri = [2,3,4,5,6,7,8,9];
let somma=0;

for (let index=0; index<numeriInteri.length; index++){
    if (index %2 ===1){
        somma += numeriInteri[index];
    }
}

console.log (numeriInteri, somma);


