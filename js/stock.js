const contenedorProducto = document.getElementById("contenedorProducto");

function mostrarProductos(items) {
  items.forEach(element => {
    contenedorProducto.innerHTML += `
    <div class="cardProductos">
        <div class="card" style="width: 18rem;">
        <div class="cardSale">
        <p class="card-text cardSale__categoria">${element.categoria}</p>
       </div>
        <img src= ${element.img} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.nombre}</h5>
          <p class="precioStock">${element.precio}</p>
        </div>
        <button class="btn btn-primary button__index" tabindex="-1" role="button"
           aria-disabled="true" data-id="2">Comprar</button>
      </div>
      </div>
        `

  });


}
mostrarProductos(productos)