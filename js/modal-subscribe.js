const contactsBtn = document.querySelector(".contacts-btn");
const modalSubsribe = document.querySelector(".modal-subscribe");
const overlay = document.querySelector(".overlay");
const subsribeClose = document.querySelector(".subscribe-close");
const subscribeForm = document.querySelector(".subscribe-form");
const inputEmail = document.querySelector(".input-email");
const inputAbout = document.querySelector(".input-about");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactsBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("overlay-show");
  modalSubsribe.classList.add("modal-subscribe-show");

  if (storage) {
    inputEmail.value = storage;
    inputAbout.focus();
  } else {
    inputEmail.focus()
  }
});

subsribeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("overlay-show");
  modalSubsribe.classList.remove("modal-subscribe-show");
  modalSubsribe.classList.remove("modal-subscribe-error");
});

subscribeForm.addEventListener("submit", function (evt) {
  if (!inputEmail.value || !inputAbout.value) {
    evt.preventDefault ();
    modalSubsribe.classList.remove("modal-subscribe-error");
    modalSubsribe.offsetWidth = modalSubsribe.offsetWidth;
    modalSubsribe.classList.add("modal-subscribe-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", inputEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalSubsribe.classList.contains("modal-subscribe-show")) {
      evt.preventDefault();
      modalSubsribe.classList.remove("modal-subscribe-show");
      overlay.classList.remove("overlay-show");
      modalSubsribe.classList.add("modal-subscribe-error");
    }
  }
});
