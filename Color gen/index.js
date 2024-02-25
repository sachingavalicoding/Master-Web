const btn = document.querySelector("button");
let color = ["pink", "blue", "orange", "red", "violet", "green"];
console.log(btn);
btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * color.length - 1);
  console.log(color[random]);
  console.log(color[2]);
  document.body.style.backgroundColor = color[random];
});
