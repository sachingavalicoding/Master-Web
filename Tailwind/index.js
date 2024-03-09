const navBtn = document.getElementById("navBtn");
const sidebar = document.querySelector(".sidebar");
console.log(sidebar);
navBtn.addEventListener("click", () => {
  if (sidebar.classList.contains("hidden")) {
    sidebar.classList.remove("hidden");
  } else {
    sidebar.classList.add("hidden");
  }
});
