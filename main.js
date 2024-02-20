const form = document.querySelector('.second-form');
const goToLogin = document.querySelector(".goToLogin");
let isTrue = false;

document.querySelector('.submit-button').addEventListener('click', () => {
  if (!isTrue) {
    form.classList.add("move-form");
  }
})

goToLogin.addEventListener('click', () => {
  if (!isTrue) {
    form.classList.remove("move-form-back");
    form.classList.add("move-form");
    goToLogin.style.display = "none";
    isTrue = true;
  }
  else {
    isTrue = false;
    form.classList.remove("move-form");
    form.classList.add("move-form-back");
  }
})