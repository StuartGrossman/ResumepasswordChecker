$(document).ready(function(){
   var password = "Olset"
   $('form').on('submit', function(event){
    event.preventDefault();
    });
    var hold_image = "css/black.jpg"
    console.log(hold_image)
    $('#resume').hide();
    var twitpar = $('#overlay_image');
    $('#button').on('click', function(e){
       var selected_word = $('#letter_input').val(); // user entered password
         if(selected_word.length >= 0){
            if(selected_word == password){
                $('#response').html("Correct Password");
                $('#response').css({'color' : 'green'});
                $('#overlay').css({'opacity' : '0.5'});
                $('#overlay').css({'background' : '#FFF'}); // takes out overlay
                // $('p').toggle(); // makes resume viewable 
                // var hold_image = $('#overlay_image').detach();
                // $('#overlay_image').remove();
                // console.log(hold_image)
                $('#boxShape').hide();
                $('#resume').show();
                }
                else if(selected_word.length === 0){
                $('#response').html("Please enter a Password");
                $('#response').css({'color' : 'yellow'});
                $('#overlay').css({'opacity' : '1.0'});
                $('#overlay').css({'background' : '#000'});
                $('#resume').hide();
                $('#boxShape').show();
                // $('#overlay_image').append(hold_image);
                // $('div.overlay').each(function() {
                //     $(this).find('img').each(function() {
                //         $(this).attr('src', hold_image);
                //         });
                //     });
                // $('#overlay').css({'background' : '#000'}); // takes out overlay
                // $('p').css({'display' : 'block'})
                // $('#resume').hide();
                }
                else{ 
                $('#response').html("Incorrect Password");
                $('#response').css({'color' : 'red'});
                $('#overlay').css({'opacity' : '1.0'});
                $('#overlay').css({'background' : '#000'});
                $('#resume').hide();
                $('#boxShape').show();
                // $('#overlay_image').append(hold_image);
                // $('#overlay').css({'background' : '#000'}); // takes out overlay
                // $('p').css({'display' : 'block'}) 
                // $('#resume').hide();
            }
        };
    });
});