// Array para armazenar os usuários cadastrados
let users = [];

// Função para adicionar um novo usuário
function addUser(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  users.push({ name, email });
  document.getElementById("lista-usuario").innerHTML = "";
  mostraListaUsuario();
  limpaFormulario();
}

// Função para exibir a lista de usuários
function mostraListaUsuario() {
  let list = document.getElementById("lista-usuario");
  for (let i = 0; i < users.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `${users[i].name} - ${users[i].email}`;
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Excluir";
    deleteButton.addEventListener("click", function () {
      deleteUser(i);
    });
    let detailsButton = document.createElement("button");
    detailsButton.innerHTML = "Detalhes";
    detailsButton.addEventListener("click", function () {
      mostraDetalhes(i);
    });
    li.appendChild(deleteButton);
    li.appendChild(detailsButton);
    list.appendChild(li);
  }
}

// Função para deletar um usuário
function deleteUser(index) {
  users.splice(index, 1);
  document.getElementById("lista-usuario").innerHTML = "";
  mostraListaUsuario();
}

// Função para exibir os detalhes de um usuário
function mostraDetalhes(index) {
  let user = users[index];
  document.getElementById("detalhes-name").innerHTML = user.name;
  document.getElementById("detalhes-email").innerHTML = user.email;
  document.getElementById("detalhes-usuario").style.display = "block";
}

// Função para limpar o formulário após cada cadastro
function limpaFormulario() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}

// Adiciona o evento de submit no formulário
document.querySelector("form").addEventListener("submit", addUser);
