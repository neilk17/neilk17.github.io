const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function() {
    console.log("click")
    if (theme.getAttribute("href") == "light-style.css") {
        theme.href = "dark-style.css";
    } else {
        theme.href = "light-style.css";
        btn.innerHTML = 'Dark';
    }
});
