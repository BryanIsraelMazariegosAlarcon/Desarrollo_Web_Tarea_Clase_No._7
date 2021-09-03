var Arreglo_original = ["Diana", "Monica", "Maria", "Breny"];
var lista = "";
var contenido = "";
var caja = document.querySelector(".caja");
document.getElementById("verificar").onclick = () => {
    
    // #1. Usando foreach, despliegue los nombres del arreglo en una lista ordenda en el dom.
    Arreglo_original.forEach(item => {
        lista += `<li>${item}</li>`;
    });

    console.log(Arreglo_original);
    // #2.  Saque una copia del arreglo pero que no incluya a Monica.
    contenido += "<br>#2 ";
    var copia1 = Array();
    Arreglo_original.forEach(item => {
        if (item !== "Monica") {
            copia1.push(String(item));
            contenido += `<span>"${item}" <span>`;
        }
    });
    console.log(copia1);

    // #3.  En el nuevo arreglo, investigue la forma de remover a Breny
    contenido += "<br><br>#3 ";
    copia1.pop();
    copia1.forEach(item => {
        contenido += `<span>"${item}" <span>`;
    })

    console.log(copia1);

    // #4. Agregue a José al principio del nuevo arreglo
    copia1.unshift("José");
    contenido += "<br><br>#4 ";
    copia1.forEach(item => {
        contenido += `<span>"${item}" <span>`;
    })
    console.log(copia1);

    // #5. Agregue su nombre el final del nuevo arreglo.
    copia1.push("Bryan Mazariegos");
    contenido += "<br><br>#5 ";
    copia1.forEach(item => {
        contenido += `<span>"${item}" <span>`;
    })
    console.log(copia1);

    // #6. Obtenga el ítem de Diana
    var diana = copia1.find(item => {
        return item == "Diana";
    });
    contenido += "<br><br>#6 ";
    contenido += `<span>${diana} <span>`;
    console.log(diana);

    // #7. Haga otra copia del arreglo original usando slice, excluya a Diana y Breny
    var copia2 = Arreglo_original.slice(1, 3);
    contenido += "<br><br>#7 ";
    copia2.forEach(item => {
        contenido += `<span>"${item}" <span>`;
    })
    console.log(copia2);

    // #8. investigue cómo devolver el índice de Monica (hacer una función para esto), devolver -1 si 
    //no existe.
    var obtenerIndice = (arreglo) => {
        return arreglo.indexOf("Monica");
    }
    console.log("Indice de monica: " + obtenerIndice(Arreglo_original));
    contenido += "<br><br>#8 ";
    contenido += `<span>Indice de monica: ${obtenerIndice(Arreglo_original)} <span>`;

    //imprimiendo
    caja.innerHTML = `<ol>${lista}</ol><br>${contenido}`;
}