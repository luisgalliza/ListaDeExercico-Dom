function inserirTitulo() {

    let texto = document.getElementById("txt-titulo").value;

    let titulo = document.getElementById("titulo");
    titulo.innerText = texto;

    titulo.style.color = "blue";
}
