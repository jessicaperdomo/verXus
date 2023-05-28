var formContato = document.getElementById("submitButton");
var emailInput = document.getElementById('exampleInputEmail');
var senhaInput = document.getElementById('inputPassword');
var errorIcons = document.getElementsByClassName("error-icon");
var nameInput = document.getElementById("exampleInputNome");
var cepInput = document.getElementById("cep");
var telefoneInput = document.getElementById("telefone"); 
var cidadedInput = document.getElementById("cidadeInput"); 
var estadoInput = document.getElementById("estadoInput"); 
var sexoInput = document.getElementById("inputSexo"); 
var dataInput = document.getElementById("data"); 

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

function validarEmail(){
    let email = emailInput.value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailError = document.getElementById("emailError");

    emailError.textContent =""

    if (emailRegex.test(email)) {
        errorIcons[1].style.display = "none";
        emailInput.classList.remove("error-border");
        return true;
    } 
    else {
        emailError.textContent = "E-mail inválido!";
        errorIcons[1].style.display = "inline";
        emailInput.classList.add("error-border");
        return false;
    }
}


function validarSenha() {
    let senha = senhaInput.value;
    let senhaRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;  
    let senhaError = document.getElementById("senhaError");
  
    senhaError.textContent = ""
  
    if (senhaRegex.test(senha)) {
      errorIcons[8].style.display = "none";
      senhaInput.classList.remove("error-border");
      return true;
    } 
    else {
      senhaError.textContent = "Senha inválida! Verifique se a senha contém [_*&,A-Z,a-z,0-9]"; 
      errorIcons[8].style.display = "inline";
      senhaInput.classList.add("error-border");
      return false;
    }
}

function validarCEP() {
    let regexCEP = /^\d{2}\.\d{3}-\d{3}$/;
    let cep = cepInput.value;
    let cepError = document.getElementById("cepError");

    cepError.textContent =""

    if (regexCEP.test(cep)) {
        errorIcons[2].style.display = "none";
        cepInput.classList.remove("error-border");
        //buscarCEP(cep);
        return true;
    } 
    else {
        cepError.textContent = "CEP inválido!";
        errorIcons[2].style.display = "inline";
        cepInput.classList.add("error-border");
        return false;
    }  
}

function validarTelefone(){
    let telefone = telefoneInput.value;
    let regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
    let telefoneError = document.getElementById("telefoneError");

    telefoneError.textContent =""

    if (regexTelefone.test(telefone)) {
        errorIcons[7].style.display = "none";
        telefoneInput.classList.remove("error-border");
        return true;
    } 
    else {
        telefoneError.textContent = "Telefone inválido!";
        errorIcons[7].style.display = "inline";
        telefoneInput.classList.add("error-border");
        return false;
    }
}

function validarEstado() {
    let estadosValidos = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    let estado = estadoInput.value;
    let estadoError = document.getElementById("estadoError");
    
    estadoError.textContent = ""

    if (estadosValidos.includes(estado.toUpperCase()) && estado.length==2) {
        errorIcons[3].style.display = "none";
        estadoInput.classList.remove("error-border");
        return true;
    } 
    else {
        estadoError.textContent = "Estado inválido!";
        errorIcons[3].style.display = "inline";
        estadoInput.classList.add("error-border");
        return false;
    }
}

function validarCidade() {
    let cidade = cidadeInput.value;
    let cidadeError = document.getElementById("cidadeError");
    var cidadeRegex = /^[A-Za-zÀ-ÿ\s]+$/;
    cidadeError.textContent = ""

    if (!cidadeRegex.test(cidade)) {
        cidadeError.textContent = "Cidade inválida!";
        errorIcons[4].style.display = "inline";
        cidadeInput.classList.add("error-border");
        return false;
    } 
    else {
        errorIcons[4].style.display = "none";
        cidadeInput.classList.remove("error-border");
        return true;
    }
}

function validarSexo(){
    let sexo = sexoInput.value;
    let sexoError = document.getElementById("sexoError");

    sexoError.textContent = "";

    if (sexo === "Selecione aqui") {
        sexoError.textContent = "Selecione uma opção!";
        errorIcons[6].style.display = "inline";
        sexoInput.classList.add("error-border");
        return false;
    } 
    else {
        errorIcons[6].style.display = "none";
        sexoInput.classList.remove("error-border");
        return true;
    }
}

function validarData(){
    let data =dataInput.value;
    let dataError = document.getElementById("dataError");
    
    dataError.textContent=""

    if (data ===  "") {
        dataError.textContent = "Insira uma data!";
        errorIcons[5].style.display = "inline";
        dataInput.classList.add("error-border");
        return false;
    } 
    else {
        errorIcons[5].style.display = "none";
        dataInput.classList.remove("error-border");
        return true;
    }
}

function validarFormulario(event) {
    let isEmailValid = validarEmail();
    let isSenhaValid = validarSenha();
    let isNameValid = validarNome();
    let isCepValid = validarCEP();
    let isTelefoneValid = validarTelefone();
    let isEstadoValid = validarEstado();
    let isCidadeValid = validarCidade();
    let isSexoValid = validarSexo();
    let isDataValid = validarData();
  
    if (!isEmailValid || !isSenhaValid || !isNameValid || !isCepValid || !isTelefoneValid || !isEstadoValid || !isCidadeValid || !isSexoValid || !isDataValid) {
        event.preventDefault();
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}

  
emailInput.addEventListener('blur', validarFormulario,false);
senhaInput.addEventListener('blur', validarFormulario,false);
nameInput.addEventListener('blur', validarFormulario,false);
cepInput.addEventListener('blur',validarFormulario,false);
telefoneInput.addEventListener('blur',validarFormulario,false);
estadoInput.addEventListener('blur',validarFormulario,false);
cidadeInput.addEventListener('blur',validarFormulario,false);
sexoInput.addEventListener('blur',validarFormulario,false);
dataInput.addEventListener('blur',validarFormulario,false);


formContato.addEventListener("submit", validarFormulario,false);
  
  
submitButton.disabled = true;

function mCEP () {
    let cep = event.target.value;
    cep = cep.replace(/\D/g, "")
    cep = cep.replace(/^(\d{2})(\d)/, "$1.$2")
    cep = cep.replace(/.(\d{3})(\d)/, ".$1-$2")
    event.target.value = cep;
}

function mTel(){
    let numero = event.target.value;
    numero = numero.replace(/\D/g, ""); 
    numero = numero.replace(/^(\d{2})(\d)/g, "($1) $2"); 
    numero = numero.replace(/(\d)(\d{4})$/, "$1-$2"); 
    event.target.value = numero;
}