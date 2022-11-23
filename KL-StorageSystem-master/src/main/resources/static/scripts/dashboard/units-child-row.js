/* Formatting function for row details - modify as you need */
function formatU(d) {
    let table = document.createElement('table');
    table.style.paddingLeft = "50px";
    table.innerHTML = `
    <tr>
        <td>${d.type}</td>
        <td>${d.name}</td>
        <td>${d.model}</td>
        <td><button id="button-unit-${d.id}">➕</button></td>
    </tr>
`
    if (d.bundles[0] !== undefined) {
        console.log(d.bundles[0]);
        let trPackageOne = document.createElement('tr');
        trPackageOne.classList.add("unit-bundle");
        trPackageOne.innerHTML = `
            <td>Pakke</td>
            <td>${d.bundles[0].name}</td>
            <td>Indhold</td>
            <td><button class="btn-units-package"  id="unit-package-${d.bundles[0].id}">tilføj pakke</button></td>
        `;
        table.appendChild(trPackageOne);
    }

    if (d.bundles[1] !== undefined){
        let trPackageTwo = document.createElement('tr');
        trPackageTwo.classList.add("unit-bundle");
        trPackageTwo.innerHTML = `
            <td>Pakke</td>
            <td>${d.bundles[1].name}</td>
            <td>Indhold</td>
            <td><button class="btn-units-package" id="unit-package-${d.bundles[1].id}">tilføj pakke</button></td>
        `;
        table.appendChild(trPackageTwo);
    }
    return table;
}

$(document).ready(async function () {
    const response = await fetch(baseURL + "/units");
    const data = await response.json();

    $('#loadingLabel').hide();

    let table = $('#units-table').DataTable({
        data: data,
        rowId: function (a) {
            return 'unit-' + a.id;
        },

        columns: [
            {
                "className": 'dt-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            {"data": "name"},
            {"data": "model"},
            {"data": "barcode"},
            {"data": "storage_one", //todo colorfix 🤔 call function in utility instead
            render: function (data, type){
                let status = "Ok";
                if (type === 'display') {
                    let color = 'green';
                    if (data < 2) {
                        color = 'red';
                        status = "Kritisk";
                    }
                    else if (data < 10) {
                        color = 'orange';
                        status = "Lav";
                    }
                    return '<span style="color:' + color + '">' + status + '</span>';
                }
                return status;
            }},
            {"data": "storage_one", "defaultContent": ''},
            {"data": "storage_one"},
            {"data": "storage_two"},
            {"data": "storage_three"},
            {"data": "supplier"},
            {"data": "type"},
        ]
    });

    // Add event listener for opening and closing details
    $('#units-table tbody').on('click', 'td.dt-control', function () {
        let tr = $(this).closest('tr');
        let row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(formatU(row.data())).show();
            tr.addClass('shown');

            document.getElementById("button-" + tr[0].id).addEventListener('click', () => {

                let dbId = tr[0].id.split("-")[1];
                let name = this.parentElement.children[1].innerText;
                let model = this.parentElement.children[2].innerText;
                addItemToList(selectedUnits, dbId, name, model, 1);
            });
        }
    });
});




