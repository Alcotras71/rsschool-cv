"use strict";
document.addEventListener("DOMContentLoaded", function (event) {
  const menuButtons = document.querySelectorAll(".navbar__item");

  menuButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
			menuButtons.forEach(button => button.classList.remove('active'));
      e.target.parentElement.parentElement.classList.add("active");
    });
  });
});
