# CADASTRO DE USUÁRIOS

## Começando 🚀
Nesse projeto, foi criada uma Tela de Login e uma Tela de Cadastro de Usuários na seguinte matéria:
* Programação Web I.

## Sobre o projeto 📋
Esse projeto é uma versão 2.0, composto por 2 páginas: uma contendo a Tela de Login e a outra a Tela de Cadastro de Usuários. Este README inclui o uso de fotos para facilitar a compreensão e tornar o site fácil de usar. A versão mais recente inclui a funcionalidade de edição e exclusão de usuários.

## Código JavaScript da Tela de Login
* **`let`**: Declara uma variável local na extensão do bloco atual, opcionalmente iniciando-a com um valor.
* **`loginSenha`**: `loginSenha` e `loginEmail` são IDs utilizados para referenciar elementos no JavaScript, permitindo editar o código.
* **`document.getElementById`**: Retorna a referência do elemento através do seu ID.
* **`value`**: O `value` é o valor do input.
* **`if & else`**: Estrutura condicional que executa o bloco de código se a condição for verdadeira; caso contrário, executa o bloco `else`.
* **`window.location.href`**: Usado para redirecionar o usuário para uma nova página após a conclusão bem-sucedida.

## Código JavaScript do Cadastro de Usuários
* **`var`**: Declara uma variável, opcionalmente com um valor inicial.
* **`function`**: Blocos de código que executam tarefas ou calculam valores, recebendo entradas e retornando saídas.
* **`innerHTML`**: Obtém ou define a marcação HTML ou XML contida no elemento.
* **`splice`**: Altera o conteúdo de um array, adicionando novos elementos enquanto remove elementos antigos.
* **`crialista()`**: Atualiza a lista de usuários exibida na tabela.
* **`indexEditar`**: Variável global que armazena o índice do usuário sendo editado, permitindo substituição de dados na lista.

## Funcionalidade de Edição de Usuário
Foram feitas as seguintes alterações para implementar a funcionalidade de edição:
* **Adição da Variável Global `indexEditar`**: Armazena o índice do usuário sendo editado.
* **Modificação da Função `salvarUser`**: Suporta tanto a criação de novos usuários quanto a edição de usuários existentes. Se `indexEditar` não for `-1`, o usuário no índice especificado é atualizado.
* **Função `editar`**: Carrega os dados do usuário nos campos de input e atualiza `indexEditar`.
* **Atualização da Função `excluir`**: Remove o usuário da lista e atualiza a tabela exibida.

# Fotos projeto 📷

![](fotos/tela.login.png)  
Essa é a tela inicial, tela de login.  
![](fotos/erro.login.png)  
Mensagem que aparece quando só é preenchido apenas um campo.
![](fotos/tela.cadastroo.png)
Essa é a tela de cadastro, após ser preenchido todos os campos da tela de login.
![](fotos/nome.erradoo.png)
Essa foto é um exemplo de erro, escrevi meu nome e o e-mail errados (coloquei com 2 A no final e escrevi gmail errado) e apertei em salvar.
![](fotos/editar.png)
Nessa imagem, temos o meu nome editado, apertei no botão "Editar" (que aparece na foto), assim, deixando meu nome certo.
![](fotos/editadoo.png)
Apertei em salvar, agora sim meu nome está certo, mas não era pra ter salvado meu nome! e agora?
![](fotos/tela.cadastroo.png)
Problema solucionado, botão "Excluir" está funcionando maravilhosamente bem.



## Técnicas e Tecnologias utilizadas 🔨
* Visual Studio Code 
* Git Bash
* Git Hub
* HTML5
* CSS3
* JavaScript
* Live Server (A extensão Live Server permite criar um servidor local através do VSCode. Com ele é cortado a necessidade de sempre que fizer uma alteração no código atualizar o navegador.)

## Autores ✍🏻
| [<img loading="eu.jpeg" src="eu.jpeg" width=115><br><sub>Larissa Gabrielle Fagundes Andrade.</sub>](https://github.com/gabriellefagundes) |
| :---: 
## Meu LinkedIn:
|  [<img loading="linkedin.png" src="linkedin.png" width=115><br><sub>LinkedIn.</sub>](https://www.linkedin.com/in/larissa-gabrielle-a74a272b3/)
| :---: 