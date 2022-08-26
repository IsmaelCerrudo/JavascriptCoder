//productos
let producto = parseInt(prompt("Ingresa el monto del producto"));


const iva = (producto)=> {
    let porcentaje = (producto * 21)/100;
    let resultado = producto + porcentaje;
    return resultado;
}

console.log(iva(producto));