const form = document.querySelector(".second-form");
const goToLogin = document.querySelector(".goToLogin");
let isTrue = false;

document.querySelector(".submit-button").addEventListener("click", () => {
  if (!isTrue) {
    form.classList.add("move-form");
  }
});

goToLogin.addEventListener("click", () => {
  if (!isTrue) {
    form.classList.remove("move-form2");
    form.classList.add("move-form");
    goToLogin.textContent = "To Sign-Up";
    isTrue = true;
  } else {
    isTrue = false;
    form.classList.remove("move-form");
    form.classList.add("move-form2");
    goToLogin.textContent = "To Sign-In";
  }
});
