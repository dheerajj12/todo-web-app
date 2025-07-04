function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskDateTime = document.getElementById('taskDateTime');
  const taskList = document.getElementById('taskList');

  if (taskInput.value === "") return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskInput.value} (${taskDateTime.value})</span>
    <button onclick="markCompleted(this)">✅</button>
    <button onclick="editTask(this)">✏️</button>
    <button onclick="removeTask(this)">🗑️</button>
  `;
  taskList.appendChild(li);
  taskInput.value = '';
  taskDateTime.value = '';
}

function markCompleted(button) {
  const li = button.parentElement;
  li.classList.toggle('completed');
}

function editTask(button) {
  const li = button.parentElement;
  const span = li.querySelector('span');
  const newTask = prompt("Edit Task", span.innerText);
  if (newTask) span.innerText = newTask;
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}
