"use strict";
document.addEventListener("DOMContentLoaded", function (event) {
  const menuButtons = document.querySelectorAll(".navbar__item");

  menuButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      menuButtons.forEach((button) => button.classList.remove("active"));
      e.target.parentElement.parentElement.classList.add("active");
    });
  });

  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
});
