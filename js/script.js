const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
console.log(theme.getAttribute("href"));
btn.addEventListener("click", function() {
    console.log("click")
    if (theme.getAttribute("href") == "stylesheets/light-style.css") {
        theme.href = "stylesheets/dark-style.css";
        btn.innerHTML = 'Light';
        console.log("clicked")
    } else {
        theme.href = "stylesheets/light-style.css";
        btn.innerHTML = 'Dark';
    }
});
