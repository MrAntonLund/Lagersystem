let selectedUnits = [];
let selectedAccessories = [];
let selectedPackages = [];

function Item(id, name, model, count) {
    this.id = id;
    this.name = name;
    this.model = model;
    this.count = count;
}

function addItemToList(list, id, name, model, count) {
    for (let unit in list) {
        if (list[unit].id === id.toString()) {
            list[unit].count++;
            updateLists();
            return;
        }
    }
    let unit = new Item(id, name, model, count);
    list.push(unit);
    updateLists();
}

function removeItemFromList(list, id) {
    for (let item in list) {
        if (list[item].id === id.toString()) {
            list[item].count--;
            if (list[item].count === 0) {
                list.splice(item, 1);
            }
            break;
        }
    }
    updateLists();
}

function updateLists() {
    const tableUnits = document.getElementById("selected-units");
    const tableAccessories = document.getElementById("selected-accessories");
    const tablePackages = document.getElementById("selected-packages");

    tableUnits.innerHTML = "";
    tableAccessories.innerHTML = "";
    tablePackages.innerHTML = "";

    fillLists(tableUnits, selectedUnits);
    fillLists(tableAccessories, selectedAccessories);
    fillLists(tablePackages, selectedPackages);
}

function fillLists(table, list) {
    for (let i in list) {
        let trElement = document.createElement('tr');
        trElement.innerHTML = `
            <td><button class="btn-plus" data-id="${list[i].id}">➕</button></td>
            <td>${list[i].count}</td>
            <td><button class="btn-minus" data-id="${list[i].id}">➖</button></td>
            <td>${list[i].name}</td>
            <td>${list[i].model}</td>
        `;
        table.appendChild(trElement);
    }
}

$('.selected-items')
    .on("click", '.btn-minus', function (event) {
        let id = $(this).data('id')
        let parent = $(this).parent().parent().parent()[0].id.replace("-", "");
        if (parent.includes("unit")){
            removeItemFromList(selectedUnits, id);
        }else if (parent.includes("accessory")){
            removeItemFromList(selectedAccessories, id);
        }else if (parent.includes("packages")){
            removeItemFromList(selectedPackages, id);
        }
    })
    .on("click", '.btn-plus', function (event) {
        let id = $(this).data('id');
        let parent = $(this).parent().parent().parent()[0].id.replace("-", "");
        if (parent.includes("unit")){
            addItemToList(selectedUnits, id);
        }else if (parent.includes("accessories")){
            addItemToList(selectedAccessories, id);
        }else if (parent.includes("packages")){
            addItemToList(selectedPackages, id);
        }
    })