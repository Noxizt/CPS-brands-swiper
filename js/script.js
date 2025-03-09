// Инициализация слайдера(SwiperJS)
new Swiper('.swiper', {
    // Навигация
    // Буллеты, текущее положение, прогрессбар
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // клибельность
        
    },
    // Авто-высота
  
    // slidesPerView: 2,
    loop: true,
    slidesPerView:'auto',
    spaceBetween: 16,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});