var elUser, elPass, elSubmit, elForm;
elForm = document.getElementById('formLogin');
elUser = document.getElementById('username').value;
elPass = document.getElementById('password').value;
elSubmit = document.getElementById('submit');

//Codice per aggiunta del Warning sotto al
  var newEl = document.createElement('p');
  var newText = document.createTextNode('culocane');
  newEl.appendChild(newText);
  var position = document.getElementById('formLogin'); //decommenta il div e metti warning al posto di formLogin
  position.appendChild(newEl);



/*

if((elUser == '')||(elPass == '')) {
}

function checkInput(event) {

}

elForm.addEventListener ('submit', checkInput, false);
*/
