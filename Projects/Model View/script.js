"use strict";

let showModal = document.querySelectorAll(".show-modal");
let modal = document.querySelector(".modal");
let closeModal = document.querySelector(".close-modal");
let overLay = document.querySelector(".overlay");

let btnOpenModal = () => {
  modal.classList.remove("hidden");
  overLay.classList.remove("hidden");
};

let btnCloseModal = () => {
  modal.classList.add("hidden");
  overLay.classList.add("hidden");
};

for (let i = 0; i < showModal.length; i++) {
  let displayModal = showModal[i].addEventListener("click", btnOpenModal);
}

//Modal close when clicked on close button
closeModal.addEventListener("click", btnCloseModal);

//Modal close whhen clicked on Overlay
overLay.addEventListener("click", btnCloseModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    btnCloseModal();
  }
});
