
// ejercicio 1
let colores = ["azul", "amarillo", "rojo"]

colores.splice(1, 0, "verde")
console.log(colores)

//ejercicio 2
function saludar(nombre) {
    console.log(`Hola ${nombre}!`)
}

saludar("Pedro")

//ejercicio 3
edad = 9

if (edad >= 18) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")
}

//ejercicio 4
let num = [1, 2, 3, 4, 5, 6]
let suma = 0;

for (let i = 0; i < num.length; i++) {
    suma += num[i];
}

console.log(suma)

//ejercicio 5
function esPar(numero) {
    return numero % 2 === 0;
}

console.log(esPar(3))

//ejercicio 6
let dia = "domingo"
switch (dia) {
    case "lunes":
        console.log("Inicio de semana.");
        break;
    case "martes":
        console.log("segundo dia.");
        break;
    case "miercoles":
        console.log("tercer dia.");
        break;
    case "jueves":
        console.log("mitad de la semana.");
        break;

    case "viernes":
        console.log("utlimo dia de trabajo.");
        break;
    case "sabado":
        console.log("por fin finde.");
        break;
    case "domingo":
        console.log("hasta dios descansó el domingo.");
        break;
    default:
        console.log("introduzca un dia valido");
}

//ejercicio 7  

let i = 1;
while (i <= 10) {
    console.log("Iteración:", i);
    i++;
}

//ejercicio 8
let sin_arreglo = [1, 1, 2, 3, 4, 4, 5, 5, 5, 5, 6];
let arreglo = [];
function eliminarDuplicados(sin_arreglo) {
    for (let i of sin_arreglo) {
        if (!arreglo.includes(i)) {
            arreglo.push(i);
        }
    }
    return arreglo;
}

console.log(eliminarDuplicados(sin_arreglo))

//ejercicio 9

pagar = 0
function calcularImpuestos(sueldo) {
    if (sueldo < 10000) {
        pagar = sueldo * 0 / 100
        console.log(pagar)
    } else if (sueldo >= 10000 && sueldo <= 20000) {
        pagar = sueldo * 10 / 100
        console.log(pagar)
    } else {
        pagar = sueldo * 20 / 100
        console.log(pagar)
    }
}
calcularImpuestos(28000)

//ejercicio 10
const nombres = ["Pedro", "Paca", "Marta", "Carlos", "Laura"];
const conteoLetras = {};

for (let i = 0; i < nombres.length; i++) {
    const nombre = nombres[i].toLowerCase();
    for (let j = 0; j < nombre.length; j++) {
        const letra = nombre[j];
        if (letra >= 'a' && letra <= 'z') {
            if (!conteoLetras[letra]) {
                conteoLetras[letra] = 0;
            }
            conteoLetras[letra]++;
        }
    }
}

console.log(conteoLetras);