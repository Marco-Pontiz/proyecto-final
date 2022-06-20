
// Primera Entrega del Proyecto


/*
let carrito = [];

class Producto {
    constructor(ingresarId, ingresarNombre, ingresarPrecio){
        this.ingresarId = ingresarId;
        this.ingresarNombre = ingresarNombre;
        this.ingresarPrecio = ingresarPrecio;
    }
    guardarProductos(){
        for(let i = 0; i = 3; i++){
            let ingresarId = parseInt(prompt("Ingrese el siguiente valor: 0"));
            let ingresarNombre = prompt("Ingresar el nombre del producto");
            let ingresarPrecio = parseInt(prompt("Ingresar el precio del producto"));
            alert("¡Productos ingresados correctamente!")
        }
    }
}



for(let i = 0; i = 3; i++){
    let ingresarId = parseInt(prompt("Ingrese el siguiente valor: 0"));
    let ingresarNombre = prompt("Ingresar el nombre del producto");
    let ingresarPrecio = parseInt(prompt("Ingresar el precio del producto"));
    alert("¡Productos ingresados correctamente!")
}

/*
let ingresarId = parseInt(prompt("Ingrese el siguiente valor: 0"));
let ingresarNombre = prompt("Ingresa el nombre del producto");
let ingresarPrecio = parseInt(prompt("Ingrese el precio del producto"));

let ingresarId_1 = parseInt(prompt("Ingrese el siguiente valor: 1"));
let ingresarNombre_1 = prompt("Ingresa el nombre del producto");
let ingresarPrecio_1 = parseInt(prompt("Ingrese el precio del producto"));

let ingresarId_2 = parseInt(prompt("Ingrese el siguiente valor: 2"));
let ingresarNombre_2 = prompt("Ingresa el nombre del producto");
let ingresarPrecio_2 = parseInt(prompt("Ingrese el precio del producto"));
*/
/*
const product1 = new Producto (ingresarId, ingresarNombre, ingresarPrecio);
const product2 = new Producto (ingresarId, ingresarNombre, ingresarPrecio);
const product3 = new Producto (ingresarId, ingresarNombre, ingresarPrecio);

carrito.push(product1, product2, product3);

let precio_total = 0;

let valor1 = carrito.product1.precio;
let valor2 = carrito.product2.precio;
let valor3 = carrito.product3.precio;

function suma (valor1, valor2, valor3){
    resultado = valor1 + valor2 + valor3;
}

precio_total.push(resultado)
const mostrar = (mensaje) => {console.log(mensaje)}

mostrar(precio_total);
*/

/*
alert("Bienvenid@ a su tienda favorita");

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    Info(){
        return this.nombre + " $" + this.precio;
    }
}

const producto1 = new Producto("Pepsi", 200);
const producto2 = new Producto("coca-cola", 500);
const producto3 = new Producto("Dr.Pepper", 190);
const producto4 = new Producto("Fanta", 190);
const producto5 = new Producto("7-up", 130);
const producto6 = new Producto("Sprite", 160);
const producto7 = new Producto("Talca", 185);

let productosCatalogo = [producto1, producto2, producto3, producto4, producto5, producto6, producto7]
let productosSeleccionado = [];

let entrada2 = undefined;

function mostrarCatalogo(){
    entrada2 = +prompt("Catalogo\n Ingresa el producto que quieras comprar: \n
    1-${producto1.Info()}\n
    2-${producto2.Info()}\n
    3-${producto3.Info()}\n
    4-${producto4.Info()}\n
    5-${producto5.Info()}\n
    6-${producto6.Info()}\n
    7-${producto7.Info()}")-1;

}

if(entrada1 === 1){
    mostrarCatalogo();
} else if (entrada1 ===2){
    alert("cerrando tu tienda");
}else{
    alert("Entrada no valida")
    entrada1 = +prompt("¿Deseas echar un vistazo al catalogo de productos?\n1(SI) 2(NO)");
}

function agregarProducto(){
    productosCatalogo.forEach((producto, index) =>{
        if(entrada2==index){
            productosSeleccionado.push(producto)
            console.log(productosSeleccionado)
        }
    })
}

if(entrada2 <= 7){
    let entrada3 = +prompt("¿Quieres agregar un nuevo producto? 1(Si) 2(No)");
    if(entrada3 === 1){
        agregarProducto();
        mostrarCatalogo();
    }else if(entrada3 === 2){
        agregarProducto();
        mostrarCarrito();
    }else{
        alert("Entrada Invalida")
        let entrada3 = +prompt("¿Queres agregar un nuevo producto? 1(Si) 2(No)");
    }
}
*/

