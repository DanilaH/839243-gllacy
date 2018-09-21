var feedbackButton = document.querySelector(".feedback-button")
var feedback = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".modal-close");
var focusName = document.querySelector(".textarea-name");
var form = document.querySelector(".feedback-form");
var email = document.querySelector(".textarea-feedback");
var comment = document.querySelector(".textarea-comment");

var storage = "";
var isStorageSupport = true;

try {
  storage = localStorage.getItem("focusName");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("feedback-show");
  overlay.classList.add("overlay-show");
  if (storage) {
    focusName.value = storage;
    email.focus();
  } else {
    focusName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("feedback-show");
  feedback.classList.remove("feedback-error");
  overlay.classList.remove("overlay-show");
});

form.addEventListener("submit", function (evt) {
  if (!focusName.value || !email.value || !comment.value) {
    evt.preventDefault();
    feedback.classList.remove("feedback-error");
    feedback.offsetWidth = form.offsetWidth;
    feedback.classList.add("feedback-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
    }
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedback.classList.contains("feedback-show")) {
      evt.preventDefault();
      feedback.classList.remove("feedback-show");
      feedback.classList.remove("feedback-error");
      overlay.classList.remove("overlay-show");
    } 
  }
});
