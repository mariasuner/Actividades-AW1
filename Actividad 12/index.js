//ARREGLOS
//Escriba un programa que solicite a un usuario la carga de 5 números a través de un método prompt() que se irán incluyendo en un arreglo con 
//el método push(). Utilizar un bucle for para repetir el proceso 5 veces, y una vez terminado el bucle, imprimir el arreglo en consola.  
//Recomendación: crear el arreglo fuera del bucle primero.
let numerosImpares = [];

for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Ingrese un número:"));
}
   
//Modifique el programa del punto anterior, para que incluya un condicional para guardar en el arreglo solo los números impares.
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Ingrese un número:"));
    if (numero % 2 !== 0) {
        numerosImpares.push(numero);
    }
}
console.log(numerosImpares);

//Escriba un programa que contenga un arreglo de nombres de 4 frutas (pera, manzana, banana, durazno), y utilizando el método forEach() 
// (ver doc) sobre el mismo arreglo, convierta a MAYÚSCULAS los nombres (ver documentación). Una vez terminado el proceso, escriba por consola el arreglo.
let frutas = ["pera", "manzana", "banana", "durazno"]

frutas.forEach((fruta, index) => {
    
    frutas[index] = fruta.toUpperCase(); 
});
console.log("c - Frutas a mayúsculas (forEach):", frutas);

//Modifique el programa del punto anterior, y en lugar de utilizar el forEach(), utilice el método no destructivo map() (ver doc) para 
// crear un nuevo arreglo.
let frutasOriginales = ["pera", "manzana", "banana", "durazno"] 

let frutasMap = frutasOriginales.map(fruta => fruta.toUpperCase());
console.log("d - Frutas a mayúsculas (map - nuevo arreglo):", frutasMap);

//Modifique el programa del punto c, y en lugar de utilizar el forEach(), utilice el método no destructivo filter() (ver doc) para crear 
// un nuevo arreglo solo con las frutas que contengan “na” en su nombre. Utilice el método de Strings includes() (ver doc) con un condicional.
let frutasFiltradas = frutasOriginales.filter(fruta => fruta.includes("na"));
console.log("e - Frutas que contienen 'na':", frutasFiltradas);

//OBEJTOS
//Cree un programa que contenga un objeto con datos ficticios de un producto de indumentaria: nombre, precio, stock, talles: [s,m,l]
const productos = {
    nombre: "Pollera",
    precio: 11500,
    stock: 10,
    talles: ["S", "M", "L"]
}
console.log(productos)

//Cree un programa que contenga un arreglo de 4 objetos con datos ficticios de productos de indumentaria: nombre, precio, stock, talles: [s,m,l].
//Recorra el arreglo de objetos con forEach() e imprima por consola solo los que tienen un stock menor a 5 (procure tener variedad de stock para 
// que se cumpla la condición en algún momento) 
const productos = [
    {
        nombre: "Pollera",
        precio: 11500,
        stock: 10,
        talles: ["S", "M", "L"]
    },
    {
        nombre: "Remeras Basicas",
        precio: 3500,
        stock: 20,
        talles: ["S", "M", "L"]
    },
    {
        nombre: "Camperas",
        precio: 20000,
        stock: 15,
        talles: ["S", "M", "L"]
    },
    {
        nombre: "Zapatillas",
        precio: 25000,
        stock: 5,
        talles: ["38", "39", "40"]
    }
]
producto.forEach((producto) => {
    console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Stock: ${producto.stock}, Talles: ${producto.talles.join(", ")}`)
})

//Escriba un programa que re-utilice el arreglo del punto b. y use map() para crear un nuevo arreglo que contenga los mismos productos pero 
// con un descuento en el precio de un 10%. Imprima por consola en nuevo arreglo.
const productosConDescuento = productos.map((producto) => {
    return {
        nombre: producto.nombre,
        precio: producto.precio * 0.9,
        stock: producto.stock,
        talles: producto.talles
    }
})
console.log(productosConDescuento)

//Escriba un programa que re-utilice el arreglo del punto b. y use filter() para crear un nuevo arreglo que contenga solo los productos cuyo 
// stock sea mayor a 10  (procure tener variedad de stock para que se cumpla la condición en algún momento). Imprima por consola en nuevo arreglo.
const productosConStockMayorA10 = productos.filter((producto) => {
    return producto.stock > 10
})
console.log(productosConStockMayorA10)