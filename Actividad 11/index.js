//Funciones de declaración
//Sin retorno de valor
function saludar() {
    console.log("¡Hola, mundo!")
}

//Sin retorno de valor: saludarPersona
function saludarPersona(nombre) {
  console.log(`¡Hola ${nombre}, bienvenido!`)
}
saludarPersona("Maria");

//Retorno de valor
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true
  } else {
    return false
  }
}
const edad = 20
const resultado = esMayorDeEdad(edad)
console.log(resultado);


//Funciones de flecha
//Realice el mismo programa que el punto 1. c, pero convierta la función a una función flecha.
const esMayorDeEdad = (edad) => {
    if (edad >= 18) {
        return true
    } else {
        return false
    }
};

const resultado = esMayorDeEdad(28)
console.log(resultado)

//Escriba un programa con una función flecha que reciba dos parámetros, el primero debe ser un número que 
//debemos chequear si es mayor, igual o menor al número pasado como segundo parámetro.
//La función debe imprimir, utilizando template strings, según corresponda: “El número parámetro1 es menor que parámetro2”
//“El número parámetro1 es igual que parámetro2”, “El número parámetro1 es mayor que parámetro2”
//Utilizar la función dentro de un bucle y pase como primer parámetro el iterador, y elija usted el segundo parámetro para
//probar si funciona correctamente.
const compararNumeros = (parametro1, parametro2) => {
    if (parametro1 < parametro2) {
        console.log(`El número ${parametro1} es menor que ${parametro2}`)
    } else if (parametro1 === parametro2) {
        console.log(`El número ${parametro1} es igual que ${parametro2}`)
    } else {
        console.log(`El número ${parametro1} es mayor que ${parametro2}`)
    }
}

for (let i = 1; i <= 5; i++) {
    compararNumeros(i, 3)
}

//Funciones callback
//a)
const operacion = (a, b, callback) => {
    callback(a, b)
}

const suma = (a, b) => {
    const resultado = a + b;
    console.log(`El resultado de la suma es ${resultado}`)
}

const resta = (a, b) => {
    const resultado = a - b
    console.log(`El resultado de la resta es ${resultado}`)
}

operacion(10, 5, suma)
operacion(10, 5, resta);

//b)
const operacion = (a, b, callback) => {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Debe ingresar solo números")
        return
    }

    callback(a, b);
}

const suma = (a, b) => {
    const resultado = a + b
    console.log(`El resultado de la suma es ${resultado}`)
}

const resta = (a, b) => {
    const resultado = a - b
    console.log(`El resultado de la resta es ${resultado}`)
}

operacion(10, 5, suma)
operacion(10, 5, resta)
operacion("10", 5, suma) // Muestra el mensaje de error