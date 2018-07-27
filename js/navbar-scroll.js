$(document).ready(function(){
    $(window).scroll(function() {
        if($(document).width() > 575) {
            updateBgTransition();
        } else {
            $("nav").removeClass("bg-transparent").addClass("bg-white");
        }
    });

    $(window).resize(function() {
        if( $(document).width() > 575) {
            updateBgTransition();
        } else {
            $("nav").removeClass("bg-transparent").addClass("bg-white");
        }
    });

    $(document).scrollTop($(document).scrollTop()+1 );
});

function updateBgTransition() {
    if ($(document).scrollTop() > 50) { 
        $("nav").removeClass("bg-transparent").addClass("bg-white"); 
    } else {
        $("nav").removeClass("bg-white").addClass("bg-transparent");
    }
}