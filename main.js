function onButtonClick(btn) {
    let name = document.getElementById("name"); 
    let newRow = document.getElementById("newRow"); 
    let quantity = document.getElementById("quantity"); 

    let col = document.createElement("div");
    col.innerText = `Я ${name.value}`; 
    col.className = `col-${quantity.value} p-2 m-2 bg-warning`;

    newRow.appendChild(col)
}