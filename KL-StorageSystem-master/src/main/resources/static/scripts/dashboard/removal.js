document.getElementById("remove-btn").addEventListener("click", adjustContent)
function adjustContent() {

    adjustUnits()
    adjustAccessories()
    setTimeout(reloadPage,1000)

}

function adjustUnits(){
    console.log("Patching: " + baseURL + "/units/adjust")
    fetch(baseURL + "/units/adjust", {
        method: "PATCH",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(selectedUnits)
    }).then(response => {
        if (response.status === 200) {
            console.log("Patch successful")
        } else {
            console.log("Status: " + response.status);
        }
    })
}

function adjustAccessories(){
    console.log("Patching: " + baseURL + "/accessories/adjust")
    fetch(baseURL + "/accessories/adjust", {
        method: "PATCH",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(selectedAccessories)
    }).then(response => {
        if (response.status === 200) {
            console.log("Patch successful")
        } else {
            console.log("Status: " + response.status);
        }
    })
}

function reloadPage(){
    window.document.location.reload()
}

