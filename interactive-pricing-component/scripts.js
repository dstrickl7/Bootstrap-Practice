let views = document.getElementById("views");
let pageViews = document.getElementById("page-views");
let price = document.getElementById("price");

// Display page views
pageViews.innerText = views.value + "k";

views.addEventListener("change", () => {
  console.log(views.value);
  setViews();
  setPrice();
});

const setViews = () => {
  if (views.value !== pageViews.innerText) {
    pageViews.innerText = views.value + "k";
  }
  if (views.value == 1000) {
    pageViews.innerText = 1 + "M";
  }
};

//Update pricing based on views
const setPrice = () => {
  if (views.value <= 10) {
    price.innerText = "$8";
  } else if (views.value >= 50 && views.value < 100) {
    price.innerText = "$12";
  } else if (views.value >= 100 && views.value < 500) {
    price.innerText = "$16";
  } else if (views.value >= 500 && views.value < 1000) {
    price.innerText = "$24";
  } else if (views.value == 1000) {
    price.innerText = "$36";
  }
};
