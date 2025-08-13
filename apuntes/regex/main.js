let regex = /patrón/;
regex = new RegExp("patrón");

console.log(/(gat|perro)/.test("tengo un gato")); 
//true (aunque la paalabra no esté completa en el patrón, 
// si el conjunto de letras existe dará true)

console.log(/(a|e|i){2}/.test("Tiene las letras")); //true

let texto = "Hola hola HOLA"

regex =/Hola/gi; //global / indistinto minusculas mayusculas. no importa el orden.

console.log(texto.match(regex));

var expresion = new RegExp(/amor/);
const r1 = expresion.test("Busco amor");
const r2 = expresion.test("No busco nada");
console.log(r1); // true
console.log(r2); // false

const expresion2 = new RegExp(/amor/);
const r12 = "Busco amor, amor".match(expresion2);
const r22 = "No busco nada".match(expresion2);
console.log(r12); // array de un elemento
console.log(r22); // null

const r13 = "Busco amor, Amor".match(/amor/g);
console.log(r13); // ["amor"]

const r14 = "amor".match(/[^a]/g); //todo lo que no sea a
console.log(r14); // ["m", "o", "r"]

const r15 = "ana iba a comprar".match(/a.a/g); //busca que empiece y acabe por a independientemente de lo que tenga en medio
console.log(r15); // ["ana", "a a"]

const r16 = "ana iba a comprar".match(/a\sa/g); //busca que empiece y acabe por a y tenga un espacio en medio
console.log(r16); // ["a a"]

const r17 = "aana iba a comprar".match(/a{2}.a/g); //inicio 2 a's final una a
console.log(r17); // ["ana", "a a"]

const r18 = "aboabcooabcc".match(/abc?/g); // la c es opcional y si está solo coge 1
console.log(r18); // ["ab", "abc", "abc"]

const r19 = "aboabcooabcc".match(/abc{2}/g); //de esta manera, (Sin parentesis), busca que tenga 2 c
console.log(r19); // ["ab", "abc", "abc"]