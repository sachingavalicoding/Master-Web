const btn = document.querySelectorAll(".btn");
const container = document.querySelectorAll(".container");
const body = document.querySelector("body");
const input = document.querySelector("input");
console.log(input);
console.log(btn);
console.log(container);

btn.forEach(function (kaypan) {
  kaypan.addEventListener("click", function () {
    body.style.backgroundColor = kaypan.textContent;
  });
});
