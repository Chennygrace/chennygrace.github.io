$(document).ready(function() {
    $('.subscribe').submit(function(event) {
        $('.confirmation').hide();
        var formData= $(this).serialize();
        console.log(formData);
        
        $.ajax({
            type: 'POST',
            url: 'https://web2-product-page.herokuapp.com/subscribers',
            data: formData,
            dataType: 'json'
        }).done(function(data) {
            console.log(data);
            $('.subscribe')[0].reset();
            $('.confirmation').fadeIn();
            
            $('#email').val('');
            $('#email2').val('');
            
            
            }).fail(function(data) {
           
            var errorMessage = JSON.parse(data.responseText).email[0];
            console.log(errorMessage);
            
            alert(errorMessage);
            $('#email').val('');
            $('#email2').val('');

            });

            
        event.preventDefault();
    });
});
