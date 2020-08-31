const { doc } = require("prettier");

const slide = (() => {
  const selectSlide = (e) => {
    console.log(e.target.dataset.slide);
  };
  const slideBullets = document.querySelectorAll(".bullet");

  slideBullets.forEach((bullet) =>
    bullet.addEventListener("click", selectSlide)
  );
})();

export default slide;
