const html = document.querySelector("html");
const btn = document.querySelector("#toggle");

btn.addEventListener("click", function () {
  html.classList.toggle("dark");
});
