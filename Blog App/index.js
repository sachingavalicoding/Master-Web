// Add this in your existing script.js or create a new one

document
  .getElementById("open-sidebar-btn")
  .addEventListener("click", () => openSidebar());
document
  .getElementById("close-sidebar-btn")
  .addEventListener("click", () => closeSidebar());

function openSidebar() {
  document.querySelector(".sidebar").style.width = "250px";
  document.getElementById("sidebar-content").style.display = "block";
  document.querySelector(".main-content").style.marginLeft = "250px";
}

function closeSidebar() {
  document.querySelector(".sidebar").style.width = "0";
  document.getElementById("sidebar-content").style.display = "none";
  document.querySelector(".main-content").style.marginLeft = "0";
}
