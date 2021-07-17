
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var number = $('.validate-input input[name="number"]');
    var trxid = $('.validate-input input[name="trxid"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(number).val().trim() == ''){
            showValidate(number);
            check=false;
        }

        if($(trxid).val().trim() == ''){
            showValidate(trxid);
            check=false;
        }
        
        return check;
    });


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);