$( document ).ready( function () {

    $("#formCadastro").validate({
        rules: {
            genero: {
                required: true
            },
            
            nome: {
                required: true,
                maxlength: 20,
                minlength: 3
            },

            dedicatoria: {
                required: false,
                maxlength: 200,
            }
        }
    });

    $("#formPele").validate({
        rules: {
            pele: {
                required: true
            }
        }
    });

    $("#formCabelo").validate({
        rules: {
            cabelo: {
                required: true
            }
        }
    });
    
    $("#formCabeloCor").validate({
        rules: {
            cabelo_cor: {
                required: true
            }
        }
    });

});
/*
$(function () {
    $('#generoform').validate({
        rules: {
            Color: {
                required: true
            }
        },
        messages: {
            Color: {
                required: "Please select a Color<br/>"
            }
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.appendTo(element.parents('.container'));
            } else { // This is the default behavior 
                error.insertAfter(element);
            }
        }
    });

});*/
