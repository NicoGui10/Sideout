const contenedorProducto = document.getElementById("contenedorProducto");
const contenedorProductoAccesorios = document.getElementById("contenedorProductoAccesorios");
const contenedorProductoSale = document.getElementById("contenedorProductoSale");


//Funcion productos general
function mostrarProductos(items) {
  items.forEach(element => {
    
    contenedorProducto.innerHTML += `
    <div class="camiseta">
        <p class="card-text PrecioProduct cardSale__categoria"> ${element.precio} $</p>
                    <img class="CartImg" src=${element.img} alt="camiseta3">
                    
                    <h4 class="TittleCart">${element.nombre}</h4>
    
                        
                <button class=" buttonAgregar"  tabindex="-1" role="button"
                aria-disabled="true" data-id=${element.id}>
    <div>
        <span>
            <a class="TextoButtonComprar">Comprar</a>
            
        </span>
    </div>
    <div>
        <span>
            <a class="TextoButtonComprar">Thank you</a>
        </span>
    </div>
</button>
                
                </div>
        `
  });
}
mostrarProductos(productos);


//Funcion productos accesorios

function mostrarProductosAccesorios(items) {
  items.forEach(element => {
    contenedorProductoAccesorios.innerHTML += `
    
    <div class="camiseta PerfumesAccesorios">
        <p class="card-text PrecioProduct cardSale__categoria"> ${element.precio} $</p>
                    <img class="CartImg AccesoriosIMG" src=${element.img} alt="camiseta3">
                    
                    <h4 class="TittleCart">${element.nombre}</h4>
    
                    <button class=" buttonAgregar"  tabindex="-1" role="button"
                    aria-disabled="true" data-id=${element.id}>
        <div>
            <span>
                <a class="TextoButtonComprar">Comprar</a>
                
            </span>
        </div>
        <div>
            <span>
                <a class="TextoButtonComprar">Thank you</a>
            </span>
        </div>
    </button>  
                </div>
        `
  });

}
mostrarProductosAccesorios(productosAccesorios)

//Funcion productos Sale

function mostrarProductosSale(items) {
  items.forEach(element => {
    contenedorProductoSale.innerHTML += `
    
    <div class="camiseta PerfumesAccesorios">
        <p class="card-text PrecioProduct cardSale__categoria"> ${element.precio} $</p>
                    <img class="CartImg" src=${element.img} alt="camiseta3">
                    
                    <h4 class="TittleCart">${element.nombre}</h4>
    
                    <button class=" buttonAgregar"  tabindex="-1" role="button"
                    aria-disabled="true" data-id=${element.id}>
        <div>
            <span>
                <a class="TextoButtonComprar">Comprar</a>
                
            </span>
        </div>
        <div>
            <span>
                <a class="TextoButtonComprar">Thank you</a>
            </span>
        </div>
    </button> 
                </div>
        `
  });

}
mostrarProductosSale(productosSale)

