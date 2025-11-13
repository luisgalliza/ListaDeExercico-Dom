function cadastrarUsuario() {
    let nome = document.getElementById("nome").value;
    let dataNasc = document.getElementById("dataNasc").value;
    let rua = document.getElementById("rua").value;
    let numero = document.getElementById("numero").value;
    let cidade = document.getElementById("cidade").value;
    let uf = document.getElementById("uf").value;

    let frase = `${nome} nasceu no dia ${dataNasc} e mora na rua ${rua}, número ${numero}, na cidade ${cidade} do estado ${uf}.`;

    let resultado = document.getElementById("resultado");
    resultado.innerText = frase;

    resultado.style.color = "green";
    resultado.style.fontSize = "24px";
}
