var formContato = document.getElementById("formContato");
var submitButton = document.getElementById("submitButton");
var nameInput = document.getElementById("nameUser");
var emailInput = document.getElementById("emailUser");
var descInput = document.getElementById("descUser");
var errorIcons = document.getElementsByClassName("error-icon");

// Função de validação do campo "Nome"
function validarNome() {
    var nameError = document.getElementById("nameError");
    var nameRegex = /^[a-zA-Z\s]{8,}$/;

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

// Função de validação do campo "E-mail"
function validarEmail() {
    var emailError = document.getElementById("emailError");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailError.textContent = "";

    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "E-mail inválido!";
        errorIcons[1].style.display = "inline";
        emailInput.classList.add("error-border");
        return false;
    } else {
        errorIcons[1].style.display = "none";
        emailInput.classList.remove("error-border");
        return true;
    }
}

// Função de validação do campo "Descrição"
function validarDescricao() {
    var descError = document.getElementById("descError");

    descError.textContent = "";

    if (descInput.value.trim() === "") {
        descError.textContent = "A descrição é obrigatória!";
        errorIcons[2].style.display = "inline";
        descInput.classList.add("error-border");
        return false;
    } else {
        errorIcons[2].style.display = "none";
        descInput.classList.remove("error-border");
        return true;
    }
}

// Função de validação do formulário
function validarFormulario(event) {
    var isNameValid = validarNome();
    var isEmailValid = validarEmail();
    var isDescricaoValid = validarDescricao();

    if (!isNameValid || !isEmailValid || !isDescricaoValid) {
        event.preventDefault();
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}

nameInput.addEventListener("blur", validarFormulario,false);
emailInput.addEventListener("blur", validarFormulario,false);
descInput.addEventListener("blur", validarFormulario,false);

formContato.addEventListener("submit", validarFormulario,false);

submitButton.disabled = true;
