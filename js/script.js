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

// eventos para criar novo topico de discursão


document.querySelector("#btnNovoTopicoInicial").addEventListener("click", () => {
    document.querySelector("#NovoTopico").classList.add("disabled");
    document.querySelector(".form_new_question").classList.add("activate");
});

document.querySelector("#btnEnviarNewTopico").addEventListener("click", () => {
    document.querySelector(".form_new_question").classList.remove("activate");
    document.querySelector(".topico_enviado").classList.add("activate");
});

document.querySelector("#btnNovoTopicoSecundario").addEventListener("click", () => {
    document.querySelector(".topico_enviado").classList.remove("activate");
    document.querySelector(".form_new_question").classList.add("activate");
    document.querySelector("#inputAssunto").value=''
    document.querySelector("#textAreaConteudo").value=''
});



