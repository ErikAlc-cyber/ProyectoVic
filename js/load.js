(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    for (let index = 0; index < data.length; index++) {
        console.log(data[index]);
    }
})();

let title = document.getElementById("titulo");
title.innerHTML= `<h2>Pagina de ${data.nombre}</h2>`;