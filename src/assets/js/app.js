//= ../../../node_modules/swiper/swiper-bundle.js

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header"),
    burgerMenu = document.querySelector(".burger-menu"),
    menu = document.querySelector(".menu"),
    headerLogo = document.querySelector(".header__logo"),
    anchors = document.querySelectorAll('a[href*="#"]');

  // show header

  let scrollPrev = 0;

  window.addEventListener("scroll", () => {
    let scrolled = document.documentElement.scrollTop;

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
  window.addEventListener("scroll", hideMobileMenu);

  // smooth scroll

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

  const moreBtnAbout = document.querySelector(".about__btn");
  const hidenAbout = document.querySelector(".about__hidden");

  if (moreBtnAbout && hidenAbout) {
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
  }

  //= components/components-slider.js

  // repair load more

  const repairItems = document.querySelectorAll(".repair__item");
  const moreBtnRepair = document.querySelector(".repair__btn");
  let initialRepairItems;
  let showPerClick;

  if (document.documentElement.clientWidth <= 1135) {
    initialRepairItems = 2;
    showPerClick = 2;
  } else {
    initialRepairItems = 3;
    showPerClick = 3;
  }

  if (moreBtnRepair) {
    showRepairItems(initialRepairItems);
    moreBtnRepair.addEventListener("click", showMoreRepairItems);
  }

  function showRepairItems(initialNum) {
    let count_items = repairItems.length;

    if (count_items > initialNum) {
      moreBtnRepair.style.display = "";
    } else {
      moreBtnRepair.style.display = "none";
    }

    let index = 0;

    repairItems.forEach((item) => {
      if (index >= initialNum) {
        item.classList.add("hide");
      }
      index++;
    });
  }

  function showMoreRepairItems() {
    let visItems = document.querySelectorAll(".repair__item.hide");
    let itemsMax = visItems.length;
    let itemsCount = 0;

    visItems.forEach((item) => {
      if (itemsCount < showPerClick) {
        item.classList.remove("hide");
        itemsCount++;
      }
    });

    if (itemsCount >= itemsMax) {
      moreBtnRepair.style.display = "none";
    }
  }
});

//= components/mail.js

// form-modal

const modalForm = document.querySelector(".modal-form"),
  modalCloselBtn = document.querySelector("[data-close]");

if (modalForm) {
  modalForm.addEventListener("click", (e) => {
    if (e.target === modalForm) {
      closeModalForm();
    }
  });
  modalCloselBtn.addEventListener("click", closeModalForm);
}

function openModalForm() {
  modalForm.classList.add("show");
  modalForm.classList.remove("hide");
  document.body.style.overflow = "hidden";
}

function closeModalForm() {
  modalForm.classList.add("hide");
  modalForm.classList.remove("show");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && modalForm.classList.contains("show")) {
    closeModalForm();
  }
});
