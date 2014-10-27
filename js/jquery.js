$(document).ready(function(){
   var password = "pass"
   $('form').on('submit', function(event){
        event.preventDefault();
    });
   $('#resume').hide();
   var result;

   var check_event = function(input, word){
        if(word === input){
            result = 0;
        }
        else if(input.length === 0){
            result = 2;
        }
        else{
            result = 1;
        };
   };
   
        $('button').on('click', function(){
            var selected_word = $('#letter_input').val();
              check_event(selected_word, password)
              switch(result){
                case 0:
                    $('#message').html("Correct Password");
                    $('#message').css({'color' : 'green'});
                    $('#overlay').css({'opacity' : '0.7', 'background' : '#FFF'});
                    $('#boxShape').hide();
                    $('#resume').fadeIn(1600);
                    break
                case 1:
                    $('#resume').fadeOut(1600);
                    $('#message').html("Incorrect Password");
                    $('#message').css({'color' : 'red'});
                    $('#overlay').css({'opacity' : '1.0', 'background' : '#000'});
                    $('#boxShape').show();
                    break
                case 2:
                    $('#resume').fadeOut(1600);
                    $('#message').html("Please enter a Password");
                    $('#message').css({'color' : 'black'});
                    $('#overlay').css({'opacity' : '1.0', 'background' : '#000'});
                    $('#boxShape').show();
                    break
              };
        });
});
