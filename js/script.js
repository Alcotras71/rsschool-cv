"use strict";
document.addEventListener("DOMContentLoaded", function (event) {
  const menuButtons = document.querySelectorAll(".navbar__item");

  menuButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      menuButtons.forEach((button) => button.classList.remove("active"));
      e.target.parentElement.parentElement.classList.add("active");
			e.target.classList.add("active");
    });
  });

  const anchors = document.querySelectorAll('a[href*="#"]');

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

	new WOW().init();

	if(window.matchMedia('(max-width: 768px)').matches){
		const fadeInRight = document.querySelectorAll('.animate__fadeInRight');

		fadeInRight.forEach(elem => {
			elem.classList.remove('animate__fadeInRight');
			elem.classList.add('animate__fadeInLeft')
		});
	}

});
