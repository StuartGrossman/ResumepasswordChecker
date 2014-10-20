$(document).ready(function(){
   var password = "Grossman"
   $('form').on('submit', function(event){
        event.preventDefault();
    });
    $('#resume').hide();
        
        $('#button').on('click', function(){
            var selected_word = $('#letter_input').val();
            if(selected_word == password){
                 // console.log(selected_word.length)
                 $('#message').html("Correct Password");
                 $('#message').css({'color' : 'green'});
                 $('#overlay').css({'opacity' : '0.7', 'background' : '#FFF'});
                 $('#boxShape').hide();
                 $('#resume').fadeIn(1600);
            };
        });
        $('#button').on('click', function(){
            var selected_word = $('#letter_input').val();
            if(selected_word.length === 0){
                // console.log(selected_word.length)
                $('#resume').fadeOut(1600);
                $('#message').html("Please enter a Password");
                $('#message').css({'color' : 'black'});
                $('#overlay').css({'opacity' : '1.0', 'background' : '#000'});
                $('#boxShape').show();
            };
        });
        $('#button').on('click', function(){
            var selected_word = $('#letter_input').val();
            if(selected_word != password && selected_word.length >= 1){
                // console.log(selected_word.length)
                $('#resume').fadeOut(1600);
                $('#message').html("Incorrect Password");
                $('#message').css({'color' : 'red'});
                $('#overlay').css({'opacity' : '1.0', 'background' : '#000'});
                $('#boxShape').show();
            };
        });
});
