$(document).ready(function(){
   var password = "Olset"
   $('form').on('submit', function(event){
    event.preventDefault();
    });
    $('#button').on('click', function(e){
      e.preventDefault()
       var selected_word = $('#letter_input').val();
         if(selected_word.length >= 0){
            if(selected_word == password){
                $('#response').html("Correct Password");
                $('#response').css({'color' : 'green'});
                $('#overlay').css({'background' : '#FFF'});
                $('p').toggle();
                }
                else if(selected_word.length === 0){
                $('#response').html("Please enter a Password");
                $('#response').css({'color' : 'yellow'});
                $('#overlay').css({'background' : '#000'});
                }
                else{ 
                $('#response').html("Incorrect Password");
                $('#response').css({'color' : 'red'});
                $('#overlay').css({'background' : '#000'});  
            }
        };
    });
});