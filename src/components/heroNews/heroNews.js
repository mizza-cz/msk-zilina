document.querySelectorAll(".heroNews").forEach((heroNewsSection) => {
  const heroNewsSlider = heroNewsSection.querySelector(".heroNews-slider");
  const heroNewsPagination =
    heroNewsSection.querySelector(".swiper-pagination");

  if (!heroNewsSlider || !heroNewsPagination) return;

  new Swiper(heroNewsSlider, {
    slidesPerView: 1.25,
    spaceBetween: 12,
    loop: true,
    watchOverflow: true,
    speed: 1000,

    pagination: {
      el: heroNewsPagination,
      clickable: true,
    },

    breakpoints: {
      460: {
        slidesPerView: 2.25,
        spaceBetween: 16,
      },

      640: {
        slidesPerView: 3.25,
        spaceBetween: 20,
      },

      1100: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
