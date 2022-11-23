fetch(baseURL + "/bundles")
    .then(response => response.json())
    .then(bundles => {
        console.log(bundles);
        console.log(bundles[6].units[0].name);
        bundles.map(createBundleRow);
        tableSort(document.getElementById("bundle_table"));
    })

const tableParent = document.getElementById("bundle-table-body");

function createBundleRow(bundle) {

    let tableRow = document.createElement("tr")
    tableRow.id = "bundle:" + bundle.id;
    tableRow.innerHTML =
        `
       <td>${bundle.name}</td>     
       `;
    tableParent.appendChild(tableRow);
    bundle.units.map((element) => ligemeget(element, bundle.id));
    console.log(bundle.id);
}

function ligemeget(unit, id) {
    let p = document.createElement("p")
    p.innerText = unit.name + " " + unit.model;
    const etellerandet = document.getElementById(id);
    etellerandet.appendChild(p);
}