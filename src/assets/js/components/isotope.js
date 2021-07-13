//= ../../../node_modules/isotope-layout/dist/isotope.pkgd.js
//= ../../../node_modules/imagesloaded/imagesloaded.pkgd.js

const elem = document.querySelector(".portfolio__grid");
const filters = document.querySelector("#portfolio-filters");
let iso;

imagesLoaded(elem, function () {
  iso = new Isotope(elem, {
    itemSelector: ".portfolio__element",
    layoutMode: "masonry",
    masonry: {
      isFitWidth: true,
    },
  });

  hideItems(initial_items);
});

filters.addEventListener("click", function (e) {
  let target = e.target;

  if (target && target.tagName === "BUTTON") {
    let filterValue = target.dataset.filter;

    filters.querySelector(".is-checked").classList.remove("is-checked");
    target.classList.add("is-checked");

    iso.arrange({ filter: filterValue });
    updateFilterCounts();
  }
});

const initial_items = 8;
const next_items = 4;

const showMoreBtn = document.querySelector(".portfolio__btn");
const portfolioItems = document.querySelector(".portfolio__element");

showMoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  showNextItems(next_items);
});

function updateFilterCounts() {
  let isoItems = iso.getFilteredItemElements();
  let count_items = isoItems.length;

  if (count_items > initial_items) {
    showMoreBtn.style.display = "";
  } else {
    showMoreBtn.style.display = "none";
  }

  isoItems.forEach((item) => {
    if (item.classList.contains("hide")) {
      item.classList.remove("hide");
    }
  });

  let index = 0;

  isoItems.forEach(function (item) {
    if (index >= initial_items) {
      item.classList.add("hide");
    }
    index++;
  });

  iso.layout();
}

function showNextItems(pagination) {
  let visItems = document.querySelectorAll(".portfolio__element.hide");
  let itemsMax = visItems.length;
  let itemsCount = 0;

  visItems.forEach(function (item) {
    if (itemsCount < pagination) {
      item.classList.remove("hide");
      itemsCount++;
    }
  });

  if (itemsCount >= itemsMax) {
    showMoreBtn.style.display = "none";
  }

  iso.layout();
}

// function that hides items when page is loaded
function hideItems(pagination) {
  let allItems = document.querySelectorAll(".portfolio__element");
  let itemsMax = allItems.length;
  let itemsCount = 0;

  allItems.forEach(function (item) {
    if (itemsCount >= pagination) {
      item.classList.add("hide");
    }
    itemsCount++;
  });

  if (itemsCount < itemsMax || initial_items >= itemsMax) {
    showMoreBtn.style.display = "none";
  }

  iso.layout();
}
