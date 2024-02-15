const h1 = document.querySelector("h1");

const span = document.querySelector("span");
const h2 = document.getElementById("heading");
const h3 = document.getElementsByName("heading");
const input = document.querySelector("input");
function ch() {
  h1.innerText = "Hey";
  input.setAttribute("placeholder", "New Placeholder");
  console.log(input.getAttribute("name"));
  input.setAttribute("class", "input__box");
}
