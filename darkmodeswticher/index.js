const main = document.querySelector("main");
const button = document.querySelector("button");
const img = document.querySelector("#img");

button.addEventListener("click", () => {
  if (main.style.backgroundColor == "white") {
    button.innerText = "Light";
    img.src = "off-blub.webp";
    main.style.backgroundColor = "black";
  } else {
    button.innerText = "Dark";
    img.src = "light-bulb.webp";
    main.style.backgroundColor = "white";
  }
});
