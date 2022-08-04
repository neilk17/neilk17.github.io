const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function() {
    console.log("click")
    if (theme.getAttribute("href") == "light-style.css") {
        theme.href = "dark-style.css";
    } else {
        theme.href = "light-style.css";
    }
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }