//Variables 
let AllContainer = document.querySelector(".MainClothes");
let containetcart = document.querySelector(".card-items");
let buythisCart =[];

//Functions
LoadProductEvent();
function LoadProductEvent(){
    AllContainer.addEventListener("click", AddProduct);
}

function AddProduct(i){
    i.preventDefault();
    if (i.target.classList.contains("button__index")){
        const ProductSelec = i.target.parentElement;
        readTheContent(ProductSelec);
        
    }

}

function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('img').src,
        title: product.querySelector("p").textContent,
        price: product.querySelector("p span").textContent,
        id: product.querySelector("a").getAttribute("data-id"),
        amount: 1
       
    }

    buythisCart =[...buythisCart, infoProduct]
    loadHtml();

    console.log(infoProduct);

}

function loadHtml(){
    buythisCart.forEach( product =>{
        const {image,title,price,amount,id} = product;
        const row = document.createElement("div");
        row.classList.add("camiseta");
        row.innerHTML = `
        <div class="item">
                        <img src="./img/camiseta1.png" alt="">
                        <div class="item-content">
                            <h5>name of product name of product name of product</h5>
                            <h5 class="cart-price">45.50$</h5>
                            <h6>Amount: 3</h6>
                        </div>
                        <span>X</span>
                    </div>
        
        `;

        containetcart.appendChild(row);
    });

}