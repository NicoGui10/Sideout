const contenedorProducto = document.getElementById("contenedorProducto");

function mostrarProductos(items) {
  items.forEach(element => {
    contenedorProducto.innerHTML += `
    
    <div class="camiseta">
    <p class="card-text cardSale__categoria">${element.categoria}</p>
                <img src=${element.img} alt="camiseta3">
                <b><span>${element.precio}</span></b>
                <h4>${element.nombre}</h4>

                <a class="btn btn-primary button__index" tabindex="-1" role="button"
                    aria-disabled="true" data-id=${element.id}>Comprar</a>
                
            </div>
        `

  });


}
mostrarProductos(productos)

