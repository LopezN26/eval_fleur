new Glide('.glide',{
    type: 'slider',
    startAt: 0,
    perView: 3
}).mount(); //création du glider

AOS.init(); //pour faire marcher AOS

var rellax = new Rellax('.rellax', {
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});// pour faire marcher la parallax, cible la classe rellax ici


//p.scrollTop()    $( window ).scrollTop()

// GESTION DU SCROLL

//récupération du header pour modifier sa classe ensuite
var header = $("#header");
//récupération de toutes les positions des sections

var accueil = $("#accueil")[0].offsetTop;
var aboutUs = $("#aboutUs")[0].offsetTop;
var slogan = $("#slogan")[0].offsetTop;
var team = $("#team")[0].offsetTop;
var slider =$("#slider")[0].offsetTop;
var quams =$("#quams")[0].offsetTop;
var contact =$("#contact")[0].offsetTop;

//conditions pour affichage du Background ou non dnas le header
$( window ).scroll(function() {
    if ($(window).scrollTop() < aboutUs) {
        header.removeClass("backgroundWhite");
        header.removeClass("backgroundBlue");
    }
    else if ($(window).scrollTop() > aboutUs && $(window).scrollTop() < slogan)
    {
        header.removeClass("backgroundWhite");
        header.addClass("backgroundBlue");
    }
    else if ($(window).scrollTop() > slogan && $(window).scrollTop() < team)
    {
        header.addClass("backgroundWhite");
        header.removeClass("backgroundBlue");
    }
    else if ($(window).scrollTop() > team && $(window).scrollTop() < slider)
    {
        header.removeClass("backgroundWhite");
        header.addClass("backgroundBlue");
    }
    else if ($(window).scrollTop() > slider && $(window).scrollTop() < quams)
    {
        header.addClass("backgroundWhite");
        header.removeClass("backgroundBlue");
    }
    else if ($(window).scrollTop() > quams)
    {
        header.removeClass("backgroundWhite");
        header.addClass("backgroundBlue");
    }
});
