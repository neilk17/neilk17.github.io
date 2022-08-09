const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function() {
    console.log("click")
    if (theme.getAttribute("href") == "light-style.css") {
        theme.href = "stylesheets/dark-style.css";
    } else {
        btn.innerHTML = 'Dark';
    }
});
