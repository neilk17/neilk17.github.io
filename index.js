const btn = document.querySelector("button")

btn.addEventListener("click", function() {
    if (document.body.classList.contains("bg-dark")) {
        document.body.classList.remove("bg-dark")
        document.body.classList.remove("text-white")
    } else {
        document.body.classList.add("bg-dark")
        document.body.classList.add("text-white")
    }
});
