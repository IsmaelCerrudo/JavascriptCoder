class Productos{
    constructor(modelo, cantidad, precio) {
        this.modelo = modelo;
        this.cantidad = cantidad;
        this.precio = parseFloat(precio);

        this.sumarIva = ()=>{
            this.precio = this.precio * 1.21;
        }
    }
}


const heladera = new Productos("jk-102",3,20300);



const array = [];

array.push(heladera);
console.log(array);