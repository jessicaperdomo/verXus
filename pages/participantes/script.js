var addButton = document.getElementById('addParticipantLink');
var errorIcons = document.getElementsByClassName("error-icon");
var nameInput = document.getElementById('participantName');
var phoneInput = document.getElementById('participantPhone');

function limparErros() {
  nameInput.classList.remove('error-border');
  phoneInput.classList.remove('error-border');
  nameError.textContent = '';
  telefoneError.textContent = '';
  errorIcons[0].style.display = 'none';
  errorIcons[1].style.display = 'none';
}

document.getElementById('addParticipantLink').addEventListener('click', function(event) {
  event.preventDefault();
  var name = document.getElementById('participantName').value;
  var phone = document.getElementById('participantPhone').value;

  if (name && phone) {
    var row = document.createElement('tr');

    var nameCell = document.createElement('td');
    nameCell.textContent = name;
    var phoneCell = document.createElement('td');
    phoneCell.textContent = phone;

    var optionsCell = document.createElement('td');
    var editLink = document.createElement('a');

    editLink.href = '#';
    editLink.textContent = 'Editar';
    optionsCell.appendChild(editLink);
    optionsCell.appendChild(document.createTextNode(' | '));

    editLink.addEventListener('click', function(event) {
      event.preventDefault();
      var row = this.parentNode.parentNode;
      
      var name = row.childNodes[0].textContent;
      var phone = row.childNodes[1].textContent;
      
      document.getElementById('participantName').value = name;
      document.getElementById('participantPhone').value = phone;

      row.parentNode.removeChild(row);
      window.location.href = '#participantForm';
    });
    
    var deleteLink = document.createElement('a');
    
    deleteLink.href = '#';
    deleteLink.textContent = 'Excluir'; //trocar por icone
    optionsCell.appendChild(deleteLink);

    deleteLink.addEventListener('click', function(event) {
      event.preventDefault();
      var row = this.parentNode.parentNode;
      row.parentNode.removeChild(row);
      window.location.href = '#participantForm';
    });

    editLink.classList.add('edit-link');
    deleteLink.classList.add('delete-link');
  
    row.appendChild(nameCell);
    row.appendChild(phoneCell);
    row.appendChild(optionsCell);

    document.getElementById('participantsTable').getElementsByTagName('tbody')[0].appendChild(row);

    document.getElementById('participantName').value = '';
    document.getElementById('participantPhone').value = '';

    nameInput.value = '';
    phoneInput.value = '';
    limparErros();

    window.location.href = '#participantsTable';
  }
});

function validarNome(name) {
  let nameError = document.getElementById("nameError");
  let nameRegex = /^[a-zA-Z\s]{8,}$/;

  nameError.textContent = "";

  if (!nameRegex.test(name)) {
      nameError.textContent = "Nome deve ter mais de 8 caracteres!";
      errorIcons[0].style.display = "inline";
      nameInput.classList.add("error-border");
      return false;
  } else {
      errorIcons[0].style.display = "none";
      nameInput.classList.remove("error-border");
      return true;
  }
}

function validarTelefone(numero) {
  var padrao = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
  var telefoneError = document.getElementById("telefoneError");

  telefoneError.textContent = "";
  if (!padrao.test(numero)) {
    telefoneError.textContent = "Telefone inválido!";
    errorIcons[1].style.display = "inline";
    phoneInput.classList.add("error-border");
    return false;
  } else {
    errorIcons[1].style.display = "none";
    phoneInput.classList.remove("error-border");
    return true;
  }
}

function validarFormulario() {
  let name = nameInput.value;
  let telefone = phoneInput.value;

  let isNameValid = validarNome(name);
  let isTelefoneValid = validarTelefone(telefone);
  
  if (isNameValid && isTelefoneValid) {
    addButton.disabled = false;
    return true;
  } else {
    addButton.disabled = true;
    return false;
  }
}

nameInput.addEventListener('blur', validarFormulario, false);
phoneInput.addEventListener('blur', validarFormulario, false);

function mTel() {
  let numero = event.target.value;
  numero = numero.replace(/\D/g, ""); 
  numero = numero.replace(/^(\d{2})(\d)/g, "($1) $2"); 
  numero = numero.replace(/(\d)(\d{4})$/, "$1-$2"); 
  event.target.value = numero;
}
