"use strict";

var _this = void 0;

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