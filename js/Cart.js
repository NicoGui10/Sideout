//Declaro constantes
const ClickAgregar = document.querySelectorAll(".buttonAgregar");
const ContainerCart = document.querySelector(".ContainerCarttBody");
const ProccessPago = document.querySelector(".BtnComprar");
let CarritoProductos = []


ClickAgregar.forEach(btn => {
    btn.addEventListener("click", AddCarritoProduct) //Capturo el boton
})

function AddCarritoProduct(e) {
    const Button = e.target
    const ProducItem = Button.closest(".camiseta") //Le pido que busque la clase mas cercana a Camiseta mediante la funcion de js 
    const ProductTittle = ProducItem.querySelector(".TittleCart").textContent;
    const ProductPrecio = ProducItem.querySelector(".PrecioProduct").textContent;
    const ProductImg = ProducItem.querySelector(".CartImg").src;

    const NewItemCart = { //Declaro items
        title: ProductTittle,
        precio: ProductPrecio,
        img: ProductImg,
        cantidad: 1
    }

    AdditemCart(NewItemCart)
}


function AdditemCart(NewItemCart) {
    const ElementCount = ContainerCart.getElementsByClassName("ElementCount")


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
        <th scope="row">1</th>
        <td class="cartProducts"><img class="imgProductCart" src="${item.img}" alt=""></td>
        <h6 class="title">${item.title}</h6>
        <td class="CartPrecio">${item.precio}</td>
        <input type="number" min="1" value=${item.cantidad} class="ElementCount">
        <button class="deleteCart">x</button>
        </td>
        `
        trElement.innerHTML = content
        ContainerCart.append(trElement)


        trElement.querySelector(".deleteCart").addEventListener("click", removeItemCart)
        trElement.querySelector(".ElementCount").addEventListener("Change", SumaCount)

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
    const tr = sumaInput.closest(".ItemCart");
    const title = tr.querySelector(".title").textContent;
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