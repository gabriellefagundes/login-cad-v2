// FUNÇÃO PARA ACESSAR E REDIRECIONAR
function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    // VERIFICAR SE TODOS OS CAMPOS ESTÃO PREENCHIDOS
    if (!loginEmail || !loginSenha) {
        alert('Favor preencher todos os campos');
    } else {
        window.location.href = 'cadastro.html';
    }
}

// ARRAY PARA ARMAZENAR USUÁRIOS
var dadosLista = [];

// VARIÁVEL GLOBAL PARA ARMAZENAR O ÍNDICE DO USUÁRIO SENDO EDITADO
var indexEditar = -1;

// FUNÇÃO PARA SALVAR OU EDITAR USUÁRIO NA LISTA
function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('emailUser').value;

    if (nomeUser && emailUser) {
        if (emailUser === "" || 
            emailUser.indexOf('@') === -1 || 
            emailUser.indexOf('.') === -1) {
            alert("Por favor, informe um email válido");
        } else {
            if (indexEditar === -1) {
                // Adiciona novo usuário
                dadosLista.push({ nome: nomeUser, email: emailUser });
            } else {
                // Atualiza usuário existente
                dadosLista[indexEditar] = { nome: nomeUser, email: emailUser };
                indexEditar = -1; // Reseta o índice após a edição
            }
            crialista();
            document.getElementById("nomeUser").value = "";
            document.getElementById("emailUser").value = "";
        }
    } else {
        alert("Favor preencher todos os campos.");
    }
}

// FUNÇÃO PARA CRIAR LISTA DE USUÁRIOS
function crialista() {
    let tabela = "<tr><th>Nome Usuário.</th><th>E-mail.</th><th>Ações.</th></tr>";

    dadosLista.forEach((user, index) => {
        tabela += `<tr>
            <td>${user.nome}</td>
            <td>${user.email}</td>
            <td>
                <button type='button' onclick='editar(${index})'>Editar</button>
                <button type='button' onclick='excluir(${index})'>Excluir</button>
            </td>
        </tr>`;
    });

    document.getElementById('tabela').innerHTML = tabela;
}

// FUNÇÃO PARA EDITAR USUÁRIO NA LISTA
function editar(index) {
    let user = dadosLista[index];
    document.getElementById("nomeUser").value = user.nome;
    document.getElementById("emailUser").value = user.email;
    indexEditar = index; // Armazena o índice do usuário que está sendo editado
}

// FUNÇÃO PARA EXCLUIR USUÁRIO DA LISTA
function excluir(index) {
    dadosLista.splice(index, 1); // Remove o usuário da lista
    crialista(); // Atualiza a tabela após a exclusão
}
