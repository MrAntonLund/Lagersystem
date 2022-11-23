function createUnitDropDown(unit) {
    const unitElement = document.getElementById("unit-option");
    const unitSelect = document.createElement("option");
    unitSelect.textContent = unit.name + " " + unit.model;
    unitElement.appendChild(unitSelect);
}

function createAccessoryDropDown(accessory) {
    const accessoryElement = document.getElementById("accessory-option");
    const accessorySelect = document.createElement("option");
    accessorySelect.textContent = accessory.name + " " + accessory.model;
    accessoryElement.appendChild(accessorySelect);
}


const invoiceFormParentDiv = document.getElementById("create-invoice-form");
const invoiceFormExpandButton = document.getElementById("expand-invoice-form");


const createInvoiceForm = `
<div class="invoice-form">
<label> Kontakt Oplysninger:
    <input id="contact-name" placeholder="Navn">
    <input id="contact-address" placeholder="Adresse">
    <input id="contact-phone-number" placeholder="Tlf">
    <input id="contact-email" placeholder="Email">
    <input id="contact-afd" placeholder="Afdeling">
    </label>
    <br>
    <br>
      <label> INC Nummer:
    <input id="inc-number" placeholder="INC Nr">
    </label>
    <br>
   <br>
    <label> Bruger Oplysninger:
    <input id="user-number" placeholder="Loen Nr">
    </label>
        <br>
        <br>
    <div>
        <label>Units:
            <select id="unit-option">
                <option value="none"></option>
            </select>
        </label>
        <label> Defekt:
            <input id="unit-defect-check" value="Defekt" type="checkbox">
        </label>
    </div>
    <br>
    <div>
        <label>Accessories: </label>
        <select id="accessory-option">
            <option value="none"></option>
        </select>
        <label>Mangler:
            <input id="accessory-missing-check" onchange="checkboxHideAndShow()" value="Mangler" type="checkbox">
        </label>
        <label>Defekt:
            <input id="accessory-defect-check" onchange="checkboxHideAndShow()" value="Defekt" type="checkbox">
        </label>
    </div>
</div>
<br>
<div>
<label> Yderligere informationer:</label><br>
<textarea id="invoice-text-area" placeholder="Yderligere informationer skrives her..."></textarea>
</div>
<br>
    <button onclick="generatePDF()">Lav Faktura</button>
    <button onclick="removeInvoiceForm()">Afbryd</button>
    </div>

`

function checkboxHideAndShow() {
    let def = document.getElementById("accessory-defect-check");
    let mis = document.getElementById("accessory-missing-check");
    if (def.checked === true && mis.checked === false) {
        def.style.visibility = "visible";
        mis.style.visibility = "hidden";
    } else if (mis.checked === true && def.checked === false) {
        def.style.visibility = "hidden";
        mis.style.visibility = "visible";
    } else {
        def.style.visibility = "visible";
        mis.style.visibility = "visible";
    }


}

function showInvoiceForm() {
    fetch(baseURL + "/units")
        .then(response => response.json())
        .then(unit => {
            console.log(unit);
            unit.map(createUnitDropDown);
        })

    fetch(baseURL + "/accessories")
        .then(response => response.json())
        .then(accessory => {
            console.log(accessory);
            accessory.map(createAccessoryDropDown);
        })
    invoiceFormExpandButton.style.display = "none";
    invoiceFormParentDiv.innerHTML = createInvoiceForm;
}

function removeInvoiceForm() {
    invoiceFormExpandButton.style.display = "block";
    invoiceFormParentDiv.innerHTML = "";
}


document.getElementById("expand-invoice-form")
    .addEventListener("click", showInvoiceForm);


//---- Sets date to Danish for invoice ----\\
var date = new Date()
var invoiceDate = date.toLocaleDateString('en-DK');

function generatePDF() {

    let text = document.getElementById("invoice-text-area").value;

    //---- Unit and accessory options ----\\
    var unit = document.getElementById("unit-option").value;
    var accessory = document.getElementById("accessory-option").value;

    if (accessory === "none") {
        unit = document.getElementById("unit-option").value;
        accessory = " ";
    } else {
        unit = " ";
        accessory = document.getElementById("accessory-option").value;
    }

    //---- Unit defect check ----\\
    var unitDefect;
    if (document.getElementById("unit-defect-check").checked === false) {
        unitDefect = " ";
    } else {
        unitDefect = document.getElementById("unit-defect-check").value;
    }

    //---- Accessory defect & Missing check ----\\
    var accessoryDefect;
    var accessoryMissing;

    if (document.getElementById("accessory-defect-check").checked === false && document.getElementById("accessory-missing-check").checked === true) {
        accessoryDefect = " ";
        accessoryMissing = document.getElementById("accessory-missing-check").value;
    } else if (document.getElementById("accessory-missing-check").checked === false && document.getElementById("accessory-defect-check").checked === true) {
        accessoryMissing = " ";
        accessoryDefect = document.getElementById("accessory-defect-check").value;
    } else {
        accessoryMissing = " ";
        accessoryDefect = " ";
    }

    var props = {
        outputType: jsPDFInvoiceTemplate.OutputType.Save,
        returnJsPDFDocObject: true,
        fileName: "Faktura_" + invoiceDate,
        orientationLandscape: false,
        logo: {
            src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Kemp_og_lauritzen_logo_POS_RGB.png",
            width: 65.00, //aspect ratio = width/height
            height: 10.00,
            margin: {
                top: 0, //negative or positive num, from the current position
                left: 0 //negative or positive num, from the current position
            }
        },
        business: {
            name: "Kemp & Lauritzen IT",
            address: "Roskildevej 12, 2620 Albertslund",
            phone: "(+45) 4366 8900",
            email: "Test@kemp-lauritzen.dk",
            email_1: "www.kemp-lauritzen.dk",
        },
        contact: {
            label: "Faktura udstedt til:",
            name: document.getElementById("contact-name").value,
            address: document.getElementById("contact-address").value,
            phone: document.getElementById("contact-phone-number").value,
            email: document.getElementById("contact-email").value,
            otherInfo: document.getElementById("contact-afd").value,
        },
        invoice: {
            label: "Faktura #: ",
            num: 1,
            invDate: "Betalings Dato: 14 dage efter modtagelse",
            invGenDate: "Faktura Oprettet d. " + invoiceDate,
            headerBorder: false,
            tableBodyBorder: false,
            header: ["#", "INC Nummer", "Loen Nummer", "Beskrivelse", "Defekt/Mangler", "Antal", "Pris"],
            table: Array.from(Array(1), (item, index) => ([
                index + 1,
                document.getElementById("inc-number").value,
                document.getElementById("user-number").value,
                unit +
                accessory,
                accessoryMissing + unitDefect + accessoryDefect,
                1,
                1500
                /*   "Loen Nummer paa bruger",
                   "Enhed/" +
                   "Udstyr navn",
                   "Defekt/mangler",
                   "Antallet",
                   "Prisen"

                 */
            ])),
            invTotalLabel: "Total:",
            invTotal: "1500" + ",-",

            invDescLabel: "Yderligere Information:",
            invDesc: text,
        },
        footer: {
            text: "Fakturaen oprettes på en computer og er gyldig uden underskrift og stempel.",
        },
        pageEnable: true,
        pageLabel: "Page ",
    };

    var pdfObject = jsPDFInvoiceTemplate.default(props);


    console.log("Object Created :" + pdfObject);
    removeInvoiceForm();
}

