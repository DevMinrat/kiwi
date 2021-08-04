const swiperContainer = document.querySelector("#swiperContainer");
const swiperWrapper = document.querySelector(".components__inner");
const componentsSlides = document.querySelectorAll(".components-slide");
const swiperCompPagination = document.querySelector(".swiper-pagination");
let swiperComponents;

window.addEventListener("resize", setSwiperComponents);

function setSwiperComponents() {
  if (document.documentElement.clientWidth <= 745 && swiperContainer) {
    swiperContainer.classList.add("swiper-container");
    swiperWrapper.classList.add("swiper-wrapper");
    swiperCompPagination.style.display = "";

    componentsSlides.forEach((slide) => {
      slide.classList.add("swiper-slide");
    });

    swiperComponents = new Swiper(".swiper-container", {
      slidesPerView: 1,

      centeredSlides: true,
      loop: false,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else if (swiperContainer && document.documentElement.clientWidth > 745) {
    if (swiperComponents) {
      swiperComponents.destroy();
    }

    swiperContainer.classList.remove("swiper-container");
    swiperWrapper.classList.remove("swiper-wrapper");

    swiperCompPagination.style.display = "none";

    componentsSlides.forEach((slide) => {
      slide.classList.remove("swiper-slide");
    });
  }
}

setSwiperComponents();
