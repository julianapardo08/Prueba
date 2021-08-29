const numeros = [3, 23, 12,40,50,100];

var array = numeros.sort(function(a, b){return b - a});
console.log(`El segundo número más grande es ${array[1]}`)