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
loadHTML("section_about", "pages/section_about.html");
