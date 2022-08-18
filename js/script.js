let darkModePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
const btn = document.querySelector(".dark-btn");
const theme = document.querySelector("#theme-link");

if (darkModePreference) {
    theme.href = "stylesheets/dark-style.css";
    btn.innerHTML = 'Light';
}  else {
        theme.href = "stylesheets/light-style.css";
        btn.innerHTML = 'Dark';
}

btn.addEventListener("click", function() {
    if (theme.getAttribute("href") == "stylesheets/light-style.css") {
        theme.href = "stylesheets/dark-style.css";
        btn.innerHTML = 'Light';
    } else {
        theme.href = "stylesheets/light-style.css";
        btn.innerHTML = 'Dark';
    }
});
