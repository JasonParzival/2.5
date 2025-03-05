function onButtonClick(btn) {
    let name = document.getElementById("name"); // получили поле для ввода по id
    let newRow = document.getElementById("newRow"); 

    let col = document.createElement("div")
    col.innerText = `Я ${name.value}`; 
    col.className = "col p-2 m-2 bg-warning"

    newRow.appendChild(col)
}