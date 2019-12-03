function selecaoPele(){
    let type = document.getElementsByName("pele");

    if(type[0].checked){
        var val = type[0].value;
        alert("A pele selecionada foi "+val);
    }

    else if(type[1].checked){
        var val = type[1].value;
        alert("A pele selecionada foi "+val);
    }

    else if(type[2].checked){
        var val = type[2].value;
        alert("A pele selecionada foi "+val);
    }            
}

function selecaoGenero(){
    let type = document.getElementsByName("genero");

    if(type[0].checked){
        var val = type[0].value;
        alert("O gênero selecionado foi "+val);
    }

    else if(type[1].checked){
        var val = type[1].value;
        alert("O gênero selecionado foi "+val);
    }   
}

function selecaoCabelo(){
    let type = document.getElementsByName("cabelo");

    if(type[0].checked){
        var val = type[0].value;
        alert("O cabelo selecionado foi "+val);
    }

    else if(type[1].checked){
        var val = type[1].value;
        alert("O cabelo selecionado foi "+val);
    }

    else if(type[2].checked){
        var val = type[2].value;
        alert("O cabelo selecionado foi "+val);
    }            
}

function selecaoRoupa(){
    let type = document.getElementsByName("roupa");

    if(type[0].checked){
        var val = type[0].value;
        alert("A roupa selecionada foi "+val);
    }

    else if(type[1].checked){
        var val = type[1].value;
        alert("A roupa selecionada foi "+val);
    }

    else if(type[2].checked){
        var val = type[2].value;
        alert("A roupa selecionada foi "+val);
    }

    else if(type[3].checked){
        var val = type[3].value;
        alert("A roupa selecionada foi "+val);
    }  
}