const html = document.querySelector("html");
const btn = document.querySelector("#darkmode");

function toggletheme() {
  console.log("toggletheme");
  html.classList.toggle("dark");
  if (btn.textContent === "Dark mode") {
    btn.textContent = "Light mode";
  } else {
    btn.textContent = "Dark mode";
  }
}
btn.addEventListener("click", toggletheme);
