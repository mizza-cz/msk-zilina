document.querySelectorAll(".postsSlider").forEach((slider) => {
  new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    navigation: {
      nextEl: slider.querySelector(".swipe-next"),
      prevEl: slider.querySelector(".swipe-prev"),
    },
    pagination: {
      el: slider.querySelector(".swiper-pagination"),
      clickable: true,
    },

    breakpoints: {
      540: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1240: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  });
});
