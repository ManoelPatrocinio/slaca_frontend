// let li = document.querySelector(".nav-item").addEventListener("click", () => {
//     document.querySelector("#Trabalhos").classList.toggle("active");
// });

let li = document.querySelectorAll(".nav-item ");
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function (e) {
        this.classList.add("active")
    })
}

// evento de click em (ver Mais E ver Menos)

document.querySelector(".resumo_text_inicial").addEventListener("click", () => {
    document.querySelector("#verMais").classList.toggle("collapse");
});

document.querySelector("#verMenos").addEventListener("click", () => {
    document.querySelector("#collapseResumo").classList.remove("show");
    document.querySelector("#verMais").classList.toggle("collapse");
});

