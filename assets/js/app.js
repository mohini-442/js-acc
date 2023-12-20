let box = document.querySelectorAll(".box");
box.forEach((e) => e.addEventListener("click", () => {
    let hide = e.classList.contains("active");
    box.forEach((e) => {
        e.classList.remove("active");
    })
    if (!hide) {
        e.classList.toggle("active");
    }
}))
