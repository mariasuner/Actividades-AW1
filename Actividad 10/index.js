// Actividad 10 - Consola y sintaxis básica

// 1.1 Mayor o menor de edad
const edad = 18;
if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

// 1.2 Par o impar
const numero = 7;
if (numero % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}

// 1.3 Resultado según la nota
const nota = 8;
if (nota < 4) {
  console.log("Reprobado");
} else if (nota <= 7) {
  console.log("Aprobado");
} else {
  console.log("Excelente");
}

// 2.1 Números del 1 al 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2.2 Números del 10 al 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 2.3 Paridad en 20 iteraciones, comenzando en 0
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log("El número es par");
  } else {
    console.log("El número es impar");
  }
}

// 2.4 Paridad con el número concatenado mediante template literal
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(`El número ${i} es par`);
  } else {
    console.log(`El número ${i} es impar`);
  }
}
