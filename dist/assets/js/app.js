"use strict";

var _this = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function () {
  // elements
  var dots = document.querySelectorAll(".calc-dot");
  var btnsContinue = document.querySelectorAll(".btn-continue");
  var btnSubmit = document.querySelector("#btn-submit");
  var customRadio = document.querySelectorAll(".custom-radio");
  var tooltip = document.querySelector(".tooltipe-unchecked");
  var slideIndex = 1;
  showSlides(slideIndex);
  dots.forEach(function (dot, index) {
    dot.addEventListener("click", currentSlide.bind(_this, index + 1));
  });
  btnsContinue.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!findCheckedRadio()) {
        showTooltipUnchecked();
        return;
      }

      showSlides(slideIndex += 1);
    });
  }); //slide functional

  function currentSlide(n) {
    if (findCheckedRadio()) {
      showSlides(slideIndex = n);
      return;
    }

    showTooltipUnchecked();
  }

  function showSlides(n) {
    var slides = document.querySelectorAll(".calc-form__slide");

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].classList.remove("active-slide");
    }

    for (var _i = 0; _i < dots.length; _i++) {
      dots[_i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "flex";
    slides[slideIndex - 1].classList.add("active-slide");
    dots[slideIndex - 1].classList.add("active");

    if (n == 4) {
      setPrice();
    }
  }

  function findCheckedRadio() {
    var activeSlide = document.querySelector(".active-slide");
    var radioBtns = activeSlide.querySelectorAll("input[type='radio']");
    if (activeSlide.id == "step4") return true;

    for (var i = 0; i < radioBtns.length; i++) {
      if (radioBtns[i].checked) {
        return true;
      }
    }

    return false;
  } // tooltip


  function showTooltipUnchecked() {
    tooltip.style.display = "block";
    tooltip.classList.add("tilda");
    tooltip.textContent = "Выберите вариант";
    setTimeout(remove, 1500);
  }

  function remove() {
    tooltip.style.display = "none";
  } // price calculation от $


  function setPrice() {
    var calcPrice = document.querySelector(".calc__price");
    var checkedFlat = document.querySelector(".custom-radio[name='flat']:checked");
    var checkedService = document.querySelector(".custom-radio[name='service']:checked");
    var minPriceCount = Math.round(checkedFlat.dataset.min * checkedService.dataset.coeff);
    var maxPriceCount = Math.round(checkedFlat.dataset.max * checkedService.dataset.coeff);

    if (!isNaN(maxPriceCount)) {
      calcPrice.textContent = "\u043E\u0442 ".concat(minPriceCount, " $ \u0434\u043E ").concat(maxPriceCount, " $");
    } else {
      calcPrice.textContent = "\u043E\u0442 ".concat(minPriceCount, " $");
    }
  }

  var header = document.querySelector(".header"),
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
  window.addEventListener("scroll", hideMobileMenu); // smooth scroll

  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        var blockID = anchor.getAttribute("href").substring(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    } // about load more

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var showMoreBtn = document.querySelector(".about__btn");
  var hidenAbout = document.querySelector(".about__hidden");
  showMoreBtn.addEventListener("click", function () {
    // hidenAbout.classList.toggle("show-text");
    if (hidenAbout.style.maxHeight && hidenAbout.style.marginBottom) {
      hidenAbout.style.maxHeight = null;
      hidenAbout.style.marginBottom = null;
      showMoreBtn.textContent = "Загрузить еще";
    } else {
      hidenAbout.style.maxHeight = hidenAbout.scrollHeight + "px";
      hidenAbout.style.marginBottom = "35px";
      showMoreBtn.textContent = "Скрыть";
    }
  });
});