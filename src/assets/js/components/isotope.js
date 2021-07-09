const elem = document.querySelector(".portfolio__grid");
const filters = document.querySelector("#portfolio-filters");

const iso = new Isotope(elem, {
  itemSelector: ".portfolio__element",
  layoutMode: "fitRows",
});

filters.addEventListener("click", function (e) {
  let target = e.target;

  if (target && target.tagName === "BUTTON") {
    let filterValue = target.dataset.filter;

    filters.querySelector(".is-checked").classList.remove("is-checked");
    target.classList.add("is-checked");

    iso.arrange({ filter: filterValue });
  }
});
