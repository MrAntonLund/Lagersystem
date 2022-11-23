/* ------------ TOGGLE SWITCH FOR UNITS AND ACCESSORIES + SWITCH COLOR ON THE BUTTONS ------------ */
function toggleTables() {
    var x = document.getElementById("units")
    var y = document.getElementById("accessories")
    console.log(x)
    console.log(y)
    if (x.style.display === "none") {
        x.style.display = "";
        $('.units-btn').addClass('active')
        y.style.display = "none";
        $('.ass-btn').removeClass('active')
        console.log("now displaying units")
    } else {
        x.style.display = "none";
        $('.units-btn').removeClass('active')
        y.style.display = "";
        $('.ass-btn').addClass('active')
        console.log("now displaying accessories")
    }
}

/* ------------ STATUS COLOUR CALCULATION ------------ */
function calcStatus(amount, criticalAmount, lowAmount) {
    let statusDiv = document.createElement("div")
    statusDiv.classList.add("status-indicator-green");
    statusDiv.innerText = "Ok";
    if (amount <= lowAmount) {
        statusDiv.innerText = "Lav";
        statusDiv.classList.replace("status-indicator-green", "status-indicator-yellow")
    }
    if (amount <= criticalAmount) {
        statusDiv.innerText = "Kritisk";
        statusDiv.classList.replace("status-indicator-yellow", "status-indicator-red")
    }
    return statusDiv;
}

/* ------------ DATATABLES.NET ENHANCEMENTS  ------------ */
function enhanceTable(table) {
    $(table).dataTable();
}
