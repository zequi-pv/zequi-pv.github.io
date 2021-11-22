function areaCirculo(){
    var radioo = document.getElementById("radio").value;
    var resultadoo = Math.PI * parseInt(radioo) * parseInt(radioo);
    document.getElementById("Resultado").innerHTML = resultadoo
  }
function areaEsfera(){
    var radioo = document.getElementById("radio").value;
    var resultadoo = 4 * Math.PI * parseInt(radioo) * parseInt(radioo);
    document.getElementById("Resultado").innerHTML = resultadoo;
}
function areaCuadrado(){
    var ladoo = document.getElementById("lado").value;
    var resultadoo = parseInt(ladoo) * parseInt(ladoo);
    document.getElementById("Resultado").innerHTML = resultadoo;
}
function areaCubo(){
    var ladoo = document.getElementById("lado").value;
    var resultadoo = 6 * parseInt(ladoo) * parseInt(ladoo);
    document.getElementById("Resultado").innerHTML = resultadoo;
}
function areaTriangulo(){
    var basee = document.getElementById("base").value;
    var alturaa = document.getElementById("altura").value;
    var resultadoo = parseInt(basee) * parseInt(alturaa) /2;
    document.getElementById("Resultado").innerHTML = resultadoo;
}
