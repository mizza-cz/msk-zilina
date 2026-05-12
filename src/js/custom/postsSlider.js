document.querySelectorAll(".postsSlider").forEach((slider) => {
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
      540: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1240: {
        slidesPerView: 4,
      },
    },
  });
});
