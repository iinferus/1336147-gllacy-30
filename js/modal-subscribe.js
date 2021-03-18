const contactsBtn = document.querySelector(".contacts-btn");
const modalSubsribe = document.querySelector(".modal-subscribe");
const overlay = document.querySelector(".overlay");
const subsribeClose = document.querySelector(".subscribe-close");

contactsBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("overlay-show");
  modalSubsribe.classList.add("modal-subscribe-show");
});

subsribeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("overlay-show");
  modalSubsribe.classList.remove("modal-subscribe-show");
});
