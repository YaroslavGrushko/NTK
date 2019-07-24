// sidebar
$('.serviceButton').click(function(){
    $('html, body').animate({
        scrollTop: $("#service").offset().top
    }, 2000);

    $('.serviceButton').addClass('w3-text-teal');
    $('.aboutButton').removeClass('w3-text-teal');
    $('.contactButton').removeClass('w3-text-teal');
    $('.portfolioButton').removeClass('w3-text-teal');
})

$('.portfolioButton').click(function(){
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 2000);

    $('.aboutButton').removeClass('w3-text-teal');
    $('.contactButton').removeClass('w3-text-teal');
    $('.serviceButton').removeClass('w3-text-teal');
    $('.portfolioButton').addClass('w3-text-teal');
})

$('.aboutButton').click(function(){
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);

    $('.aboutButton').addClass('w3-text-teal');
    $('.contactButton').removeClass('w3-text-teal');
    $('.portfolioButton').removeClass('w3-text-teal');
    $('.serviceButton').removeClass('w3-text-teal');

})

$('.contactButton').click(function(){
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2000);

    $('.aboutButton').removeClass('w3-text-teal');
    $('.contactButton').addClass('w3-text-teal');
    $('.portfolioButton').removeClass('w3-text-teal');
    $('.serviceButton').removeClass('w3-text-teal');
})
