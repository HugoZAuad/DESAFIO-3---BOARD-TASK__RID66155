# Board de Tarefas

Este projeto é um **Board de Tarefas** simples, feito com HTML, CSS e JavaScript. Ele permite que você crie, conclua e exclua tarefas, além de salvar tudo no navegador para não perder suas tarefas ao fechar a página.

---

### 1. HTML (index.html)

- Um título que diz "Board de Tarefas".
- Um formulário com dois campos para você digitar o nome da tarefa e uma etiqueta (uma palavra para ajudar a identificar a tarefa).
- Um botão "+" para adicionar a tarefa.
- Uma lista onde as tarefas aparecem.
- Um contador que mostra quantas tarefas você já terminou.

### 2. JavaScript (index.js)

- Guarda as tarefas em uma lista dentro do navegador (usando algo chamado `localStorage`).
- Quando você cria uma tarefa, ele pega o que você digitou, cria um item na lista e mostra na tela.
- Você pode marcar a tarefa como concluída, e ela fica riscada para mostrar que já foi feita.
- Também tem um botão para apagar a tarefa.
- O contador de tarefas concluídas atualiza automaticamente.
- Quando você abre a página, ele carrega as tarefas que estavam salvas para mostrar tudo de novo.

### 3. CSS (style.css)

- Define as cores, fontes e tamanhos das letras.
- Deixa os botões e campos de texto com um estilo agradável.
- Organiza os elementos para ficarem centralizados e com espaçamento legal.
- Faz a página funcionar bem em diferentes tamanhos de tela, desde celulares pequenos até computadores grandes.

---

## Como usar

1. Digite o nome da tarefa e uma etiqueta.
2. Clique no botão "+" para adicionar.
3. Clique em "Concluir" para marcar a tarefa como feita.
4. Clique no "X" para apagar a tarefa.
5. Veja quantas tarefas você já concluiu no contador.

---
