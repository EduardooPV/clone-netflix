// Arquivo para iniciar o Carrosel do JQuery

$('.owl-carousel').owlCarousel({
    loop:true, // Looping, faz o carrosel voltar para 1º quando chega no final
    margin:15, 
    nav:false, // Barra de navegação embaixo dos icones
    responsive:{  // Responsividade
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        },
        1200:{
            items:6
        },
    }
})