/*
function resultadoTotal(resultado1, resultado2, resultado3, resultado4){
    this.resultado1 = resultado1;
    this.resultado2 = resultado2;
    this.resultado3 = resultado3;
    this.resultado4 = resultado4;
};



const resultado1 = new resultadoTotal (valor_A, "+" , valor_B);
const resultado2 = new resultadoTotal (valor_C, "-" , valor_D);
const resultado3 = new resultadoTotal (valor_E, "*", valor_F);
const resultado4 = new resultadoTotal (valor_G, "/", valor_H);

let valor_A = parseInt(prompt("Ingrese un valor numerico"));
let valor_B = parseInt(prompt("Ingrese otro valor numerico"));
let valor_C = parseInt(prompt("Ingrese un valor numerico"));
let valor_D = parseInt(prompt("Ingrese otro valor numerico"));
let valor_E = parseInt(prompt("Ingrese un valor numerico"));
let valor_F = parseInt(prompt("Ingrese otro valor numerico"));
let valor_G = parseInt(prompt("Ingrese un valor numerico"));
let valor_H = parseInt(prompt("Ingrese otro valor numerico"));
*/

/*
let resultado = 0;
let resultado_r = 0;
let resultado_m = 0;
let resultado_d = 0;

resultado.push = (resultado)
resultado_r.push = (resultado)
resultado_m.push = (resultado)
resultado_d.push = (resultado)

const valor_suma = (valor1, valor2) => {resultado = valor1 + valor2};
const valor_resta = (valor1, valor2) => {resultado_r = valor1 - valor2};
const valor_mult = (valor1, valor2) => {resultado_m = valor1 * valor2};
const valor_div = (valor1, valor2) => {resultado_d =  valor1 / valor2};

valor_suma(valor1 = parseInt(prompt("Ingrese un valor numerico")), valor2 = parseInt(prompt("Ingrese otro valor numerico")));

valor_resta(valor1 = parseInt(prompt("Ingrese un valor numerico")), valor2 = parseInt(prompt("Ingrese otro valor numerico")));

valor_mult(valor1 = parseInt(prompt("Ingrese un valor numerico")), valor2 = parseInt(prompt("Ingrese otro valor numerico")));

valor_div(valor1 = parseInt(prompt("Ingrese un valor numerico")), valor2 = parseInt(prompt("Ingrese otro valor numerico")));

function mostrar_r(mensaje){
    console.log(mensaje)
}
mostrar_r(resultado)
mostrar_r(resultado_r)
mostrar_r(resultado_m)
mostrar_r(resultado_d)

*/
/*
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}
function mostrar(mensaje) {
    console.log(mensaje)
}
sumar(6, 3);
mostrar(resultado);

*/

// console.log(valores.push(valor_suma));
// console.log(valores.push(valor_resta));
// console.log(valores.push(valor_mult));
// console.log(valores.push(valor_div));
// console.log(valores.push(valor_porcen));

//Array y Objetos
/*
let bebidas = [
    {
        id:1,
        nombre: "Pepsi",
        origen: 1893,
        nacionalidad:"EEUU",
    },
    {
        id:2,
        nombre:"Coca-cola",
        origen: "Desconocido",
        nacionalidad:"EEUU - Georgia",
    },
    {
        id:3,
        nombre: "Dr Pepper",
        origen: 1885,
        nacionalidad: "EEUU - Texas",
    },
]

bebidas.push = {
    id:4,
    nombre:"Utomplush",
    origen:2022,
    nacionalidad: "Argentina - Mendoza",
}

console.log(bebidas.length);

bebidas.pop()
console.log(bebidas);
*/

//----------------------------------------------------------------------------------

//calculadoraDePrecios();
//function calculadoraDePrecios(){
    /*
    Descripcion: calcula el costo total de los productos.
    */
    //let cantidadDeProductos = parseInt(prompt("Ingrese cantidad de productos a calcular costo total."))
    //let acumuladorDePrecios = 0;
    //for(let i = 1; i <= cantidadDeProductos; i++){
        //let precioDeProductos = parseInt(prompt("Ingrese el precio del producto " + i + ":"));
        //acumuladorDePrecios = acumuladorDePrecios + precioDeProductos;
    //}
    //alert("El costo total es: " + acumuladorDePrecios);
//};

//----------------------------------------------------------------------------------

// let primerProducto = parseInt(prompt("Ingrese el precio del producto"));

// let segundoProducto = parseInt(prompt("Ingrese el precio del producto"));

// let tercerProducto = parseInt(prompt("Ingrese el precio del producto"));

// let cuartoProducto = parseInt(prompt("Ingrese el precio del producto"));

// let quintoProducto = parseInt(prompt("Ingrese el precio del producto"));

// function totalDeCompras(primerProducto, segundoProducto, tercerProducto, cuartoProducto, quintoProducto){

//     pagoTotal = (primerProducto + segundoProducto + tercerProducto + cuartoProducto + quintoProducto);

//     console.log('Usted está pagando un total de $' + pagoTotal)
// };

// alert('Abre la consola')


/* Calculadora
function calculadora (primerNumero, segundoNumero, operaciones) {
    switch (operaciones) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10,5, "+"));
*/

/* Otro tipo de calculadora
const suma = (a, b) => {return a + b}
const resta = (a, b) => {return a - b}
const mult = (a, b) => {return a * b}
const div = (a, b) => {return a / b}

console.log(suma(2, 2))
console.log(resta(30, 10))
console.log(mult(20, 5))
console.log(div (10, 5))
*/

