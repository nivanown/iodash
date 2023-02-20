/*- info-panel__item_add-button -*/
let buttons = document.querySelectorAll(".like");
for(let i = 0; i < buttons.length; i++) {
  buttons.item(i).addEventListener("click", doClickButton);
}

function doClickButton(e) {
  toggleButton(e.target);
}

function toggleButton(button) {
  button.classList.toggle('selected');
}