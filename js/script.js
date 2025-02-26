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