const contenedorProducto = document.getElementById("contenedorProducto");

function mostrarProductos(items) {
  items.forEach(element => {
    contenedorProducto.innerHTML += `
    
    <div class="camiseta">
        <p class="card-text PrecioProduct cardSale__categoria"> ${element.precio} $</p>
                    <img class="CartImg" src=${element.img} alt="camiseta3">
                    
                    <h4 class="TittleCart">${element.nombre}</h4>
    
                    <button class="btn btn-primary buttonAgregar" tabindex="-1" role="button"
                aria-disabled="true" data-id=${element.id}>Comprar</button>     
                </div>
        `
  });

}
mostrarProductos(productos)
