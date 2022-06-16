//JavaScript
form.onchange = function(){
    var button = document.body.getElementsByClassName('btn')[0];
    if(button.disabled) button.disabled = false;
    else button.disabled = true;  
  }
  
  //Jquery
  $('#form').on('change', function(){
    if($(this).is(':checked')) $('.btn').attr('disabled', false);
    else $('.btn').attr('disabled', true);
  });

