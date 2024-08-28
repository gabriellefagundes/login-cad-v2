// Função para validar o acesso.

function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos.")
    }else{
        // alert("Campos preenchidos com sucesso!");    linha criada para teste apenas.
        window.location.href = 'cadastro.html';
    }
}

// Função para armazenar os nomes em ARRAY
var dadosLista = []; //Está em branco porque assim quanto mais coisa eu colocar, cabe normalmente.

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        //console.log(dadosLista);   Transformei em comentário porque não será mais necessário. Criado para teste.
        criaLista();
        document.getElementById('nomeUser').value = ""; //Linha criada para o campo "Nome" ficar em branco após apertar o botão "Salvar".
    }else{
        alert("Favor, informe um nome e e-mail para cadastro.");
    }
}
// Função para criar uma lista de usuários
function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário.</th><th>Ações.</th></tr>"; //Código pego no cadastro.html
    for(let i=0;i <= (dadosLista.length -1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>"; //Linha criada para o botão "Editar" e para o botão "Excluir" funcionar.
        document.getElementById('tabela').innerHTML = tabela;
    }

}

//Função para editar os nomes das listas.
function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1)   //Altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
}

// Função para excluir o nome da lista.
function excluir(i){
    dadosLista.splice((i - 1), 1); //Remove o nome do ARRAY.
    document.getElementById('tabela').deleteRow(i); //Deleta o nome da tabela.
}