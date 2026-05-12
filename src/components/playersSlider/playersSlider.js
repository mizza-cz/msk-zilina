const playerSliders = [];

document.querySelectorAll(".playersSlider").forEach((section) => {
  section.querySelectorAll(".playersSlider-inner").forEach((swiperEl) => {
    const swiper = new Swiper(swiperEl, {
      spaceBetween: 20,
      slidesPerView: 4,
      slidesPerGroup: 1,
      loop: true,
      observer: true,
      observeParents: true,
      speed: 1000,
      navigation: {
        nextEl: section.querySelector(".swipe-next"),
        prevEl: section.querySelector(".swipe-prev"),
      },

      pagination: {
        el: swiperEl.querySelector(".swiper-pagination"),
        clickable: true,
      },

      breakpoints: {
        0: {
          slidesPerView: 1.2,
        },
        576: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });

    playerSliders.push(swiper);
  });
});

document.querySelectorAll('[data-bs-toggle="tab"]').forEach((tab) => {
  tab.addEventListener("shown.bs.tab", (event) => {
    const targetSelector = event.target.getAttribute("data-bs-target");
    const targetPane = document.querySelector(targetSelector);

    if (!targetPane) return;

    const swiperEl = targetPane.querySelector(".playersSlider-inner");

    if (swiperEl && swiperEl.swiper) {
      swiperEl.swiper.update();
      swiperEl.swiper.slideToLoop(0, 0);
    }
  });
});
