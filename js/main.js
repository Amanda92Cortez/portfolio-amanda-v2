function loadHTML(elementId, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar ${file}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Agora os arquivos estão dentro da pasta /pages
loadHTML("header", "pages/header.html");
loadHTML("about", "pages/about.html");
loadHTML("tecnologias", "pages/tecnologias.html");
loadHTML("projetos", "pages/projetos.html");
loadHTML("contato", "pages/contato.html");
loadHTML("footer", "pages/footer.html");