"use strict";

var swiperContainer = document.querySelector("#swiperContainer");
var swiperWrapper = document.querySelector(".components__inner");
var componentsSlides = document.querySelectorAll(".components-slide");
var swiperCompPagination = document.querySelector(".swiper-pagination");
var swiperCOmponents;
window.addEventListener("resize", setSwiperComponents);

function setSwiperComponents() {
  if (document.documentElement.clientWidth <= 745 && swiperContainer) {
    swiperContainer.classList.add("swiper-container");
    swiperWrapper.classList.add("swiper-wrapper");
    swiperCompPagination.style.display = "";
    componentsSlides.forEach(function (slide) {
      slide.classList.add("swiper-slide");
    });
    swiperCOmponents = new Swiper(".swiper-container", {
      slidesPerView: 1,
      centeredSlides: true,
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  } else if (swiperContainer && document.documentElement.clientWidth > 745) {
    swiperCOmponents.destroy();
    swiperContainer.classList.remove("swiper-container");
    swiperWrapper.classList.remove("swiper-wrapper");
    swiperCompPagination.style.display = "none";
    componentsSlides.forEach(function (slide) {
      slide.classList.remove("swiper-slide");
    });
  }
}

setSwiperComponents();