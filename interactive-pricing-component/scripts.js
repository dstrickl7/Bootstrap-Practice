let views = document.getElementById("views");
let pageViews = document.getElementById("page-views");
let price = document.getElementById("price");
let isChecked = document.getElementById("flexSwitchCheckDefault");
let x = 1; //Used to calculate pricing discount
let discount = document.getElementById("showDiscount");

// Display page views
const values = [10, 50, 100, 500, 1];

pageViews.innerText = values[views.value] + "K";
price.innerText = price.innerText = "$" + 16 * x + ".00";

views.addEventListener("change", () => {
  setViews();
  setPrice();
});

const setViews = () => {
  if (views.value < 4) {
    pageViews.innerText = values[views.value] + "K";
  }
  if (views.value == 4) {
    pageViews.innerText = values[views.value] + "M";
  }
};

//Update pricing based on views

const setPrice = () => {
  if (views.value == 0) {
    price.innerText = "$" + 8 * x + ".00";
  } else if (views.value == 1) {
    price.innerText = "$" + 12 * x + ".00";
  } else if (views.value == 2) {
    price.innerText = "$" + 16 * x + ".00";
  } else if (views.value == 3) {
    price.innerText = "$" + 24 * x + ".00";
  } else if (views.value == 4) {
    price.innerText = "$" + 36 * x + ".00";
  }
};

// Check if yearly billing is selected, then apply discount

isChecked.addEventListener("change", () => {
  if (isChecked.checked == true) {
    x = 0.75;
    setViews();
    setPrice();
  } else {
    x = 1;
    setViews();
    setPrice();
  }
});

// Determining whether to display -25% or 25% discount
let showDiscount = () => {
  if (window.innerWidth < 600) {
    discount.innerText = "-25%";
  } else {
    discount.innerText = "25% discount";
  }
};

showDiscount();
window.addEventListener("change", showDiscount());

//Issues
// Price not updating immediately after switch flipped
// showDiscount not running if screensize changes
