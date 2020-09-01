const { doc } = require("prettier");

const slide = (() => {
  const slideBullets = document.querySelectorAll(".bullet");
  const slidesRow = document.querySelector(".slides-row");
  const backArrow = document.querySelector(".back");
  const forwardArrow = document.querySelector(".forward");
  let currentSlide = 1;

  const moveBack = () => {
    if (currentSlide === 1) return;
    currentSlide = currentSlide - 1;

    changeImage(currentSlide);
  };

  const moveForward = () => {
    if (currentSlide === 6) return;
    currentSlide = currentSlide + 1;
    changeImage(currentSlide);
  };

  const changeImage = (slideNumber) => {
    changeSelectedBullet(slideNumber);
    showPicture(slideNumber);
  };

  const changeSelectedBullet = (bulletNumber) => {
    slideBullets.forEach((bullet) => bullet.classList.remove("selected"));
    const selectedBullet = document.querySelector(
      `[data-slide="${bulletNumber}"]`
    );
    selectedBullet.classList.add("selected");
  };

  const showPicture = (bulletNumber) => {
    const transformValue = bulletNumber * 550 - 550;
    slidesRow.style.transform = `translateX(-${transformValue}px)`;
  };
  const selectSlide = (e) => {
    const bulletNumber = e.target.dataset.slide;
    currentSlide = parseInt(bulletNumber);
    changeImage(currentSlide);
  };

  slideBullets.forEach((bullet) =>
    bullet.addEventListener("click", selectSlide)
  );
  forwardArrow.addEventListener("click", moveForward);
  backArrow.addEventListener("click", moveBack);
})();

export default slide;
