fetch(baseURL + "/units")
    .then(response => response.json())
    .then(units => {
        console.log(units);
        units.map(createUnitRow);
        enhanceTable(document.getElementById("units-table"));
    });

const tableUnitsParent = document.getElementById("overview-body-units")

function createUnitRow(unit) {

    let amount = unit.storage_one + unit.storage_two + unit.storage_three // total amount for all storages
    let tableRow = document.createElement("tr")
    tableRow.id = "unit:" + unit.id;
    tableRow.innerHTML =
        ` 
        <td>${escapeHTML(unit.name)} </td> 
        <td>${escapeHTML(unit.model)} </td> 
        <td>${escapeHTML(unit.barcode)} </td> 
        <td></td> <!-- This is for calcStatus function, it has to be in this position -->
        <td>${escapeHTML(amount.toString())} </td> 
        <td><button id="unit-${unit.id}-storage_one" type="button">${escapeHTML(unit.storage_one.toString())} </button></td><!-- Lager 1 -->
        <td><button id="unit-${unit.id}-storage_two" type="button">${escapeHTML(unit.storage_two.toString())} </button></td><!-- Lager 2 -->
        <td><button id="unit-${unit.id}-storage_three" type="button">${escapeHTML(unit.storage_three.toString())} </button></td><!-- Lager 3 -->
        <td>${escapeHTML(unit.supplier)} </td> 
         <td>${escapeHTML(unit.type)} </td> 
    `;

    tableUnitsParent.appendChild(tableRow)
    document.getElementById("unit:" + unit.id).children[3].appendChild(calcStatus(amount, unit.criticalAmount, unit.lowAmount));
}
