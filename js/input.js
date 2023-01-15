let form = document.getElementById("form");

let nombre = document.getElementById("nombre");
let raza = document.getElementById("raza");
let edad = document.getElementById("edad");
let peso = document.getElementById("peso");
let sexo = document.getElementById("sexo");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formvalidation();
});

let formvalidation = () => {};