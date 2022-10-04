
//Declaro las constantes con get element by ID
const 
    $btnSignIn = document.querySelector('.sign-in-btn'),
    $btnSignUp = document.querySelector('.sign-up-btn'),
    $signUp = document.querySelector('.sign-up'),
    $signIn = document.querySelector('.sign-in'),
    nombre = document.getElementById("name"),
    email = document.getElementById("email"),
    pass = document.getElementById("pass"),
    referido = document.getElementById("referido"),
    form = document.getElementById("form"),
    alerta = document.getElementById("alerta");

document.addEventListener('click', e => {   //Intercambio el div registro-inicio sesion
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

form.addEventListener("submit", e => {
    e.preventDefault();
    let alertname = "";
    let /**refexEmail */ verificMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let Enjoy = false;
    alerta.innerHTML = "";
    if (nombre.value.length < 7) {
        alertname += `
        El nombre no es valido !<br>
        `
        Enjoy = true;
    }
    if (!verificMail.test(email.value)) {
        alertname += `
        El Email no es valido <br>
        `
        Enjoy = true;
    }
    if (pass.value.length < 8) {
        alertname += `
        La Contraseña no es valida !<br>
        `
        Enjoy = true;
    }
    if (referido.value.length < 2) {
        alertname += `
        El referido no es valido !<br>
        `
        Enjoy = true;
    }
    if (Enjoy) {
        alerta.innerHTML = alertname
    }
    else {
        alerta.innerHTML = "Sent"
    }
})


