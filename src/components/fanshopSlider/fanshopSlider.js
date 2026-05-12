document.querySelectorAll(".fanshopSlider__inner").forEach((slider) => {
  new Swiper(slider, {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: false,
    rewind: false,
   speed: 1000,

    navigation: {
      nextEl: slider.querySelector(".swipe-next"),
      prevEl: slider.querySelector(".swipe-prev"),
    },
  });
});
