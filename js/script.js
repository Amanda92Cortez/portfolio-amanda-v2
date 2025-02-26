function filtrarProjetos(categoria) {
    let projetos = document.querySelectorAll(".projeto");

    projetos.forEach(projeto => {
        if (categoria === "todos") {
            projeto.style.display = "block";
        } else {
            if (projeto.getAttribute("data-categoria") === categoria) {
                projeto.style.display = "block";
            } else {
                projeto.style.display = "none";
            }
        }
    });
}

// Modal
document.querySelectorAll(".openModal").forEach(item => {
    item.addEventListener("click", function() {
        let projeto = this.closest(".projeto");
        document.getElementById("modal-title").textContent = projeto.dataset.title;
        document.getElementById("modal-image").src = projeto.dataset.image;
        document.getElementById("modal-description").textContent = projeto.dataset.description;
        document.getElementById("modal-languages").textContent = "Linguagens: " + projeto.dataset.languages;
        document.getElementById("modal-link").href = projeto.dataset.link;
        document.getElementById("modal").style.display = "flex";
    });
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});