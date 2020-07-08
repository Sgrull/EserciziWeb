$(function() {

  var $newItemButton = $('#newItemButton');
  var $newItemForm = $('#newItemForm');
  var $textInput = $('input:text');
  var $canButt = $('button');
  var $theList = $('#theList');

  $newItemButton.show();
  $newItemForm.hide();

  $('#showForm').on('click', function(){
      $newItemButton.hide();
      $newItemForm.show();
  });

  $newItemForm.on('submit', function(e){
    e.preventDefault();
    var newText = $textInput.val();
    var button = $canButt;
    if ($theList.val() == false) {
      $theList.prepend('<li>' + newText + ' ' + button + '</li>');
    }
    else {
      $('li:last').after('<li>' + newText + ' ' + button + '</li>');

    }
    $newItemForm.hide();
    $newItemButton.show();
    $textInput.val('');
  });
});



/*$list = $('ul');

$('button.submit').click(function() {
  var text = "culocane";
  $list.append('<li>' + text + '</li>')
});

*/


/* $('li.newEl').html(function() {
  return '<li>' + text('culocane') + '</li>';
}); */
