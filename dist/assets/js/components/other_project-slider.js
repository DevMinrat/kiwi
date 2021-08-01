"use strict";

if (document.querySelector(".other-project__slider")) {
  var swiperOtherProjects = new Swiper(".other-project__slider", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
      470: {
        slidesPerView: 2
      },
      769: {
        slidesPerView: 3
      },
      1025: {
        slidesPerView: 4
      }
    }
  });
}