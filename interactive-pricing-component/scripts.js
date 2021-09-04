let views = document.getElementById("views");
let pageViews = document.getElementById("page-views");

// Display page views
pageViews.innerText = views.value;

views.addEventListener("change", () => {
  if (views.value !== pageViews.innerText) {
    pageViews.innerText = views.value;
  }
});
