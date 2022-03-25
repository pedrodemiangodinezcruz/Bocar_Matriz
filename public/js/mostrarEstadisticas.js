
document.getElementById("ir-tabla-controles").onclick = function() {
    document.getElementById("riesgoInherente").style.display = "none";
    document.getElementById("controles").style.display = "block";
}
document.getElementById("regresar-tabla-riesgoInherente").onclick = function() {
    document.getElementById("controles").style.display = "none";
    document.getElementById("riesgoInherente").style.display = "block";
}