//#########################DOM#########################

// const carrito = document.querySelector("#carrito");
// const template = document.querySelector("#template");
// const fragment = document.createDocumentFragment();
// const btnesBotones = document.querySelectorAll(".card .btn");

// const carritoObjeto = {};

// const agregarAlCarrito = (e) => {
//     console.log(e.target.dataset.fruta);

//     const producto = {
//         titulo: e.target.dataset.fruta,
//         id: e.target.dataset.fruta,
//         cantidad: 1,
//     };

//     if(carritoObjeto.hasOwnProperty(producto.titulo)){
//         producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
//     };

//     carritoObjeto[producto.titulo] = producto;

//     pintarCarrito();
// };

// const pintarCarrito = () => {
//     carrito.textContent = "";

//     Object.values(carritoObjeto).forEach(item => {
//         const clone = template.content.firstElementChild.cloneNode(true);
//         clone.querySelector(".lead").textContent = item.titulo;
//         clone.querySelector('.badge').textContent = item.cantidad;

//         fragment.appendChild(clone);
//     });

//     carrito.appendChild(fragment);
// };

// btnesBotones.forEach(btn => btn.addEventListener("click", agregarAlCarrito));

//######################ARRAYS###########################

// const frutas = ["🍎", "🍌", "🍓"];

// const nuevoArray = frutas.map((fruta) => fruta);

// const user = [
//     {uid: 1, name: "John", age: 34 },
//     {uid: 2, name: "Amy", age: 40 },
//     {uid: 3 , name: "camperCat", age: 10 },
// ];

//##FILTER
//const userFiltrado = user.filter((user) => user.uid !== 3);
//console.log(userFiltrado);

//##FIND
//const Amy = user.find((user) => user.uid === 2);
//console.log(Amy);

//##SOME
//const existe = user.some ((user) => user.uid === 4);
//console.log(existe);

//##FINDINDEX (-1 si no existe el indice)
//const indice = user.findIndex((user) => user.uid === 2);
//console.log(indice);

//##SLICE
// const arr = ["Cat", "Dog", "Tiger", "Zebra"];
// const arrayNuevo = arr.slice(1, 3)
// console.log(arrayNuevo);

//##REDUCE
// const numeros = [1, 2, 3, 4, 5];
// const sumarTodos = numeros.reduce((acc, valorActual) => acc + valorActual);
// console.log(sumarTodos);

//##CONCAT
// const arrayNumeros = [
//     [0, 1],
//     [2, 3],
//     [4, 5],
// ];
// const soloNumeros =  arrayNumeros.reduce((acc, current) => acc.concat(current));
// console.log(soloNumeros);


// const carrito = document.querySelector("#carrito");
// const template = document.querySelector("#template");
// const fragment = document.createDocumentFragment();
// const btnesBotones = document.querySelectorAll(".card .btn");

// const carritoObjeto = {};

// const agregarAlCarrito = (e) => {
//     console.log(e.target.dataset.fruta);

//     const producto = {
//         titulo: e.target.dataset.fruta,
//         id: e.target.dataset.fruta,
//         cantidad: 1,
//     };

//     if(carritoObjeto.hasOwnProperty(producto.titulo)){
//         producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
//     };

//     carritoObjeto[producto.titulo] = producto;

//     pintarCarrito();
// };

// const pintarCarrito = () => {
//     carrito.textContent = "";

//     Object.values(carritoObjeto).forEach(item => {
//         const clone = template.content.firstElementChild.cloneNode(true);
//         clone.querySelector(".lead").textContent = item.titulo;
//         clone.querySelector('.badge').textContent = item.cantidad;

//         fragment.appendChild(clone);
//     });

//     carrito.appendChild(fragment);
// };

// btnesBotones.forEach(btn => btn.addEventListener("click", agregarAlCarrito));