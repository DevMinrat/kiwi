"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
var formContacts = document.querySelector(".contacts__form");
var formCalc = document.querySelector(".calc-form");
formContacts.addEventListener("submit", formSend);
formCalc.addEventListener("submit", formSend);

function formSend(_x) {
  return _formSend.apply(this, arguments);
} // form-modal


function _formSend() {
  _formSend = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
    var formData, response, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            formData = new FormData(this);
            _context.next = 4;
            return fetch("sendmail.php", {
              method: "POST",
              body: formData
            });

          case 4:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 13;
              break;
            }

            _context.next = 8;
            return response.json();

          case 8:
            result = _context.sent;
            this.reset();
            openModalForm();
            _context.next = 14;
            break;

          case 13:
            alert("Ошибка");

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _formSend.apply(this, arguments);
}

var modalForm = document.querySelector(".modal-form"),
    modalCloselBtn = document.querySelector("[data-close]");

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

modalCloselBtn.addEventListener("click", closeModalForm);
modalForm.addEventListener("click", function (e) {
  if (e.target === modalForm) {
    closeModalForm();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.code === "Escape" && modalForm.classList.contains("show")) {
    closeModalForm();
  }
});