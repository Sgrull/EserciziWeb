$(function() {

  var $newItemButton = $('#newItemButton');
  var $newItemForm = $('#newItemForm');
  var $textInput = $('input:text');
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
    var canc = $('<input type="image" class="cancButton" name="canc" src="images/icons/bin.png"/>');
    var mod = $('<input type="image" class="modButton" name="mod" src="images/icons/wrench.png"/>');
    $theList.append('<li>').append(newText).append(canc).append(mod).append('</li>');
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
