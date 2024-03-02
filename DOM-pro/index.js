<<<<<<< HEAD
const colors = [
  "red",
  "green",
  "purple",
  "blue",
  "pink",
  "orange",
  "aqua",
  "greenyellow",
];
//colors.forEach((color) => console.log(color));

const p = document.querySelector("p");
const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
const main = document.querySelector("main");
btn.addEventListener("click", () => {
  let randomNum = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNum];
  p.innerText = colors[randomNum];
  p.style.color = colors[randomNum];
  btn.style.backgroundColor = colors[randomNum + 1];
  if (randomNum === colors.length - 1) {
    btn.style.backgroundColor = colors[0];
  }
});
const getRandomNumber = () => Math.floor(Math.random() * colors.length);

main.addEventListener("mouseover", () => {
  main.style.backgroundColor = "green";
  btn.style.color = "blue";
  main.style.width = "22rem";
  main.style.transform = "scale(1.2)";
});

main.addEventListener("mouseout", () => {
  main.style.backgroundColor = "red";
  btn.style.color = "black";
  main.style.width = "40rem";
  main.style.transform = "scale(0.8)";
});
=======
const colors = [
  "red",
  "green",
  "purple",
  "blue",
  "pink",
  "orange",
  "aqua",
  "greenyellow",
];
//colors.forEach((color) => console.log(color));

const p = document.querySelector("p");
const btn = document.querySelector("button");
const main = document.querySelector("main");
btn.addEventListener("click", () => {
  let randomNum = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNum];
  p.innerText = colors[randomNum];
  p.style.color = colors[randomNum];
  btn.style.backgroundColor = colors[randomNum + 1];
  if (randomNum === colors.length - 1) {
    btn.style.backgroundColor = colors[0];
  }
});
const getRandomNumber = () => Math.floor(Math.random() * colors.length);

main.addEventListener("mouseover", () => {
  main.style.backgroundColor = "green";
  btn.style.color = "blue";
  main.style.width = "22rem";
  main.style.transform = "scale(1.2)";
});

main.addEventListener("mouseout", () => {
  main.style.backgroundColor = "red";
  btn.style.color = "black";
  main.style.width = "40rem";
  main.style.transform = "scale(0.8)";
});
>>>>>>> 5f21fb4c2ef6f3d37d1eea4c583b63326aa4af3a
