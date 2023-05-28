
function validarSenha() {
    let senha = senhaInput.value;
    let senhaRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;  
    let senhaError = document.getElementById("senhaError");
  
    senhaError.textContent = ""
  
    if (senhaRegex.test(senha)) {
      errorIcons[1].style.display = "none";
      senhaInput.classList.remove("error-border");
      return true;
    } 
    else {
      senhaError.textContent = "Senha inválida! Verifique se a senha contém todos os caracteres necessários [_*&,A-Z,a-z,0-9]"; 
      errorIcons[1].style.display = "inline";
      senhaInput.classList.add("error-border");
      return false;
    }
}