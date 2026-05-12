const loyaltyProgramSelector = ".loyaltyProgram__inner";
const loyaltyBottomSelector = ".loyaltyProgram__bottom";
const loyaltyImageSelector = ".loyaltyProgram__image";

const swiperNextSelector = ".swipe-next";
const swiperPrevSelector = ".swipe-prev";
const swiperPaginationSelector = ".swiper-pagination";

const loyaltyMobileBreakpoint = 768;

document.querySelectorAll(loyaltyProgramSelector).forEach((sliderElement) => {
  const bottomElement = sliderElement.querySelector(loyaltyBottomSelector);
  const nextButtonElement = sliderElement.querySelector(swiperNextSelector);
  const prevButtonElement = sliderElement.querySelector(swiperPrevSelector);
  const paginationElement = sliderElement.querySelector(
    swiperPaginationSelector
  );

  if (
    !bottomElement ||
    !nextButtonElement ||
    !prevButtonElement ||
    !paginationElement
  ) {
    return;
  }

  const originalParentElement = bottomElement.parentElement;
  const originalNextElement = bottomElement.nextElementSibling;

  const isMobileViewport = () => window.innerWidth < loyaltyMobileBreakpoint;

  const moveBottomElement = (swiperInstance) => {
    const activeSlideElement =
      swiperInstance.slides[swiperInstance.activeIndex];

    const activeImageElement =
      activeSlideElement?.querySelector(loyaltyImageSelector);

    if (isMobileViewport() && activeImageElement) {
      activeImageElement.before(bottomElement);
    } else {
      originalParentElement.insertBefore(bottomElement, originalNextElement);
    }

    swiperInstance.navigation.destroy();
    swiperInstance.navigation.init();
    swiperInstance.navigation.update();

    swiperInstance.pagination.destroy();
    swiperInstance.pagination.init();
    swiperInstance.pagination.render();
    swiperInstance.pagination.update();
  };

  const swiperInstance = new Swiper(sliderElement, {
    slidesPerView: 1,
    speed: 1000,

    effect: "fade",

    fadeEffect: {
      crossFade: true,
    },

    loop: false,

    navigation: {
      nextEl: nextButtonElement,
      prevEl: prevButtonElement,
    },

    pagination: {
      el: paginationElement,
      clickable: true,
    },

    on: {
      init(swiper) {
        moveBottomElement(swiper);
      },

      slideChange(swiper) {
        moveBottomElement(swiper);
      },

      resize(swiper) {
        moveBottomElement(swiper);
      },
    },
  });

  window.addEventListener("resize", () => {
    moveBottomElement(swiperInstance);
  });
});
