const burger = document.querySelector(".burger");
const navi = document.querySelector(".navi");

burger.addEventListener("click", () => {
  navi.classList.toggle("navi-activ");
});

navi.addEventListener("click", () => {
  navi.classList.toggle("navi-activ");
});

burger.addEventListener("click", () => {
  burger.classList.toggle("burger-activ");
});

navi.addEventListener("click", () => {
  burger.classList.toggle("burger-activ");
});