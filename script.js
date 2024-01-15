const conta = document.querySelector(".grp");
const bb = document.querySelector(".back");
const nb = document.querySelector(".next");

conta.addEventListener("wheel", (e) => {
    e.preventDefault();
    conta.scrollLeft += e.deltaY;
    conta.style.scrollBehavior = "auto";
})

bb.addEventListener("click", (e) => {
    conta.scrollLeft -= 250;
    conta.style.scrollBehavior = "smooth";
})

nb.addEventListener("click", (e) => {
    conta.scrollLeft += 250;
    conta.style.scrollBehavior = "smooth";
})