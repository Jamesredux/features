import "./reset.css";
import "./style.css";
import dropdown from "./dropdown";
import slide from "./slide";
import food1Pic from "./images/food1.jpg";
import food2Pic from "./images/food2.jpg";
import food3Pic from "./images/food3.jpg";
import food4Pic from "./images/food4.jpg";
import food5Pic from "./images/food5.jpg";
import food6Pic from "./images/food6.jpg";

const picOne = document.getElementById("food1");
const picTwo = document.getElementById("food2");
const picThree = document.getElementById("food3");
const picFour = document.getElementById("food4");
const picFive = document.getElementById("food5");
const picSix = document.getElementById("food6");
picOne.src = food1Pic;
picTwo.src = food2Pic;
picThree.src = food3Pic;
picFour.src = food4Pic;
picFive.src = food5Pic;
picSix.src = food6Pic;

const menuChoices = document.querySelectorAll(".menu-item");
const resultsBox = document.querySelector(".results-box");

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

const accountAction = (event) => {
  clearElement(resultsBox);
  const newPara = document.createElement("p");
  newPara.innerHTML = `You selected: ${event.target.dataset.account}`;
  resultsBox.appendChild(newPara);
};

const changeColor = (event) => {
  resultsBox.style.backgroundColor = event.target.dataset.color;
};

const menuPick = (e) => {
  if (e.target.dataset.type === "account") {
    accountAction(e);
  } else {
    changeColor(e);
  }
  const selection = e.target.dataset;
  console.log(e.target.dataset.type);
  console.log(selection);
};

menuChoices.forEach((choice) =>
  choice.addEventListener("click", menuPick, false)
);
