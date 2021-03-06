$(function() {

  var $newItemButton = $('#newItemButton');
  var $closeListButton = $('#closeListButton');
  var $modListButton = $('#modListButton');
  var $newItemForm = $('#newItemForm');
  var $modItemForm = $('#modItemForm');
  var $textInput = $('input:text');
  var cancBut = ('<input type="image" class="cancButton" name="canc" src="images/icons/bin.png"/>');
  var modBut = ('<input type="image" class="modButton" name="mod" src="images/icons/wrench.png"/>');
  var $theList = $('#theList');
  var $listOfLists = $('#listOfLists');
  var $right = $('#right');

//Innvia richiesta HTTP
  var xhr = new XMLHttpRequest();

// Carica file JSON
  xhr.open('GET', 'data/lists.json', true);
  xhr.send(null);

// Carica nomi liste a sinistra da data.JSON
  xhr.onload = function() {
    responseObject = JSON.parse(xhr.responseText);
    var newContent= '';
    for (var i=0; i < responseObject.lists.length; i++) {
      newContent += '<li><button>' +  responseObject.lists[i].title + '</button></li>';
    }
    $($listOfLists).append(newContent);
  };

// mostra il pulsante per aggiungere elementi alla lista e nasconde i form per inserirli o modificarli
  $right.hide();
  $newItemButton.show();
  $newItemForm.hide();
  $modItemForm.hide();
  $closeListButton.hide();
  $modListButton.hide();

//Cliccando sulla Lista viene selezionata e appare il contenuto
  $listOfLists.on('click', 'button', function(e){
    e.preventDefault();
    var selectedButt = $(this); //lista selezionata
    $theList.html(''); //rimove contenuto della lista di elementi se c'è
    $('#listTitle').remove(); //rimuove il titolo della lista se c'è

    //TODO rimuovere questo controllo e mettere tasto salvataggio
    if (selectedButt.hasClass('selected')) {
      selectedButt.removeClass('selected');
      $right.hide();
    }
    else {
      $listOfLists.children().children().removeClass('selected'); //scegliendo una lista deseleziona le altre
      selectedButt.addClass('selected'); //seleziona la lista corrente
      $right.show(); //mostra la parete destra
      responseObject = JSON.parse(xhr.responseText); //Parse file json
      for (var i=0; i < responseObject.lists.length; i++) { // cerca nel json la lista con il nome selezionato
        if (responseObject.lists[i].title == selectedButt.text()) {
          $($right).prepend('<h2 id="listTitle">' + responseObject.lists[i].title + '</h2>') //aggiunge il titolo della lista
          for (var j=0; j < responseObject.lists[i].elements[j].length; j++) { //aggiunge gli elementi della lista con i pulsanti
            $($theList).append('<li><span>' + responseObject.lists[i].elements[j] +'</span>' + cancBut + modBut + '</li>');
          }
        }
      }
    }
    //TODO caricare lista
  });

//Cliccando su Nuovo Elemento nasconde il pulsante e mostra il form
  $('#showForm').on('click', function(){
      $newItemButton.hide();
      $newItemForm.show();
  });

//Facendo il submit del form per il nuovo elemento, aggiunge un nuovo elemento alla lista, nasconde il showForm
//e mostra il pulsante per inserire un nuovo elemento.
  $newItemForm.on('submit', function(e){
    e.preventDefault();
    var newText = $textInput.val();
    if (newText != '') {
          $($theList).append('<li><span>' + newText +'</span>' + cancBut + modBut + '</li>');
    }
    $newItemForm.hide();
    $newItemButton.show();
    $textInput.val('');
  });

// TODO: prende il valore dal form e lo sostituisce a quello esistente. Azzera il textinput, nasconde il form
// mostra il pulsante per inserire un nuovo elemento.
  $modItemForm.on('submit', function(e){
    e.preventDefault();
//    $('span.mod').empty();
    var newText = $('#modDescription').val();
//    $($theList).find('span.mod').prepend(newText);
    $($theList).find('span.mod').text(newText).removeClass('mod');
    $modItemForm.hide();
    $newItemButton.show();
  });

// Barra il testo dell'elemento della lista con un double click o toglie la barra se è già barrato
  $($theList).on('dblclick', 'span', function(e){
    var span = $(this);
    var through = span.hasClass('through'); //controlla se è già barrata
    if (through === true) {
      span.removeClass('through');
    }
    else {
      span.addClass('through');
    }

  });

// Cancella l'elemento
// TODO: inserire box di conferma
  $($theList).on('click', 'input.cancButton', function(e) {
      e.preventDefault();
      var elem = $(this).parent();
      elem.remove();
  });

//Evidenzia l'elemento da modificare, nasconde il form per aggiungere elementi else {
  //mostra quello per modificare il testo.
  $($theList).on('click', 'input.modButton', function(e) {
      e.preventDefault();
      var high = $(this).parent(); //Salva in high il genitore di input = li
      high.children('span').addClass('mod'); //trova span di li
      $newItemButton.hide();
      $modItemForm.show();
  });

});
