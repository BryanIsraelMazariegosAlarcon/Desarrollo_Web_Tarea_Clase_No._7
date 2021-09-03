var cambiar = () => {
    var palabras = document.getElementById("frase").value;
    var caja = document.querySelector(".caja");
    var frase = "";
    var p= palabras.split(' ');
    p.forEach(item => { frase += item[0].toUpperCase() + item.slice(1) + ' ';
    });
    caja.innerHTML = `<h2>${frase}</h2>`;
}

var boton = document.getElementById('verificar');
boton.addEventListener('click', () => cambiar(), false);