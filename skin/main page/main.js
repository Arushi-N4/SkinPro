const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
let i = 0,
  j = 1,
  intervalId;

const intervalFn = () => {
  intervalId = setInterval(() => {
    carousel.style.rotate = `-${++i * 90}deg`;
    document.querySelector(".slide.active").classList.remove("active");
    const activeSlide = document.querySelector(`.slide:nth-child(${++j})`);
    activeSlide.classList.add("active");
    document.querySelector("a.active").classList.remove("active");
    const activeLink = document.querySelector(`.controls a:nth-child(${j})`);
    activeLink.classList.add("active");
    j === 4 && (j = 0);
  }, 4000);
};
intervalFn();



