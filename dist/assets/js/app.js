"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header"),
      burgerMenu = document.querySelector(".burger-menu"),
      menu = document.querySelector(".menu"),
      headerLogo = document.querySelector(".header__logo"),
      anchors = document.querySelectorAll('a[href*="#"]'); // show header

  var scrollPrev = 0;
  window.addEventListener("scroll", function () {
    var scrolled = document.documentElement.scrollTop;

    if (scrolled > scrollPrev) {
      header.classList.add("out");
    } else {
      header.classList.remove("out");
    }

    if (scrolled == 0) {
      header.classList.add("top");
    } else {
      header.classList.remove("top");
    }

    scrollPrev = scrolled;
  });

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
  window.addEventListener("scroll", hideMobileMenu); // smooth scroll
  // for (let anchor of anchors) {
  //   anchor.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     const blockID = anchor.getAttribute("href").substring(1);
  //     document.getElementById(blockID).scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   });
  // }
  // about load more

  var moreBtnAbout = document.querySelector(".about__btn");
  var hidenAbout = document.querySelector(".about__hidden");

  if (moreBtnAbout && hidenAbout) {
    moreBtnAbout.addEventListener("click", function () {
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
  } // repair load more


  var moreBtnRepair = document.querySelector(".repair__btn");

  if (moreBtnRepair) {
    moreBtnRepair.addEventListener("click", function () {
      var showPerClick = 3;
      var hidden = document.querySelectorAll(".repair__item.hide");

      for (var i = 0; i < showPerClick; i++) {
        if (!hidden[i]) return this.outerHTML = "";
        hidden[i].classList.remove("hide");
      }
    });
  }
});