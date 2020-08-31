const { doc } = require("prettier");

const dropdown = (() => {
  const toggleDropdown = (e) => {
    const dropdownItems = e.target.nextElementSibling;
    dropdownItems.classList.toggle("hidden");
  };

  const dropdownButtons = document.querySelectorAll(".dropdown-btn");

  dropdownButtons.forEach((button) =>
    button.addEventListener("click", toggleDropdown, false)
  );
})();

export default dropdown;
