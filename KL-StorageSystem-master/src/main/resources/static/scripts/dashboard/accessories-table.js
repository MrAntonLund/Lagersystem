fetch(baseURL + "/accessories")
    .then(response => response.json())
    .then(accessory => {
        console.log(accessory);
        accessory.map(createAccessoryRow);
        enhanceTable(document.getElementById("accessories-table"));
        var y = document.getElementById("accessories")
        y.style.display = "none";
    })

const tableAccessoriesParent = document.getElementById("overview-body-accessories")

function createAccessoryRow(accessory) {

    let amount = accessory.storage_one + accessory.storage_two + accessory. storage_three // total amount for all storages
    let tableRow = document.createElement("tr")
    tableRow.id = "accessory:" + accessory.id;
    tableRow.innerHTML =
        ` 
        <td>${escapeHTML(accessory.name)} </td> 
        <td>${escapeHTML(accessory.model)} </td> 
        <td>${escapeHTML(accessory.barcode)} </td> 
        <td></td> <!-- This is for calcStatus function, it has to be in this position -->
        <td>${escapeHTML(amount.toString())} </td> 
        <td>${escapeHTML(accessory.storage_one.toString())} </td><!-- Lager 1 -->
        <td>${escapeHTML(accessory.storage_two.toString())} </td><!-- Lager 2 -->
        <td>${escapeHTML(accessory.storage_three.toString())} </td><!-- Lager 3 -->
        <td>${escapeHTML(accessory.supplier)} </td> 
         <td>${escapeHTML(accessory.type)} </td> 
    `;

    tableAccessoriesParent.appendChild(tableRow)
    document.getElementById("accessory:" + accessory.id).children[3].appendChild(calcStatus(amount, accessory.criticalAmount, accessory.lowAmount));

    
}