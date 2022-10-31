const darkModeBtn = document.getElementById("dark-mode-btn");

darkModeBtn.addEventListener("click", toggleDarkMode);

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.remove("dark");
  document.body.classList.add("light-bg");
} else {
  document.documentElement.classList.add("dark");
  document.body.classList.add("dark-bg");
}

function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
  document.body.classList.toggle("dark-bg");
  document.body.classList.toggle("light-bg");
  darkModeBtn.classList.toggle("fa-moon");
  darkModeBtn.classList.toggle("fa-sun");
  // Whenever the user explicitly chooses light mode
  localStorage.theme = "light";

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = "dark";
}
