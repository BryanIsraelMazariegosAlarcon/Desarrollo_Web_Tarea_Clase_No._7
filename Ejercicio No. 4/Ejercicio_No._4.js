const arreglo = Array();

for(let i = 0; i<10; i++)
{
arreglo.push(Number(Math.random() * (100)).toFixed());
}
console.log(arreglo);

var boton = document.getElementById("verificar");
boton.addEventListener("click", () => calcular(), false);

var calcular = () => {
    
    var caja = document.querySelector(".caja");
    let sumaarre = arreglo.reduce((suma, numero) => {
        return parseFloat(suma) + parseFloat(numero);
    }, 0);
    
    let promedio = sumaarre/arreglo.length;

    var html = "";

    arreglo.forEach(item => {html += `<span>${item} </span>`});

    console.log(`Promedio Total Arreglo:  ${promedio}`);
    caja.innerHTML = `${html}<h2>Promedio Total Arreglo:  ${promedio}</h2>`

}