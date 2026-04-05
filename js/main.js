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

document.querySelector("#star_2").addEventListener("mouseover", mouseoverMouth);
function mouseoverMouth() {
  console.log("mouseoverMouth");
  document.querySelector("#star_2").style.fill = "blue";
}
document.querySelector("#star_2").addEventListener("mouseout", mouseoutMouth);
function mouseoutMouth() {
  console.log("mouseoutMouth");
  document.querySelector("#star_2").style.fill = "rgb(255,0,103)";
}

document.querySelector("#star_2").addEventListener("click", clickMouth);
function clickMouth() {
  console.log("clickMouth");
  document.querySelector(".info-text h2").textContent = "The Mouth";
  document.querySelector(".info-text .placeholder").textContent = "The mouth can open, and be the size of 3 grown people";
  document.querySelector("#efficiency").textContent = "It has a long tongue it uses for vibrations like a normal snake";
  document.querySelector("#requirement").textContent = "It has fangs with poison";
}

document.querySelector("#star_3").addEventListener("mouseover", mouseoverEye);
function mouseoverEye() {
  console.log("mouseoverEye");
  document.querySelector("#star_3").style.fill = "blue";
}
document.querySelector("#star_3").addEventListener("mouseout", mouseoutEye);
function mouseoutEye() {
  console.log("mouseoutEye");
  document.querySelector("#star_3").style.fill = "rgb(255,0,103)";
}

document.querySelector("#star_3").addEventListener("click", clickEye);
function clickEye() {
  console.log("clickEye");
  document.querySelector(".info-text h2").textContent = "The eyes";
  document.querySelector(".info-text .placeholder").textContent = "Its fully blind on the eyes";
  document.querySelector("#efficiency").textContent = "Scientists say they made it go blind";
  document.querySelector("#requirement").textContent = "It can still feel things if the eyes hits something";
}
