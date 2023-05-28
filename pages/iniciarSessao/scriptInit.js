var usuarios = [{login:'leogomes@gmail.com', senha:'senha12345'},{login:'meniadaDAlua@gmail.com', senha:'*lemsad12*'}];
var formContato = document.getElementById("submitButton");
var emailInput = document.getElementById('exampleInputEmail1');
var  senhaInput = document.getElementById('exampleInputPassword1');
var errorIcons = document.getElementsByClassName("error-icon");

function validarUsuario() {
  let email = emailInput.value;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailError = document.getElementById("emailError");

  emailError.textContent =""

  if (emailRegex.test(email)) {
    errorIcons[0].style.display = "none";
    emailInput.classList.remove("error-border");
    return true;
  } 
  else {
    emailError.textContent = "E-mail inválido!";
    errorIcons[0].style.display = "inline";
    emailInput.classList.add("error-border");
    return false;
  }
}

function validarSenha() {
  let senha = senhaInput.value;
  let senhaError = document.getElementById("senhaError");

  senhaError.textContent = ""

  if (senha.length > 8) {
    errorIcons[1].style.display = "none";
    senhaInput.classList.remove("error-border");
    return true;
  } 
  else {
    senhaError.textContent = "Senha inválida!"; 
    errorIcons[1].style.display = "inline";
    senhaInput.classList.add("error-border");
    return false;
  }
}


function validarFormulario(event) {
  var isEmailValid = validarUsuario();
  var isSenhaValid = validarSenha();

  if (!isEmailValid || !isSenhaValid) {
      event.preventDefault();
      submitButton.disabled = true;
  } else {
      submitButton.disabled = false;
  }
}


emailInput.addEventListener('blur', validarFormulario,false);
senhaInput.addEventListener('blur', validarFormulario,false);

formContato.addEventListener("submit", validarFormulario,false);


submitButton.disabled = true;

function validaLogin(){
  let email = emailInput.value;
  let senha = senhaInput.value;
  let flag=0;
  for(let user of usuarios){
    if(user.login===email && user.senha===senha){
      flag = 1;
    }
  }
  if(flag===1){
    alert('Achou')
  }
  else{
    alert('Não Achou')
  }
}