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

const track = document.querySelector(".carousel-slide");
const slides = Array.from(track.children);
const nextbutton = document.querySelector(".carousel-right");
const prevbutton = document.querySelector(".carousel-left");

const slideswidth = slides[0].getBoundingClientRect().width;

const setslideposition = (slide, index) => {
  slide.style.left = slideswidth * index + "px";
};
slides.forEach(setslideposition);

nextbutton.addEventListener("click", (e) => {
  const currentslide = track.querySelector(".current-slide");
  const nextslide = currentslide.nextElementSibling;
  const amountomove = nextslide.style.left;

  track.style.transform = "translateX(-" + amountomove + ")";
  currentslide.classList.remove("current-slide");
  nextslide.classList.add("current-slide");
});

prevbutton.addEventListener("click", (e) => {
  const currentslide = track.querySelector(".current-slide");
  const prevslide = currentslide.previousElementSibling;
  const amountomove = prevslide.style.left;

  track.style.transform = "translateX(-" + amountomove + ")";
  currentslide.classList.remove("current-slide");
  prevslide.classList.add("current-slide");
});