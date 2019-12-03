var customPele;
document.getElementById("custom_pele").onclick = function () {
    var pele = document.getElementsByName("pele");

    for (var i = 0; i < pele.length; i++) {
        if (pele[i].checked) {
            customPele = pele[i].value;

            console.log("Escolheu:", pele[i].value);

            return;
        }
    }
};

/*
var customGenero;
document.getElementById("custom_genero").onclick = function () {
    var genero = document.getElementsByName("genero");

    for (var i = 0; i < genero.length; i++) {
        if (genero[i].checked) {
            customGenero = genero[i].value;

            console.log("Escolheu:", genero[i].value);
        }
    }
};

var customCabelo;
document.getElementById("custom_cabelo").onclick = function () {
    var cabelo = document.getElementsByName("cabelo");

    for (var i = 0; i < cabelo.length; i++) {
        if (cabelo[i].checked) {
            customCabelo = cabelo[i].value;

            console.log("Escolheu:", cabelo[i].value);
        }
    }
};

var customRoupa;
document.getElementById("custom_roupa").onclick = function () {
    var roupa = document.getElementsByName("roupa");

    for (var i = 0; i < roupa.length; i++) {
        if (roupa[i].checked) {
            customRoupa = roupa[i].value;

            console.log("Escolheu:", roupa[i].value);
        }
    }
};

*/