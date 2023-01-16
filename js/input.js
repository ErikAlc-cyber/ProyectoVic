let form = document.getElementById("form");

let nombre = document.getElementById("nombre");
let raza = document.getElementById("raza");
let edad = document.getElementById("edad");
let peso = document.getElementById("peso");
let sexo = document.getElementById("sexo");

let msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formvalidation();
});

let formvalidation = () => {

    if (nombre.value === "" | raza.value === "" | edad.value === "" | peso.value === "" | sexo.value === "") {
        msg.innerHTML = "No se puede dejar ningun campo en blanco";
    } else {
        acceptData();
    }

};

let data = [];

let acceptData = () => {
    data.push({
        nombre : nombre.value,
        raza : raza.value,
        edad : edad.value,
        peso : peso.value,
        sexo : sexo.value
    });

    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
    window.location.href="../web-inf/ingresar.html";
};
