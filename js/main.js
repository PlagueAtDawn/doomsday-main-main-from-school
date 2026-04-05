document.querySelector("#star_1").addEventListener("mouseover", mouseoverBody);
function mouseoverBody() {
  console.log("mouseoverBody");
  document.querySelector("#star_1").style.fill = "blue";
}
document.querySelector("#star_1").addEventListener("mouseout", mouseoutBody);
function mouseoutBody() {
  console.log("mouseoutBody");
  document.querySelector("#star_1").style.fill = "rgb(255,0,103)";
}

document.querySelector("#star_1").addEventListener("click", clickBody);
function clickBody() {
  console.log("clickBody");
  document.querySelector(".info-text h2").textContent = "The body";
  document.querySelector(".info-text .placeholder").textContent = "It's a 25m long snake and has horns";
  document.querySelector("#efficiency").textContent = "Dark green body with a beige stomach";
  document.querySelector("#requirement").textContent = "The tongue is logner than the average human body";
}
