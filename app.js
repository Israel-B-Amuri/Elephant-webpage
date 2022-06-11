const navButton = document.getElementById("nav-button");
const menu = document.querySelector(".nav-list");

navButton.addEventListener("click", () => {
  //getting the the data attribute from the attributes in the ul tag
  const navListVisibility = menu.getAttribute("data-visible");

  /*an if statement that switch the data-visible attribute from true
  to false and vice versa.*/

  if (navListVisibility === "false") {
    menu.setAttribute("data-visible", true);
    navButton.setAttribute("aria-expanded", true);
  } else {
    menu.setAttribute("data-visible", false);
    navButton.setAttribute("aria-expanded", false);
  }
});

//Nav functionality

// getting elements navigation elements from html

const navElements = document.querySelectorAll(".nav-item");

navElements.forEach((item) => {
  item.addEventListener("click", function () {
    // a variable that gets the data-link attribute from html
    let navElementsLinks = document.getElementById(
      item.getAttribute("data-link")
    );
    navElementsLinks.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
