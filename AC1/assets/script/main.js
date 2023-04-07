/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortifolio = new Swiper('.slides', {
    cssMode:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEi: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
