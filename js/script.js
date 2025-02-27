function filtrarProjetos(categoria) {
    let projetos = document.querySelectorAll('.projeto');

    projetos.forEach(projeto => {
        if (categoria === 'todos' || projeto.dataset.categoria === categoria) {
            projeto.style.display = 'block'; // Mostra o projeto
        } else {
            projeto.style.display = 'none'; // Esconde o projeto
        }
    });
}
