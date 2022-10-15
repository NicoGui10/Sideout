


//Declaro constantes
const
    ClickAgregar = document.querySelectorAll(".buttonAgregar"),
    ContainerCart = document.querySelector(".ContainerCarttBody");
/* ProccessPago = document.querySelector(".BtnComprar");*/

let CarritoProductos = []


ClickAgregar.forEach(btn => {
    btn.addEventListener("click", AddCarritoProduct) //Capturo el boton

})

function AddCarritoProduct(e) {
    const Button = e.target,
        ProducItem = Button.closest(".camiseta"), //Le pido que busque la clase mas cercana a Camiseta mediante la funcion de js 
        ProductTittle = ProducItem.querySelector(".TittleCart").textContent,
        ProductPrecio = ProducItem.querySelector(".PrecioProduct").textContent,
        ProductImg = ProducItem.querySelector(".CartImg").src;

    const NewItemCart = { //Declaro items
        title: ProductTittle,
        precio: ProductPrecio,
        img: ProductImg,
        cantidad: 1
    }

    AdditemCart(NewItemCart)
}


function AdditemCart(NewItemCart) { //Funcion que agrega productos al carrito
    const ElementCount = ContainerCart.getElementsByClassName("ElementCount")


    //Alerta emergente dentro de la funcion de agregar producto
    Toastify({
        text: "Producto Agregado",
        duration: 1500,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "#1B2B3B",
        },
        onClick: function () { }
    }).showToast();

    //Alerta emergente dentro de la funcion de agregar producto



    for (let i = 0; i < CarritoProductos.length; i++) { //Le doy funcion de suma al carrito y que no repita productos
        if (CarritoProductos[i].title.trim() === NewItemCart.title.trim()) {
            CarritoProductos[i].cantidad++;

            const InputValue = ElementCount[i]
            InputValue.value++;
            CartTotal();
            return null;

        }

    }



    CarritoProductos.push(NewItemCart) //Agrego nuevo item Cada vez que ocurra el siguiente proceso

    CartLook()


}


function CartLook() { //Cada vez que presiono click guardo en la variable todos los productos
    ContainerCart.innerHTML = ""//Cada vez que se ejecute esta accion quedara vacia 
    CarritoProductos.map(item => {
        const trElement = document.createElement("tr");
        trElement.classList.add("ItemCart")
        const content = `
        <th scope="row"><input type="number" min="1" value=${item.cantidad} class="ElementCount"></th>
        <td class="cartProducts"><img class="imgProductCart" src="${item.img}" alt="">  <h6 class="title">${item.title}</h6></td>
        <td class="CartPrecio"> ${item.precio}</td>
        <button class="deleteCart"><svg xmlns="http://www.w3.org/2000/svg"
         width="24" height="24" viewBox="0 0 24 24">
         <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
         </svg></span></button>
        
        </td>
        `
        trElement.innerHTML = content
        ContainerCart.append(trElement)


        trElement.querySelector(".deleteCart").addEventListener("click", removeItemCart)
        trElement.querySelector(".ElementCount").addEventListener("change", SumaCount)

    })
    CartTotal();



}

function CartTotal() {
    let total = 0;
    const CartItemTotal = document.querySelector(".TotalCart");
    CarritoProductos.forEach((item) => {
        const precio = Number(item.precio.replace("$", "")) //Cambio el valor de dolar por un string vacio

        total = total + precio * item.cantidad


    })

    CartItemTotal.innerHTML = `Total $${total}`;
    LocalStorage()



}


function removeItemCart(e) {  //Creo la funcion de remover items
    const DeleteProduct = e.target
    const trElement = DeleteProduct.closest(".ItemCart");
    const title = trElement.querySelector(".title").textContent;
    for (let i = 0; i < CarritoProductos.length; i++) {
        if (CarritoProductos[i].title.trim() === title.trim()) {
            CarritoProductos.splice(i, 1)

        }
    }

    trElement.remove();
    CartTotal();
}


//Sumar productos modificando la cantidad

function SumaCount(e) {
    const sumaInput = e.target;
    const trElement = sumaInput.closest(".ItemCart");
    const title = trElement.querySelector(".title").textContent;
    CarritoProductos.forEach(item => {
        if (item.title.trim() === title) {
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value //Vamos a validar el numero ingresado

            item.cantidad = sumaInput.value;
            CartTotal()
        }
    })
    console.log(CarritoProductos)  //Tengo que corregir el error que me da y no me deja sumar en el carrito 
}





//Utilizo localStorage para guardar los productos del carrito.

function LocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(CarritoProductos))
}

window.onload = function () {
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if (storage) {
        CarritoProductos = storage;
        CartLook();
    }
}




