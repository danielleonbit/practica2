let items = localStorage.getItem('itemList');
let itemslist = items ? JSON.parse(items) : [];

function addItems() {
    let item = document.getElementById("item").value;
    let cantidad = document.getElementById("cantidad").value;
    if (item && cantidad) {
        itemslist.push({ nombre: item, cantidad: cantidad });
        showItems();
    }
}

function showItems() {
    document.getElementById("item").value = '';
    document.getElementById("cantidad").value = '';
    let html = '';
    if (itemslist != "") {
        itemslist.forEach(function(element, index) {
            console.log(element);
            html += `<div class="col-5 mt-2">${element.nombre}</div>`;
            html += `<div class="col-5 mt-2">${element.cantidad}</div>`;
            html += `<div class="col-2 mt-2"> <a class="btn btn-danger" onclick="deleteItem(${index});">Eliminar</a> </div>`;
        });
        items = JSON.stringify(itemslist);
        localStorage.setItem('itemList', items);
    } else {
        html += `<div class="col-10 mt-2">No hay items para mostrar.</div>`;
    }
    document.getElementById('listado').innerHTML = html;
}

function deleteItem(idposition) {
    itemslist = JSON.parse(items);
    console.log(idposition);
    itemslist.splice(idposition, 1);
    showItems();
}
showItems();