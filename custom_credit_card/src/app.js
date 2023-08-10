const gradientLabels = document.querySelectorAll(".custom-radio");

gradientLabels.forEach((element) => {
  const checkbox = element.previousElementSibling;
  const gradientBackground = document.querySelector(`.${checkbox.id}`);

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      element.style.pointerEvents = "none";
    } else {
      element.style.pointerEvents = "auto";
    }
  });

  element.addEventListener("mouseover", function () {
    gradientBackground.style.display = "block";
  });

  element.addEventListener("mouseleave", function () {
    gradientBackground.style.display = "none";
  });
});
