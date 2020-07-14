$(function() {

  var $newItemButton = $('#newItemButton');
  var $newItemForm = $('#newItemForm');
  var $modItemForm = $('#modItemForm');
  var $textInput = $('input:text');
  var cancBut = ('<input type="image" class="cancButton" name="canc" src="images/icons/bin.png"/>');
  var modBut = ('<input type="image" class="modButton" name="mod" src="images/icons/wrench.png"/>');
  var $theList = $('#theList');

// mostra il pulsante per aggiungere elementi alla lista e nasconde i form per inserirli o modificarli
  $newItemButton.show();
  $newItemForm.hide();
  $modItemForm.hide();

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
    $($theList).append('<li><span>' + newText +'</span>' + cancBut + modBut + '</li>');
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
