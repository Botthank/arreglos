

const ciudades = ["Nueva York", "Los Ángeles", "Chicago", "Miami"];

const indiceLosAngeles = ciudades.indexOf("Los Ángeles");
const resultado1 = ciudades.slice(0, indiceLosAngeles).concat(ciudades.slice(indiceLosAngeles + 1));
console.log(resultado1);


resultado1.shift();
console.log(resultado1);


resultado1.unshift("San Francisco", "Dallas");
console.log(resultado1);