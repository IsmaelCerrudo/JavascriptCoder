let tipo = prompt("Ingrese el tipo de electrodomestico");
let precio = parseFloat(prompt("Ingrese el monto a pagar"));
let contenedor = document.getElementById("contenedor");


class Product{
    constructor(tipo, precio){
        this.tipo = tipo;
        this.precio = parseFloat(precio);

       
    }

    Sumaiva() {
        this.precio = this.precio * 1.21;
    };
}

const productos = [];
productos.push(new Product(tipo, precio));
const dom = document.createElement('div');

for (const producto of productos) {
    producto.Sumaiva();
    productos.forEach(producto => console.log(producto));
    dom.innerHTML = `<h3>El tipo de producto es: ${producto.tipo} y el precio es: ${producto.precio}</h3>`
    contenedor.append(dom);
};

