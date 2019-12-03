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
/*$(".pnome").on('keydown', function (evt) {
    var qtd = $(this).val().length;
    var limite = $(this).data('limite') || 20;

    if (qtd > limite && evt.keyCode != 8)
        return false;

    console.log(qtd, limite);
});*/


/* limitando a quantidade de caracteres da dedicatoria */
/*$(".pdedicatoria").on('keydown', function (evt) {
    var qtd = $(this).val().length;
    var limite = $(this).data('limite') || 180;

    if (qtd > limite && evt.keyCode != 8)
        return false;

    console.log(qtd, limite);
});*/

let form1 = $("#formCadastro");
    
$('#passo1').click(function () {
    $("#formCadastro").valid();

    if (form1.valid() == true) {
        $(".btn.1").attr("data-toggle", "collapse");
    }
});

let form2 = $("#formPele");

$('#passo2').click(function () {
  $("#formPele").valid();

  if (form2.valid() == true) {
      $(".btn.2").attr("data-toggle", "collapse");
  }
});

let form3 = $("#formCabelo");

$('#passo3').click(function () {
  $("#formCabelo").valid();

  if (form3.valid() == true) {
      $(".btn.3").attr("data-toggle", "collapse");
  }
});

let form4 = $("#formCabeloCor");

$('#passo4').click(function () {
  $("#formCabeloCor").valid();

  if (form4.valid() == true) {
      $(".btn.4").attr("data-toggle", "collapse");
  }
});

let form5 = $("#formRoupa");

$('#passo4').click(function () {
  $("#formRoupa").valid();

  if (form5.valid() == true) {
      $(".btn.5").attr("data-toggle", "collapse");
  }
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
        var pCabeloCor = document.querySelector('input[name=cabelo_cor]:checked').value;

        let Personagem = {
            userNome: pNome,
            userDedicatoria: pDedicatoria,
            userGenero: pGenero,
            userPele: pPele,
            userCabeloTipo: pCabeloTipo,
            userCabeloCor: pCabeloCor, 
            userRoupa: pRoupa,
            userAcessorio: "boné"
        };

        myJSON = JSON.stringify(Personagem);

        localStorage.setItem("testJSON", myJSON);

        text = localStorage.getItem("testJSON");

        obj = JSON.parse(text);

        let peleAvatar1 = "<img src='img/svg/pele/pele_"+obj.userPele+".svg' width='100%' />";
        let peleAvatar2 = "<img src='img/svg/pele/pele_"+obj.userPele+".svg' width='100%' />";
        let peleAvatar3 = "<img src='img/svg/pele/pele_"+obj.userPele+".svg' width='100%' />";
        

        document.getElementById("demo").innerHTML = peleAvatar1;


        /* localStorage.setItem("Personagem", JSON.stringify(Personagem)); */
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

