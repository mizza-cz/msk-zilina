document.querySelectorAll(".matchSlider").forEach((slider) => {
  new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,

    navigation: {
      nextEl: slider.querySelector(".swipe-next"),
      prevEl: slider.querySelector(".swipe-prev"),
    },
  });
});
