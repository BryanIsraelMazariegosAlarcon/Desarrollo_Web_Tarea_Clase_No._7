const arreglo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log(arreglo);

var boton = document.getElementById("verificar");
boton.addEventListener("click", () => calcular(arreglo), false);

var calcular = (numeros) => {
    
    var caja = document.querySelector('.caja');

    var random = Number(Math.random() * (30)).toFixed();
    console.log(random);
    var numero1 = (random/ 2).toFixed();
    numeros.forEach(item => {
        var total = parseFloat(numero1) + parseFloat(item);
        if (random == total) {
            console.log(`[${numero1}, ${item}] = ${random}`);
            caja.innerHTML = `<p>[${numero1}, ${item}] = ${random}</p>`;
        }        
    });
}
