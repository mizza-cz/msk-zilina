document.querySelectorAll(".matchSliderWrap").forEach((wrapper) => {
  const slider = wrapper.querySelector(".matchSlider");

  if (!slider) return;

  const slides = slider.querySelectorAll(".swiper-slide");
  const currentSlide = slider.querySelector(".swiper-slide[data-current]");

  let initialSlide = 0;

  if (currentSlide) {
    initialSlide = Array.from(slides).indexOf(currentSlide);
  }

  new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    initialSlide,

    navigation: {
      nextEl: wrapper.querySelector(".swipe-next"),
      prevEl: wrapper.querySelector(".swipe-prev"),
    },
  });
});
