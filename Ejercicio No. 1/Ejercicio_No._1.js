const arreglo = Array();
var resultado = Array();

for(let i = 0; i<10; i++)
{  
arreglo.push(Number(Math.random() * (50)).toFixed());
}
console.log(arreglo);

document.getElementById("verificar").onclick = () =>
{
    var caja = document.querySelector(".caja");
    var caja2 = document.querySelector(".caja2");
    var html = "";
    var html2 = "";
    
    resultado = arreglo.map(item => 
    {
        return Number(Math.pow(item,2));
    });
    
    for(let i = 0; i < arreglo.length; i++)
    {
        html += `<span>${arreglo[i]} - </span>`;
        html2 += `<span>${resultado[i]} - </span>`;
    }
    console.log(resultado);
    caja.innerHTML = `${html}<br><br>`;
    caja2.innerHTML = html2;  
};