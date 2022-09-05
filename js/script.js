let darkModePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
const btn = document.querySelector(".img-button");
const theme = document.querySelector("#theme-link");

if (darkModePreference) {
    theme.href = "stylesheets/dark.css";
}  else {
        theme.href = "stylesheets/light.css";
}

btn.addEventListener("click", function() {
    if (theme.getAttribute("href") == "stylesheets/light1.css") {
        theme.href = "stylesheets/dark.css";
    } else if (theme.getAttribute("href") == "stylesheets/light1.css") { theme.href = "stylesheets/light1.css";
        theme.href = "stylesheets/light2.css";
    } else {
        theme.href = "stylesheets/light1.css";
    }
});
