

/**DECLARO CONSTANTES Y LA FUNCION PRINCIPAL */

(function (){
const slider = [...document.querySelectorAll(".TestimonyBody")];
const ButtonNext = document.querySelector("#next");
const ButtonBack = document.querySelector("#Back");

let value;
//Le doy utilidad al "boton"
ButtonNext.addEventListener("click",()=>{
ChangeTestimony(1);
})

ButtonBack.addEventListener("click",()=>{
    ChangeTestimony(-1);
})


//modifico el DOM  para simular un carrousel 
const ChangeTestimony =(add)=>{
    const TestimonyStart = document.querySelector(".TestimonyBodyShow").dataset.id;
    value = Number ( TestimonyStart);
    value+= add;
    
slider[Number(TestimonyStart)-1].classList.remove("TestimonyBodyShow")
    if(value === slider.length+1 || value === 0){
value = value === 0 ? slider.length :1;
    }

slider[value-1].classList.add("TestimonyBodyShow");
}
})();

