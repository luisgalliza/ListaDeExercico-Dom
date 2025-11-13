const btnEnviar = document.getElementById("btn-enviar");
const info = document.getElementById("info");

// Validação do login e senha de usuário: 'Maria123' e 'Maria123'
function validarLogin() {
  const nomeDeUsuario = document.getElementById("nomeDeUsuario").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!verificaRequisitosSenha(senha)) return;
  if (!conferirNomeDeUsuarioESenha(nomeDeUsuario, senha)) return;
}

// Verificação da senha: pelo menos 1 letra maiúscula
function verificarSeTemMaiuscula(senha) {
  return /[A-Z]/.test(senha);
}

//Verificação da senha:
function verificaRequisitosSenha(senha) {
  const temMaiuscula = verificarSeTemMaiuscula(senha);

  if (senha.length < 4 || !temMaiuscula) {
    info.innerText =
      "Senha inválida! Deve ter ao menos 4 caracteres e 1 letra maiúscula.";
    info.style.color = "red";
    return false;
  }
  return true;
}

// Verificação de nome e senha corretos
function conferirNomeDeUsuarioESenha(nomeDeUsuario, senha) {
  if (nomeDeUsuario === "Maria123" && senha === "Maria123") {
    info.textContent = "Login realizado com sucesso!";
    info.style.color = "green";
    return true;
  }

  if (nomeDeUsuario !== "Maria123") {
    info.textContent = "Nome de usuário incorreto!";
    info.style.color = "red";
    return false;
  }

  if (senha !== "Maria123") {
    info.textContent = "Senha incorreta!";
    info.style.color = "red";
    return false;
  }
}
