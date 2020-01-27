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

$('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
    alert("jj");
});