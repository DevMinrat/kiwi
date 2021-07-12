//= ../../../node_modules/isotope-layout/dist/isotope.pkgd.js
//= ../../../node_modules/imagesloaded/imagesloaded.pkgd.js

document.addEventListener("DOMContentLoaded", () => {
  //= components/isotope.js
  //= components/calculator.js

  const header = document.querySelector(".header"),
    burgerMenu = document.querySelector(".burger-menu"),
    menu = document.querySelector(".menu"),
    headerLogo = document.querySelector(".header__logo"),
    anchors = document.querySelectorAll('a[href*="#"]');

  function toggleMobileMenu() {
    header.classList.toggle("mobile");
    headerLogo.classList.toggle("hide");
    menu.classList.toggle("show");
    burgerMenu.classList.toggle("menu-on");
  }

  function hideMobileMenu() {
    header.classList.remove("mobile");
    headerLogo.classList.remove("hide");
    menu.classList.remove("show");
    burgerMenu.classList.remove("menu-on");
  }

  burgerMenu.addEventListener("click", toggleMobileMenu);
  window.addEventListener("scroll", hideMobileMenu);

  // smooth scroll

  for (let anchor of anchors) {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substring(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  // about load more

  const moreBtnAbout = document.querySelector(".about__btn");
  const hidenAbout = document.querySelector(".about__hidden");

  moreBtnAbout.addEventListener("click", () => {
    if (hidenAbout.style.maxHeight && hidenAbout.style.marginBottom) {
      hidenAbout.style.maxHeight = null;
      hidenAbout.style.marginBottom = null;

      moreBtnAbout.textContent = "Загрузить еще";
    } else {
      hidenAbout.style.maxHeight = hidenAbout.scrollHeight + "px";
      hidenAbout.style.marginBottom = "35px";

      moreBtnAbout.textContent = "Скрыть";
    }
  });

  // repair load more

  const moreBtnRepair = document.querySelector(".repair__btn");

  moreBtnRepair.addEventListener("click", function () {
    let showPerClick = 3;
    let hidden = document.querySelectorAll(".repair__item.hide");

    for (let i = 0; i < showPerClick; i++) {
      if (!hidden[i]) return (this.outerHTML = "");

      hidden[i].classList.remove("hide");
    }
  });
});
