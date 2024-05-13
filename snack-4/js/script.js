const lista = ['Giuseppe', 'Eleonora', 'Gianluca', 'Marco', 'Gianni', 'Luigi', 'Michele'];

const nome = prompt('inserisci il tu nome');
nome = nome.charAt(0).toUpperCase()

if (lista.includes(nome)){
    console.log('puoi entrare');
}else {
    console.log('non puoi entrare');
}