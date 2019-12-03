//call reload on page load

/*
//add click functionality to radio buttons
Array.from(document.querySelectorAll('input[type="radio"]')).forEach(function(item, index) {
  item.addEventListener('click', save);
});

//Save Values
function save() {
  //Radiobuttons  
  var g1 = document.querySelector('input[name=erarbeiten]:checked').value;
  localStorage.setItem("g1", g1);
}
//Restoring saved Values
function reload() {
  // Radiobuttons    
  // get a list of DOM elements
  var G1 = Array.from(document.getElementsByName('erarbeiten'));
  var val1 = localStorage.getItem('g1');
  for (var i = 0; i < G1.length; i++) {
    if (G1[i].value == val1) {
      G1[i].checked = true;
    }
  }
}

*/

/* limitando a quantidade de caracteres do nome:  */
$(".pnome").on('keydown', function (evt) {
    var qtd = $(this).val().length;
    var limite = $(this).data('limite') || 20;

    if (qtd > limite && evt.keyCode != 8)
        return false;

    console.log(qtd, limite);
});


/* limitando a quantidade de caracteres da dedicatoria */
$(".pdedicatoria").on('keydown', function (evt) {
    var qtd = $(this).val().length;
    var limite = $(this).data('limite') || 180;

    if (qtd > limite && evt.keyCode != 8)
        return false;

    console.log(qtd, limite);
});



$(document).ready(function() {
    $('#finalizarcriacao').on('click', function() {
        //Text
        var pNome = document.querySelector(".pnome").value;    
        var pDedicatoria = document.querySelector(".pdedicatoria").value;   

        //Radiobuttons  
        var pGenero = document.querySelector('input[name=genero]:checked').value;
        var pPele = document.querySelector('input[name=pele]:checked').value;
        var pRoupa = document.querySelector('input[name=roupa]:checked').value;
        
        var pCabeloTipo = document.querySelector('input[name=cabelo]:checked').value;
        var pCabeloCor = document.querySelector('input[name=cabelo-cor]:checked').value;

        var Personagem = {
            userNome: pNome,
            userDedicatoria: pDedicatoria,
            userPersonagem: {
                genero: pGenero,
                roupa: pRoupa,
                pele: pPele,
                acessorio: "bone",
                cabelo: {
                    tipo: pCabeloTipo,
                    cor: pCabeloCor
                }
            }
        }

        localStorage.setItem("Personagem", JSON.stringify(Personagem));    
    });
});


/*
$('input[name=genero]').click(function() {
    alert($('input[name=genero]:checked').val());
});*/

/*
//add click functionality to radio buttons
Array.from(document.querySelectorAll('input[type="radio"]')).forEach(function (item, index) {
    item.addEventListener('click', save);
});*/


//Retrieve the object
localstor = JSON.parse(localStorage.getItem("Avatar"));
/*localstor = JSON.parse(localStorage.getItem("pDedicatoria"));
localstor = JSON.parse(localStorage.getItem("pGenero"));
localstor = JSON.parse(localStorage.getItem("pPele"));
localstor = JSON.parse(localStorage.getItem("pRoupa"));*/

//And put the editted object back to cache
/*
localStorage.setItem("pNome", JSON.stringify(localstor)); 
localStorage.setItem("pDedicatoria", JSON.stringify(localstor)); 
localStorage.setItem("pGenero", JSON.stringify(localstor)); 
localStorage.setItem("pPele", JSON.stringify(localstor)); 
localStorage.setItem("pRoupa", JSON.stringify(localstor)); */

