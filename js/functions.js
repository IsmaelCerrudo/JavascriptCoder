//productos
let modelo = prompt('Ingrese el tipo de producto');
let producto = parseInt(prompt("Ingresa el monto del producto"));


const productos = [];
productos.push(modelo);

const iva = (producto)=> {
    let porcentaje = (producto * 21)/100;
    let resultado = producto + porcentaje;
    return resultado;
}

console.log(`El tipo de producto es ${productos} y el monto total con impuestos es ${iva(producto)}`);

