let inp = document.querySelector(".range"),
    num = document.querySelector(".num");

inp.addEventListener("input", () => {
    num.innerHTML = inp.value;
})
