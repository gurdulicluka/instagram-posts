const gradientLabels = document.querySelectorAll(".custom-radio");
const gradients = document.querySelectorAll(".color");
let currentGradient = document.querySelector(".fullPreview");

gradientLabels.forEach((label) => {
  const checkbox = label.previousElementSibling; //checkbox input
  const gradientBackground = document.querySelector(`.${checkbox.id}`); //gradient bg

  label.addEventListener("mouseover", function () {
    gradientBackground.style.zIndex = 0;
    gradientBackground.classList.add("previewOn");
    gradientBackground.classList.remove("previewOut");
  });

  label.addEventListener("mouseleave", function () {
    gradientBackground.classList.remove("previewOn");
    gradientBackground.classList.add("previewOut");
  });

  checkbox.addEventListener("change", function () {
    gradients.forEach((el) => {
      el.classList.remove("previewOut");

      if (el !== gradientBackground) {
        el.style.zIndex = -2;
        setTimeout(() => {
          el.classList.remove("fullPreview");
        }, 400);
      }
    });

    gradientBackground.style.zIndex = -1;
    gradientBackground.classList.add("fullPreview");
  });
});
