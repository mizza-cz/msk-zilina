document.querySelectorAll(".postsSlider").forEach((slider) => {
  new Swiper(slider, {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: false,
    allowTouchMove: true,
    watchOverflow: true,

    navigation: {
      nextEl: slider.querySelector(".swipe-next"),
      prevEl: slider.querySelector(".swipe-prev"),
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
        allowTouchMove: true,
      },
      1240: {
        slidesPerView: 4,
        spaceBetween: 32,
        allowTouchMove: false,
      },
    },
  });
});
