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
    editLink.textContent = 'Editar'; //trocar por icone
    optionsCell.appendChild(editLink);
    optionsCell.appendChild(document.createTextNode(' | '));

    editLink.addEventListener('click', function(event) {
      event.preventDefault();
      var row = this.parentNode.parentNode;
      
      var name = row.childNodes[0].textContent;
      var phone = row.childNodes[1].textContent;
    
      window.open('editar.html?name=' + encodeURIComponent(name) + '&phone=' + encodeURIComponent(phone));
    });

    var deleteLink = document.createElement('a');
    
    deleteLink.href = '#';
    deleteLink.textContent = 'Excluir'; //trocar por icone
    optionsCell.appendChild(deleteLink);

    deleteLink.addEventListener('click', function(event) {
      event.preventDefault();
      var row = this.parentNode.parentNode;
      row.parentNode.removeChild(row);
    });
  
    row.appendChild(nameCell);
    row.appendChild(phoneCell);
    row.appendChild(optionsCell);

    document.getElementById('participantsTable').getElementsByTagName('tbody')[0].appendChild(row);

    document.getElementById('participantName').value = '';
    document.getElementById('participantPhone').value = '';
  }
});
