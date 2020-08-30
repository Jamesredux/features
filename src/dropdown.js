const { doc } = require("prettier");

const dropdown = (() => {
  const toggleDropdown = (e) => {
    console.log(e);
  };
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");
  dropdownButtons.forEach((button) =>
    button.addEventListener("click", toggleDropdown, false)
  );
})();

export default dropdown;
