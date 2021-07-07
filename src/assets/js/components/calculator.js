// elements
const dots = document.querySelectorAll(".calc-dot");
const btnsContinue = document.querySelectorAll(".btn-continue");
const btnSubmit = document.querySelector("#btn-submit");
const customRadio = document.querySelectorAll(".custom-radio");

let slideIndex = 1;
showSlides(slideIndex);

dots.forEach((dot, index) => {
  dot.addEventListener("click", currentSlide.bind(this, index + 1));
});

btnsContinue.forEach((btn) => {
  btn.addEventListener("click", function plusSlides() {
    const currentSlide = btn.parentElement;
    const radioBtns = currentSlide.querySelectorAll("input[type='radio']");

    for (let i = 0; i < radioBtns.length; i++) {
      if (radioBtns[i].checked) {
        showSlides((slideIndex += 1));
        return;
      }
    }

    console.log(1);
  });
});

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.querySelectorAll(".calc-form__slide");

  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active-slide");
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].classList.add("active-slide");
}
