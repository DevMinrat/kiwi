"use strict";

var swiperContainer = document.querySelector("#swiperContainer");
var swiperWrapper = document.querySelector(".components__inner");
var componentsSlides = document.querySelectorAll(".components-slide");

if (document.documentElement.clientWidth <= 745 && swiperContainer) {
  swiperContainer.classList.add("swiper-container");
  swiperWrapper.classList.add("swiper-wrapper");
  componentsSlides.forEach(function (slide) {
    slide.classList.add("swiper-slide");
  });
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
}