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

const showMore = document.querySelector(".portfolio__btn");
const elementItem = document.querySelector(".portfolio__element");

function updateFilterCounts() {
  let itemElems = iso.getFilteredItemElements();
  let count_items = itemElems.length;

  if (count_items > initial_items) {
    showMore.style.display = "";
  } else {
    showMore.style.display = "none";
  }

  itemElems.forEach((item) => {
    if (item.classList.contains("visible_item")) {
      item.classList.remove("visible_item");
    }
  });

  let index = 0;

  itemElems.forEach(function (item) {
    if (index >= initial_items) {
      item.classList.add("visible_item");
    }
    index++;
  });

  iso.layout();
}

function showNextItems(pagination) {
  let visItems = document.querySelectorAll(".visible_item");
  let itemsMax = visItems.length;
  let itemsCount = 0;

  visItems.forEach(function (item) {
    if (itemsCount < pagination) {
      item.classList.remove("visible_item");
      itemsCount++;
    }
  });

  if (itemsCount >= itemsMax) {
    showMore.style.display = "none";
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
      item.classList.add("visible_item");
    }
    itemsCount++;
  });

  if (itemsCount < itemsMax || initial_items >= itemsMax) {
    showMore.style.display = "none";
  }

  iso.layout();
}

showMore.addEventListener("click", function (e) {
  e.preventDefault();
  showNextItems(next_items);
});

hideItems(initial_items);
