
let contenedor = document.getElementById("contenedor");

let cardTittle = document.getElementById("cardTittle");
let mostrar = document.getElementById("mostrar");
let cardContainer = document.getElementById("cardsContainer");
const stockProductos = [
    {id: 1, nombre:"Healdera 1", tipo: "Heladera", cantidad: 1, desc: "lorem ipsum", precio: 30000, img: "../img/heladera.png"},
    {id: 2, nombre: "Heladera 2", tipo: "Heladera", cantidad: 1, desc: "Lorem ipsum", precio: 30000, img: "../img/heladera.png"},
    {id: 3, nombre: "Heladera 3", tipo: "Heladera", cantidad: 1, desc: "Lorem ipsum", precio: 30000, img: "../img/heladera.png" }
]

// class Product{
//     constructor(tipo, precio){
//         this.tipo = tipo;
//         this.precio = parseFloat(precio);

       
//     }

//     Sumaiva() {
//         this.precio = this.precio * 1.21;
//     };
// }

// const productos = [];
// productos.push(new Product(tipo, precio));
// const dom = document.createElement('div');

// for (const producto of productos) {
//     producto.Sumaiva();
//     productos.forEach(producto => console.log(producto));
//     dom.innerHTML = `<h3>El tipo de producto es: ${producto.tipo} y el precio es: ${producto.precio}</h3>`
//     contenedor.append(dom);
// };
// const mostrartitulo = document.createElement('div');
// btn.addEventListener('click',()=>{
//     mostrartitulo.innerHTML = `<h2>Prueba1${cardTittle}</h2>`;
//     mostrar.append(mostrartitulo);
// })
stockProductos.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('cards');
    div.innerHTML = `
    <img src=${producto.img} alt="" class="img-cards">
    <h3 class="cardTittle">${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>El precio es: ${producto.precio}</p>
    <button id="agregar"${producto.id} class="btn">Agregar</button>
    `
    cardContainer.appendChild(div)
    
})
let agregar = document.querySelector("#agregar");
agregar.addEventListener('click',()=>{
    console.log("Agregado")
    const div = document.createElement('div');
    div.innerHTML = `<p>El producto agregado es: Heladera</p>`
    contenedor.append(div);
})