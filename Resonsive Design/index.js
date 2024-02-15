const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("button");
const randomnum = () => Math.floor(Math.random() * arr.length);

btn.addEventListener("click", () => {
  let str = "#";
  for (let i = 0; i < 5; i++) {
    str += randomnum();
  }
  console.log(str);
  document.body.style.backgroundColor = str;
  str = "";
});
