class Productos{
    constructor(modelo, cantidad, precio) {
        this.modelo = modelo;
        this.cantidad = cantidad;
        this.precio = precio;
    }

}


const heladera = new Productos("jk-102",3,20300);

for (const atributos in heladera) {
    console.log(heladera[atributos]);
}

const array = [];

array.push(heladera);
console.log(array);