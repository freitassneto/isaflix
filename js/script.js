document.addEventListener("DOMContentLoaded", function () {
  const emailRadio = document.getElementById("email");
  const textRadio = document.getElementById("text");
  const emailInputContainer = document.getElementById("email-input-container");
  const textInputContainer = document.getElementById("text-input-container");

  emailRadio.addEventListener("change", function () {
    if (emailRadio.checked) {
      emailInputContainer.style.display = "block";
      textInputContainer.style.display = "none";
    }
  });

  textRadio.addEventListener("change", function () {
    if (textRadio.checked) {
      emailInputContainer.style.display = "none";
      textInputContainer.style.display = "block";
    }
  });
});
