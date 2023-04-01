// Define uma função para gerar uma senha aleatória
function gerarSenha(tamanho) {
  var caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

  var senha = "";

  for (var i = 0; i < 8; i++) {
    senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }

  // Retorna a senha gerada
  return senha;
}

var btnGerarSenha = document.getElementById("btn-gerar-senha");

var senhaGerada = document.getElementById("senha-gerada");

btnGerarSenha.addEventListener("click", function () {
  var novaSenha = gerarSenha(8);

  senhaGerada.innerHTML = novaSenha;
});
