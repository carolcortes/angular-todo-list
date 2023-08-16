# Projeto Lista de Tarefas em Angular :pencil:
``Agosto/2023``

> Bem-vindo ao repositório do meu primeiro projeto Angular! Nesta aplicação você poderá criar, editar e gerenciar suas tarefas diárias de maneira eficiente.

- Protótipo: [Figma](https://www.figma.com/proto/8St1VQcuglkGEOwdYzon0F/Angular-To-Do-List?type=design&node-id=1-2&t=pHHDyG6myqMyKUFD-1&scaling=min-zoom&page-id=0%3A1&mode=design)
- A aplicação pode ser acessada através do site: [Angular To Do List](https://carolcortes.github.io/angular-todo-list/#/todo)

## Habilidades:
 - Desenvolvimento de uma página para criação de uma lista de tarefas usando ``Angular``, ``HTML``, ``CSS`` e ``TypeScript``.
 
 ## Funcionalidade:
  - Ao utilizar a página, o usuário poderá realizar a criação de uma lista de tarefas;
  - É possível marcar ou desmarcar as tarefas concluídas;
  - É possível remover tarefas através do botão de "lixeira" ao lado de cada tarefa;
  - É possível remover todos os itens da lista através do botão ``CLEAR ALL``;
  - É possível remover os itens concluídos da lista através do botão ``CLEAR COMPLETED TASKS``;
  - É possível alternar a visualização de itens concluídos através do botão ``HIDE COMPLETED TASKS`` e ``SHOW COMPLETED TASKS``
  - As tarefas listadas são armazenadas no local storage.

#### Pré-requisitos para rodar o projeto localmente:
Antes de começar, certifique-se de ter instalado em seu sistema:
- **Node.js** e **npm**: Necessários para executar e gerenciar dependências do projeto.
- **Angular CLI**: Você pode instalá-lo globalmente usando o comando: ```npm install -g @angular/cli```

#### Configuração do projeto:
Clone este repositório para o seu sistema local:
```
git clone git@github.com:seu-usuario/angular-todo-list.git.
```

Navegue até o diretório do projeto:
```
cd todo-list-angular
```

Instale as dependências:
```
npm install
```

Inicie o servidor:
```
ng serve
```

### Estrutura do projeto
`src/app/app.component.html:` Template HTML principal.

`src/app/app-routing.module.ts:` Define as rotas da aplicação.

`src/app/layout:` Contém os componentes gerais da aplicação.

`src/app/todo:` Contém os componentes relacionados à funcionalidade principal da lista de tarefas.

`src/app/shared/services:` Contém os serviços que gerenciam a lógica de negócios.

`src/app/shared/models:` Define as estruturas de dados utilizadas na aplicação.

###### Projeto desenvolvido por: [Carol Cortes](https://github.com/carolcortes)

  <a href = "mailto:caroline.ocortes@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/carolinecortess/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
