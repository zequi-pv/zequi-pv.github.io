let tabla = document.getElementById("tabla");
let trInputs;
let input1;
let input2;
let input3;

function nuevosDatos() {
    trInputs = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    input1 = document.createElement("input");
    input2 = document.createElement("input");
    input3 = document.createElement("input");

    input1.setAttribute("type", "text");
    td1.appendChild(input1);
    input2.setAttribute("type", "text");
    td2.appendChild(input2);
    input3.setAttribute("type", "text");
    td3.appendChild(input3);

    trInputs.appendChild(td1);
    trInputs.appendChild(td2);
    trInputs.appendChild(td3);

    tabla.appendChild(trInputs);

    document.getElementById("nuevosdatos").style.visibility = "hidden";
    document.getElementById("ingresar").style.display = "inline-block";
}

function ingresar() {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    td1.innerHTML = input1.value;
    td2.innerHTML = input2.value;
    td3.innerHTML = input3.value;
    
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tabla.appendChild(tr);
    trInputs.remove();

    document.getElementById("nuevosdatos").style.visibility = "visible";
    document.getElementById("ingresar").style.display = "none";
}