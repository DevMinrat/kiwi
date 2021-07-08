// elements
const dots = document.querySelectorAll(".calc-dot");
const btnsContinue = document.querySelectorAll(".btn-continue");
const btnSubmit = document.querySelector("#btn-submit");
const customRadio = document.querySelectorAll(".custom-radio");
const tooltip = document.querySelector(".tooltipe-unchecked");

let slideIndex = 1;
showSlides(slideIndex);

dots.forEach((dot, index) => {
  dot.addEventListener("click", currentSlide.bind(this, index + 1));
});

btnsContinue.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!findCheckedRadio()) {
      showTooltipUnchecked();
      return;
    }
    showSlides((slideIndex += 1));
  });
});

//slide functional

function currentSlide(n) {
  if (findCheckedRadio()) {
    showSlides((slideIndex = n));
    return;
  }
  showTooltipUnchecked();
}

function showSlides(n) {
  const slides = document.querySelectorAll(".calc-form__slide");

  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active-slide");
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "flex";
  slides[slideIndex - 1].classList.add("active-slide");
  dots[slideIndex - 1].classList.add("active");

  if (n == 4) {
    setPrice();
  }
}

function findCheckedRadio() {
  const activeSlide = document.querySelector(".active-slide");
  const radioBtns = activeSlide.querySelectorAll("input[type='radio']");

  if (activeSlide.id == "step4") return true;

  for (let i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked) {
      return true;
    }
  }
  return false;
}

// tooltip

function showTooltipUnchecked() {
  tooltip.style.display = "block";
  tooltip.classList.add("tilda");
  tooltip.textContent = "Выберите вариант";

  setTimeout(remove, 1500);
}

function remove() {
  tooltip.style.display = "none";
}

// price calculation от $

function setPrice() {
  const calcPrice = document.querySelector(".calc__price");

  const checkedFlat = document.querySelector(
    ".custom-radio[name='flat']:checked"
  );
  const checkedService = document.querySelector(
    ".custom-radio[name='service']:checked"
  );

  let minPriceCount = Math.round(
    checkedFlat.dataset.min * checkedService.dataset.coeff
  );
  let maxPriceCount = Math.round(
    checkedFlat.dataset.max * checkedService.dataset.coeff
  );

  if (!isNaN(maxPriceCount)) {
    calcPrice.textContent = `от ${minPriceCount} $ до ${maxPriceCount} $`;
  } else {
    calcPrice.textContent = `от ${minPriceCount} $`;
  }
}
