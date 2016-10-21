$(document).ready(function() {
    $('#langhai').click(function() {
        TweenMax.to('#content',0.3, {
            width:  "95%",
            backgroundColor: "red",
            onComplete : loaddata
        });
    });
})


function loaddata() {
    $.ajax({
        method : "POST",
        url : './api/langhai/getdata',
        data : {
            
        }
    })
    .done(function(result) {
        $(result).appendTo('#content')
    })
}