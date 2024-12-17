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

// // ######################ARRAYS###########################

// // const frutas = ["🍎", "🍌", "🍓"];

// // const nuevoArray = frutas.map((fruta) => fruta);

// // const user = [
// //     {uid: 1, name: "John", age: 34 },
// //     {uid: 2, name: "Amy", age: 40 },
// //     {uid: 3 , name: "camperCat", age: 10 },
// // ];

// // ##FILTER
// // const userFiltrado = user.filter((user) => user.uid !== 3);
// // console.log(userFiltrado);

// // ##FIND
// // const Amy = user.find((user) => user.uid === 2);
// // console.log(Amy);

// // ##SOME
// // const existe = user.some ((user) => user.uid === 4);
// // console.log(existe);

// // ##FINDINDEX (-1 si no existe el indice)
// // const indice = user.findIndex((user) => user.uid === 2);
// // console.log(indice);

// // ##SLICE
// // const arr = ["Cat", "Dog", "Tiger", "Zebra"];
// // const arrayNuevo = arr.slice(1, 3)
// // console.log(arrayNuevo);

// // ##REDUCE
// // const numeros = [1, 2, 3, 4, 5];
// // const sumarTodos = numeros.reduce((acc, valorActual) => acc + valorActual);
// // console.log(sumarTodos);

// // ##CONCAT
// // const arrayNumeros = [
// //     [0, 1],
// //     [2, 3],
// //     [4, 5],
// // ];
// // const soloNumeros =  arrayNumeros.reduce((acc, current) => acc.concat(current));
// // console.log(soloNumeros);


const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const footer = document.getElementById("footer");
const templateFooter = document.getElementById("templateFooter");
const fragment = document.createDocumentFragment();

document.addEventListener("click", (e) => {
    
    // console.log(e.target.matches(".card .btn-outline-primary"));
    if (e.target.matches(".card .btn-outline-primary")){
        // console.log("ejecutar agregar al carrito");
        agregarAlCarrito(e);
    }

    // console.log(e.target.matches(".list-group-item .btn-success"));
    if (e.target.matches("#carrito .list-group-item .btn-success")){
        btnAumentar(e);
    }

    if (e.target.matches("#carrito .list-group-item .btn-danger")){
        btnDisminuir(e);
    }
});

let carritoObjeto = [];

const agregarAlCarrito = (e) => {
    // console.log(e.target.dataset.fruta);

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    };

    const indice = carritoObjeto.findIndex((item) => item.id === producto.id);

    if(indice === -1) {
        carritoObjeto.push(producto);
    } else {
        carritoObjeto[indice].cantidad++;
        // carritoObjeto[indice].precio = carritoObjeto[indice].cantidad * producto.precio
    }


    pintarCarrito(carritoObjeto);

    pintarCarrito();
};

const pintarCarrito = () => {
    carrito.textContent = "";
    
    carritoObjeto.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".text-white .lead").textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;
        clone.querySelector("div .lead span").textContent = item.precio *item.cantidad;
        
        clone.querySelector(".btn-danger").dataset.id = item.id;
        clone.querySelector(".btn-success").dataset.id = item.id;
        fragment.appendChild(clone);
    });
    
    carrito.appendChild(fragment);
    
    pintarFooter();
};

const pintarFooter = () => {
    console.log("Pintar footer");
    footer.textContent = "";

    const total = carritoObjeto.reduce(
        (acc, current) => acc + current.cantidad * current.precio, 0
    );
    
    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector('span').textcontent = total;
   
    footer.appendChild(clone);
};

const btnAumentar = (e) => {
    console.log("Sumar fruta", e.target.dataset.id)
    carritoObjeto = carritoObjeto.map((item) => {
        if(item.id === e.target.dataset.id){
            item.cantidad++;
        }
        return item;
    });
    
    pintarCarrito();
};

const btnDisminuir = (e) => {
    console.log("Restar fruta", e.target.dataset.id);
    
    carritoObjeto = carritoObjeto.filter((item) => {
        if(item.id === e.target.dataset.id) {
            if (item.cantidad > 0) {
                item.cantidad--;
                if (item.cantidad === 0) return;
                return item;
                
            }
        } else { 
            return item;
        }
        
    });
    console.log(carritoObjeto);
    
    pintarCarrito();
};
