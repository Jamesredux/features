const { doc } = require("prettier");

const dropdown = (() => {
  const toggleDropdown = (e) => {
    const dropdownItems = e.target.nextElementSibling;
    dropdownItems.classList.toggle("hidden");
  };

  const menuPick = (e) => {
    const selection = e.target.dataset;
    console.log(e.target.dataset.type);
    console.log(selection);
  };
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");
  const menuChoices = document.querySelectorAll(".menu-item");

  dropdownButtons.forEach((button) =>
    button.addEventListener("click", toggleDropdown, false)
  );
  menuChoices.forEach((choice) =>
    choice.addEventListener("click", menuPick, false)
  );
})();

export default dropdown;
