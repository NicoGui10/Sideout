const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const referido = document.getElementById("referido");
const form = document.getElementById("form");
const alerta = document.getElementById("alerta");



form.addEventListener("submit", e => {
    e.preventDefault();
    let alertname = "";
    let /**refexEmail */ verificMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let Enjoy = false;
    alerta.innerHTML = "";
    if (nombre.value.length < 7) {
        alertname += `
        El nombre no es valido <br>
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
        La Contraseña no es valida <br>
        `
        Enjoy = true;
    }
    if (referido.value.length < 2) {
        alertname += `
        El referido no es valido <br>
        `
        Enjoy = true;
    }
    if (Enjoy) {
        alerta.innerHTML = alertname
    }
    else{
        alerta.innerHTML = "Sent"
    }
})


