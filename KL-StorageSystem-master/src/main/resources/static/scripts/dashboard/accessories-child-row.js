document.getElementById("accessories").style.display = "none";

function formatA(d) {
    let table = document.createElement('table');
    table.style.paddingLeft = "50px";
    table.innerHTML = `
    <tr>
        <td>${d.type}</td>
        <td>${d.name}</td>
        <td>${d.model}</td>
        <td><button id="button-accessory-${d.id}">➕</button></td>
    </tr>
`
    if (d.package_one !== undefined) {
        let trPackageOne = document.createElement('tr');
        trPackageOne.innerHTML = `
            <td>Tilføj:</td>
            <td>Pakkenavn + beskrivelse</td>
            <td><button>tilføj pakkeid til knap</button></td>
        `;
        table.appendChild(trPackageOne);
    }

    if (d.package_two !== undefined) {
        let trPackageTwo = document.createElement('tr');
        trPackageTwo.innerHTML = `
            <td>Tilføj:</td>
            <td>Pakkenavn 2 + beskrivelse</td>
            <td><button>tilføj pakkeid til knap</button></td>
        `;
        table.appendChild(trPackageTwo);
    }
    return table;
}

$(document).ready(async function () {
    const response = await fetch(baseURL + "/accessories");
    const data = await response.json();

    $('#loadingLabel').hide();

    let table = $('#accessories-table').DataTable({
        data: data,
        rowId: function (a) {
            return 'accessory-' + a.id;
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
            {"data": "storage_one",
                render: function (data, type) {
                    let status = "Ok";
                    if (type === 'display') {
                        let color = 'green';
                        if (data < 2) {
                            color = 'red';
                            status = "Kritisk";
                        } else if (data < 10) {
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
    $('#accessories-table tbody').on('click', 'td.dt-control', function () {
        let tr = $(this).closest('tr');
        let row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(formatA(row.data())).show();
            tr.addClass('shown');

            document.getElementById("button-" + tr[0].id).addEventListener('click', () => {

                let dbId = tr[0].id.split("-")[1];
                let name = this.parentElement.children[1].innerText;
                let model = this.parentElement.children[2].innerText;
                addItemToList(selectedAccessories, dbId, name, model, 1);
            });
        }
    });
});


