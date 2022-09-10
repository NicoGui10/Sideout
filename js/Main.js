//Variables 
let AllContainer = document.querySelector(".MainClothes");
let containetcart = document.querySelector(".card-items");
let TotalPrice = document.querySelector(".PriceTotal");
let contadorAmount = document.querySelector(".ContadorProd");
let buythisCart = [];
let TotalProduct = 0;
let ProductCount = 0;



//Functions
LoadProductEvent();
function LoadProductEvent() {
    AllContainer.addEventListener("click", AddProduct);

    containetcart.addEventListener("click", deleteProduct);
}

function AddProduct(i) {
    i.preventDefault();
    if (i.target.classList.contains("button__index")) {
        const ProductSelec = i.target.parentElement;
        readTheContent(ProductSelec);

    }

}

function deleteProduct(i) {
    if (i.target.classList.contains("Product-fin")) {
        const deleteId = i.target.getAttribute("data-id");

        buythisCart.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                TotalProduct = TotalProduct - priceReduce;
                TotalProduct = TotalProduct.toFixed(2);


            }
        });
        buythisCart = buythisCart.filter(product => product.id !== deleteId)
        ProductCount --;
    }
    if(buythisCart.length ===0);
    TotalPrice.innerHTML = 0;
    contadorAmount.innerHTML = 0; 

    loadHtml();

}
/**Tomo  recursos desde el html */
function readTheContent(product) {
    const infoProduct = {
        image: product.querySelector('img').src,
        title: product.querySelector("h4").textContent,
        price: product.querySelector("p , span").textContent,
        id: product.querySelector("a").getAttribute("data-id"),
        amount: 1

    }

    

    TotalProduct = parseFloat(TotalProduct) + parseFloat(infoProduct.price);
    TotalProduct = TotalProduct.toFixed(2);

/**Tomo  recursos desde el html */


    const CountExSid = buythisCart.some(product => product.id === infoProduct.id);
    if (CountExSid) {
        const CountExSid = buythisCart.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            }
            else {
                return product
            }
        });
        buythisCart = [...CountExSid];
    }
    else {
        buythisCart = [...buythisCart, infoProduct]
        ProductCount ++;
    }    
    loadHtml();

}


/**PRINT */
function loadHtml() {
    clearHtml();
    buythisCart.forEach(product => {
        const { image, title, price, amount, id } = product;
        const row = document.createElement("div");
        row.classList.add("camiseta");
        row.innerHTML = `
        <div class="item">
                        <img src="${image}" alt="">
                        <div class="itemContainer">
                            <h4>${title}</h4>
                            <h5 class="priceCart">${price}</h5>
                            <h6> Amount: ${amount}</h6>
                        </div class="buttonDeleteCart" >
                        <span class="Product-fin" data-id="${id}">X</span>
                    </div>
        
        `;


        containetcart.appendChild(row);

        TotalPrice.innerHTML = TotalProduct;

        contadorAmount.innerHTML = ProductCount;
    });

}
/**PRINT */
function clearHtml() {
    containetcart.innerHTML = "";
}
