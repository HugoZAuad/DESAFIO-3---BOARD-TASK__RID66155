// Lista inicial de tarefas com id, descrição, se está concluída, data de criação e etiqueta
(() => {
  const tasks = [

  ];

  let completedCount = 0;

  // Função que atualiza o número de tarefas concluídas que aparece na tela
  const updateCompletedCounter = () => {
    const counter = document.getElementById("completed-counter");
    counter.textContent = `Tarefas concluídas: ${completedCount}`;
  };

  // Função para criar elementos com atributos e classes
  const createElement = (tag, options = {}) => {
    const element = document.createElement(tag);
    if (options.text) element.textContent = options.text;
    if (options.className) element.className = options.className;
    if (options.id) element.id = options.id;
    if (options.src) element.src = options.src;
    if (options.alt) element.alt = options.alt;
    if (options.style) Object.assign(element.style, options.style);
    return element;
  };

  // Função para obter a data atual no formato DD-MM-YYYY
  const getCurrentDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Função que cria um item da lista de tarefas para mostrar na tela
  const createTaskListItem = (task) => {
    const list = document.getElementById("todo-list");
    const toDo = createElement("li", { id: task.id });

    // Texto que mostra a descrição da tarefa
    const taskText = createElement("span", { text: task.description, className: "task-text" });
    if (task.checked) taskText.classList.add("completed");

    // Texto que mostra a etiqueta da tarefa, aparece abaixo da descrição
    const labelSpan = createElement("div", { text: task.label || "", className: "task-label" });

    // Texto que mostra a data que a tarefa foi criada
    const createdAtSpan = createElement("span", { text: ` (Criada em: ${task.createdAt})`, className: "task-created-at" });

    // Botão para marcar a tarefa como concluída ou não
    const completeButton = createElement("button", { className: "complete-btn" });
    if (task.checked) {
      completeButton.textContent = "";
      const checkedImage = createElement("img", {
        src: "assets/Checked.svg",
        alt: "Checked",
        style: { width: "1.2rem", height: "1.2rem" },
      });
      completeButton.appendChild(checkedImage);
    } else {
      completeButton.textContent = "Concluído";
    }

    // Espaço reservado para imagem
    const imagePlaceholder = createElement("div", { className: "image-placeholder" });
    imagePlaceholder.style.display = "none";

    // Coloca todos os elementos dentro do item da lista
    toDo.appendChild(taskText);
    toDo.appendChild(labelSpan);
    toDo.appendChild(createdAtSpan);
    toDo.appendChild(completeButton);
    toDo.appendChild(imagePlaceholder);

    // Coloca o item da lista na lista de tarefas na tela
    list.appendChild(toDo);

    return toDo;
  };

  // Função que cria um novo id para a próxima tarefa, baseado na última tarefa criada
  const getNewTaskId = () => {
    const lastId = tasks.length ? tasks[tasks.length - 1].id : 0;
    return lastId + 1;
  };

  // Função que pega os dados da nova tarefa que o usuário digitou no formulário
  const getNewTaskData = (event) => {
    const description = event.target.elements.description.value.trim();
    const label = event.target.elements.label.value.trim();
    const id = getNewTaskId();

    return { description, label, id };
  };

  // Função que atualiza o estado da tarefa e o contador de concluídas
  const toggleTaskCompletion = (taskId, taskTextElement, buttonElement) => {
    const task = tasks.find(t => t.id === Number(taskId));
    if (!task) return;

    if (!taskTextElement.classList.contains("completed")) {
      taskTextElement.classList.add("completed");
      task.checked = true;
      completedCount++;
      updateCompletedCounter();

      buttonElement.textContent = "";
      const checkedImage = createElement("img", {
        src: "assets/Checked.svg",
        alt: "Checked",
        style: { width: "1.2rem", height: "1.2rem" },
      });
      buttonElement.appendChild(checkedImage);
    } else {
      taskTextElement.classList.remove("completed");
      task.checked = false;
      completedCount--;
      updateCompletedCounter();

      buttonElement.textContent = "Concluído";
    }
  };

  // Função que cria uma nova tarefa quando o usuário envia o formulário
  const createTask = (event) => {
    event.preventDefault();
    const newTaskData = getNewTaskData(event);
    if (!newTaskData.description) return; // Ignore empty descriptions
    newTaskData.createdAt = getCurrentDate();
    newTaskData.checked = false;

    tasks.push(newTaskData);
    createTaskListItem(newTaskData);
    updateCompletedCounter();

    event.target.reset();
  };

  // Quando a página carregar, configura o formulário e mostra as tarefas já existentes
  window.onload = () => {
    const form = document.getElementById("create-todo-form");
    form.addEventListener("submit", createTask);

    // Evento delegado para o botão de concluir tarefa
    const todoList = document.getElementById("todo-list");
    todoList.addEventListener("click", (event) => {
      if (event.target.classList.contains("complete-btn") || event.target.parentElement?.classList.contains("complete-btn")) {
        const button = event.target.classList.contains("complete-btn") ? event.target : event.target.parentElement;
        const listItem = button.parentElement;
        const taskText = listItem.querySelector(".task-text");
        toggleTaskCompletion(listItem.id, taskText, button);
      }
    });

    tasks.forEach((task) => {
      createTaskListItem(task);
      if (task.checked) completedCount++;
    });

    updateCompletedCounter();
  };
})();
