const box = document.querySelectorAll(".box");
const body = document.querySelector("body");
const btns = document.querySelectorAll("button");

btns.forEach((button) => {
  button.addEventListener("click", () => {
    box.forEach((ele) => {
      ele.style.backgroundColor = button.textContent;
    });
  });
});
