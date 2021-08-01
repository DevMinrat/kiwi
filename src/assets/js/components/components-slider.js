const swiperContainer = document.querySelector("#swiperContainer");
const swiperWrapper = document.querySelector(".components__inner");
const componentsSlides = document.querySelectorAll(".components-slide");

if (document.documentElement.clientWidth <= 745 && swiperContainer) {
  swiperContainer.classList.add("swiper-container");
  swiperWrapper.classList.add("swiper-wrapper");

  componentsSlides.forEach((slide) => {
    slide.classList.add("swiper-slide");
  });

  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,

    centeredSlides: true,
    loop: false,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
