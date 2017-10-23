$( document ).ready( function() { 



 }) 



 $(window).scroll( function() {

    var wScroll = $(this).scrollTop();
    //console.log(wScroll);


    $('.contentScreen').css({
        'transform': 'translate(0px , -'+ wScroll / 22 +'% )'
    });

    $('.topContentBox').css({
        'transform': 'translate(0px , -'+ wScroll / 18 +'% )'
    });

    $('.mid-leftContentBox').css({
        'transform': 'translate(0px , -'+ wScroll / 20 +'% )'
    });

    $('.mid-bottomContentBox').css({
        'transform': 'translate(0px , -'+ wScroll / 8 +'% )'
    });  

    $('.bottom-rightContentBox').css({
        'transform': 'translate(0px , -'+ wScroll / 20 +'% )'
    });

    $('.bottom-bottomContentBox').css({
        'transform': 'translate(0px , -'+ wScroll / 8 +'% )'
    });


 });
