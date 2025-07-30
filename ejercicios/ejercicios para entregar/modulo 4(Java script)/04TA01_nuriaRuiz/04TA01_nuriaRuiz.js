//ejercicio 1

let nombre = "Núria";
console.log(nombre);

const edad = 25;
console.log(edad);

var ciudad = "Hospitalet de Llobregat";
console.log(ciudad)

//ejercicio 2

let texto = "Hola que tal";
console.log(typeof texto)

let number = 26;
console.log(typeof number)

let miarma = true;
console.log(typeof miarma)

let sinValor;
console.log(typeof sinValor)

let x = null;
console.log(typeof x)

let id = Symbol("id");
console.log(typeof id)

let num = 7294673469012883674573929;
console.log(typeof num)

//ejercicio 3

let a = 3;
let b = 2;
console.log("suma", a + b)
console.log("resta", a - b)
console.log("mult", a * b)
console.log("div", a / b)
console.log("pot", a ** b)
console.log("mod", a % b)

//ejercicio 4

let text = "5"
let numero = 5

console.log(text == numero) //compara los numeros como tal
console.log(text === numero) //compara los numeros y el tipo de variable
console.log(text != numero) // lo mismo pero en negativo
console.log(text !== numero)// lo mismo pero en negativo

//ejercicio 5
let años = 25
let entrada = false

if (edad >= 18 && entrada == true) {
    console.log("puedes entrar")
} else {
    console.log("Vuelvete a casa")
}


//ejercicio 6

function esPar(n) {
    if (n % 2 === 0) {
        console.log("És par")
    } else {
        console.log("És impar")
    }
}

esPar(4)

//ejercicio 7

let nom = "Juan";
let producto = "zapatos";
let precio = "30€";

console.log(`Hola ${nom}, el precio del ${producto} és ${precio} `)

//ejercicio 8
let e = 20
let matricula = true
if (e >= 18) {
    if (matricula == true) {
        console.log("✅ Acceso al campus")
    }
} else {
    console.log("❌Acceso denegado")
}

//ejercicio 9

let mes = "junio";

switch (mes) {
    case "diciembre":
    case "enero":
    case "febrero":
        console.log("invierno");
        break;
    case "marzo":
    case "abril":
    case "mayo":
        console.log("primavera");
        break;
    case "junio":
    case "julio":
    case "agosto":
        console.log("verano");
        break;
    case "septiembre":
    case "octubre":
    case "noviembre":
        console.log("otoño");
        break;
    default:
        console.log("Introduzca un mes válido");
}

//ejercicio 10

function acceso(edad, saldo, rol){
    if (rol === "admin" || saldo > 1000){
        console.log("acceso total")
    }else if (edad > 18 && saldo>100){
        console.log("acceso limitado")
    }else{
        console.log("acceso denegado")
    }
}

acceso(20,9,"admin")
