let tipo = prompt("Ingrese el tipo de electrodomestico");
let precio = parseFloat(prompt("Ingrese el monto a pagar"));

if(tipo === ""){
    console.log("Ingrese un elemento valido");
}


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

for (const producto of productos) {
    producto.Sumaiva();
    productos.forEach(producto => console.log(producto));
};

