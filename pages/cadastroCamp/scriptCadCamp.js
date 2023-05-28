var siglasEstados = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
var formContato = document.getElementById("submitButton");
var errorIcons = document.getElementsByClassName("error-icon");
var nameInput = document.getElementById("exampleInputNomeCamp");
var modalidadeInput = document.getElementById("modalidadeInput");
var cidadedInput = document.getElementById("cidadeInput"); 
var estadoInput = document.getElementById("estadoInput"); 
var dataIniInput = document.getElementById("data"); 
var dataFimInput = document.getElementById("data2"); 
var descricaoInput = document.getElementById("descriInput"); 

function validarNome() {
    let nameError = document.getElementById("nomeError");
    let nameRegex = /^[a-zA-Z\s]{8,}$/;

    nameError.textContent = "";

    if (!nameRegex.test(nameInput.value)) {
        nameError.textContent = "Nome deve ter no mínimo 8 caracteres!";
        errorIcons[0].style.display = "inline";
        nameInput.classList.add("error-border");
        return false;
    } else {
        errorIcons[0].style.display = "none";
        nameInput.classList.remove("error-border");
        return true;
    }
}


function validarEstado() {
    let estado = estadoInput.value;
    let estadoError = document.getElementById("estadoError");
    
    estadoError.textContent = ""

    if (estado==="Selecione aqui") {
        estadoError.textContent = "Selecione um estado!";
        errorIcons[3].style.display = "inline";
        estadoInput.classList.add("error-border");
        return false;
    } 
    else {
        errorIcons[3].style.display = "none";
        estadoInput.classList.remove("error-border");
        return true;
    }
}

function validarCidade() {
    let cidade = cidadeInput.value;
    var cidadeRegex = /^[A-Za-zÀ-ÿ\s]+$/;
    let cidadeError = document.getElementById("cidadeError");
    
    cidadeError.textContent = ""

    if (!cidadeRegex.test(cidade)) {
        cidadeError.textContent = "Cidade invalida!";
        errorIcons[2].style.display = "inline";
        cidadeInput.classList.add("error-border");
        return false;
    } 
    else {
        errorIcons[2].style.display = "none";
        cidadeInput.classList.remove("error-border");
        return true;
    }
}


function validarDataIni(){
    let data = dataIniInput.value;
    let dataError = document.getElementById("dataInicioError");
    
    dataError.textContent=""

    if (data ===  "") {
        dataError.textContent = "Escolha uma data de inicio!";
        errorIcons[4].style.display = "inline";
        dataIniInput.classList.add("error-border");
        return false;
    } 
    else {
        errorIcons[4].style.display = "none";
        dataIniInput.classList.remove("error-border");
        return true;
    }
}

function validarDataFim(){
    let data =dataFimInput.value;
    let dataError = document.getElementById("dataFinalError");
    
    dataError.textContent=""

    if (data ===  "") {
        dataError.textContent = "Escolha uma data de fim!";
        errorIcons[5].style.display = "inline";
        dataFimInput.classList.add("error-border");
        return false;
    } 
    else {
        errorIcons[5].style.display = "none";
        dataFimInput.classList.remove("error-border");
        return true;
    }
}

function validarModalidade(){
    let modalidade = modalidadeInput.value;
    let modalidadeError = document.getElementById("modalidadeError");
    
    modalidadeError.textContent = ""

    if (modalidade==="Selecione aqui") {
        modalidadeError.textContent = "Selecione uma modalidade!";
        errorIcons[1].style.display = "inline";
        modalidadeInput.classList.add("error-border");
        return false;
    } 
    else {
        errorIcons[1].style.display = "none";
        modalidadeInput.classList.remove("error-border");
        return true;
    }
}

function validarDescricao(){
    var descricaoRegex = /^[\w\s.,!?'"()-]+$/;
    let descri = descricaoInput.value;
    let descriError = document.getElementById("descError");

    descriError.textContent = "";
    if(!descricaoRegex.test(descri) ){
        descriError.textContent = "Descrição invalida!";
        errorIcons[6].style.display = "inline";
        descricaoInput.classList.add("error-border");
        return false;
    }
    else{
        errorIcons[6].style.display = "none";
        descricaoInput.classList.remove("error-border");
        return true;
    }
}

function validarFormulario(event) {
    let isNameValid = validarNome();
    let isModalidadeValid = validarModalidade();
    let isEstadoValid = validarEstado();
    let isCidadeValid = validarCidade();
    let isDataIValid = validarDataIni();
    let isDataFValid = validarDataFim();
    let isDescricaoValid = validarDescricao();
  
    if (!isNameValid || !isEstadoValid || !isCidadeValid || !isModalidadeValid || !isDataIValid || !isDataFValid || !isDescricaoValid) {
        event.preventDefault();
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}

nameInput.addEventListener('blur', validarFormulario,false);
modalidadeInput.addEventListener('blur', validarFormulario,false);
estadoInput.addEventListener('blur',validarFormulario,false);
cidadeInput.addEventListener('blur',validarFormulario,false);
dataIniInput.addEventListener('blur',validarFormulario,false);
dataFimInput.addEventListener('blur',validarFormulario,false);
descricaoInput.addEventListener('blur',validarFormulario,false);

formContato.addEventListener("submit", validarFormulario,false);
  
  
submitButton.disabled = true;

function preencherEstados() {
    for (var i = 0; i < siglasEstados.length; i++) {
      var option = document.createElement("option");
      option.text = siglasEstados[i];
      estadoInput.add(option);
    }
}

window.addEventListener("load", preencherEstados);

