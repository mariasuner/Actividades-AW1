//CONDICIONALES
let edad = 28
if (edad >= 18) {
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
}

//Escriba un programa que verifique si la variable numero es par o impar. Si es par, imprime "El número es par", de lo contrario, imprime "El número es impar"
let numero = 4
if (numero % 2 === 0) {
    console.log("El número es par")
} else {
    console.log("El número es impar")
}

//Escriba un programa que compruebe la variable nota y escriba por consola si es "Aprobado", "Reprobado", o "Excelente" según los siguientes criterios:
// Menor a 4: "Reprobado"
// Entre 4 y 7: "Aprobado"
// Mayor a 7: "Excelente"
let nota = 8; // Ejemplo de valor para la variable nota
if (nota < 4) {
    console.log("Reprobado")
} else if (nota <= 7) {
    console.log("Aprobado")
} else {
    console.log("Excelente")
}

//BUCLES
//Escriba un programa que imprima los números del 1 al 10 usando un bucle for
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Escriba un programa que imprima los números del 10 al 1 en orden descendente usando un bucle for
for (let i = 10; i >= 1; i--) {
    console.log(i)
}

//Escriba un programa que utilice un bucle for (20 iteraciones comenzando con let i = 0) y combinarlo  con condicionales para saber si la variable declarada
//en el bucle es par o impar. Si es par, imprime "El número es par", de lo contrario imprime "El número es impar" (utilizar operación de módulo)
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`)
    } 
    else {
        console.log(`El número ${i} es impar`)
    }
}