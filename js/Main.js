//Variables 
let AllContainer = document.querySelector(".MainClothes");
let containetcart = document.querySelector(".card-items");
let TotalPrice = document.querySelector(".PriceTotal");




let buythisCart = [];
let TotalProduct = 0;
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

       buythisCart.forEach(value =>{
        if (value.id == deleteId){
        let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
        TotalProduct = TotalProduct - priceReduce;
        TotalProduct = TotalProduct.toFixed(2);


        }
       });
        buythisCart = buythisCart.filter(product => product.id !== deleteId)

    }
    loadHtml();

}

function readTheContent(product) {
    const infoProduct = {
        image: product.querySelector('img').src,
        title: product.querySelector("p").textContent,
        price: product.querySelector("p span").textContent,
        id: product.querySelector("a").getAttribute("data-id"),
        amount: 1

    }


    TotalProduct = parseFloat(TotalProduct) + parseFloat(infoProduct.price);
    TotalProduct = TotalProduct.toFixed(2);




    const ExSid = buythisCart.some(product => product.id === infoProduct.id);
    if (ExSid) {
        const ExSid = buythisCart.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            }
            else {
                return product
            }
        });
        buythisCart = [...ExSid];
    }
    else {
        buythisCart = [...buythisCart, infoProduct]
    }
    loadHtml();

}

function loadHtml() {
    clearHtml();
    buythisCart.forEach(product => {
        const { image, title, price, amount, id } = product;
        const row = document.createElement("div");
        row.classList.add("camiseta");
        row.innerHTML = `
        <div class="item">
                        <img src="${image}" alt="">
                        <div class="item-content">
                            <h5>${title}</h5>
                            <h5 class="${price}">$</h5>
                            <h6> Amount: ${amount}</h6>
                        </div>
                        <span class="Product-fin" data-id="${id}">X</span>
                    </div>
        
        `;
        /*<span class="Product-fin" data-id="${id}">X</span>*/
        /*<button class="Product-fin" data-id="${id}">X</button>*/
        containetcart.appendChild(row);

        TotalPrice.innerHTML = TotalProduct;

    });

}
function clearHtml() {
    containetcart.innerHTML = "";
}