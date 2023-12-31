let showPopup = document.querySelector(".Show-popup");
let containerBox = document.querySelector(".box-container");
let closePopup = document.querySelector(".okBtn");
let container = document.querySelector(".container");
//OpenPopup
showPopup.addEventListener("click", () => {
  containerBox.classList.add("showContainer");
});
//Close popup
closePopup.addEventListener("click", () => {
  containerBox.classList.remove("showContainer");
});
//If we click outside the box-container close the popup
container.addEventListener("click", (e) => {
  if (e.target === container) {
    containerBox.classList.remove("showContainer");
  }
});
