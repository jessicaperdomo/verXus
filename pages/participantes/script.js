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
    var deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = 'Excluir';
    optionsCell.appendChild(deleteLink);

    row.appendChild(nameCell);
    row.appendChild(phoneCell);
    row.appendChild(optionsCell);

    document.getElementById('participantsTable').getElementsByTagName('tbody')[0].appendChild(row);

    document.getElementById('participantName').value = '';
    document.getElementById('participantPhone').value = '';
  }
});
