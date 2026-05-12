document.querySelectorAll(".socialFeedSlider").forEach((slider) => {
  new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: slider.querySelector(".swipe-next"),
      prevEl: slider.querySelector(".swipe-prev"),
    },
    pagination: {
      el: slider.querySelector(".swiper-pagination"),
      clickable: true,
    },

    breakpoints: {
      460: {
        slidesPerView: 2,
      },

      721: {
        slidesPerView: 3,
      },

      1100: {
        slidesPerView: 4,
      },
    },
  });
});
