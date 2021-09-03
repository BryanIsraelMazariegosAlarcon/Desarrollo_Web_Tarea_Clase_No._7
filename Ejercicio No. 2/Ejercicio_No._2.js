const inventario = [{
        categoria: 'Carros',
        precio: 50000
    }, {
        categoria: 'Carros',
        precio: 150000
    }, {
        categoria: 'Carros',
        precio: 100000
    }, {
        categoria: 'Carros',
        precio: 80000
    }, {
        categoria: 'Carros',
        precio: 30000
    },


    {
        categoria: 'Motos',
        precio: 30000
    }, {
        categoria: 'Motos',
        precio: 15000
    }, {
        categoria: 'Motos',
        precio: 10000
    }, {
        categoria: 'Motos',
        precio: 8000
    }, {
        categoria: 'Motos',
        precio: 5000
    }

];


var totalByCategory = (inven, categoria) => {
    var catego = inven.filter((cate) => {
        return cate.categoria === categoria;
    });
    var total = catego.reduce((total, precio) => {
        return parseFloat(total) + parseFloat(precio.precio);
    }, 0);
    console.log(catego);
    console.log(total);
    var caja = document.querySelector('.caja');
    caja.innerHTML = `<h2>El total de la categoria es: ${total} </h2>`;
}

document.getElementById("verificar").onclick = () => {
    var valor = document.getElementById("catega").value;
    totalByCategory(inventario, valor);

};