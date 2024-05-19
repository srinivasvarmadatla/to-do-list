document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
  
    function addTask(e) {
      e.preventDefault();
  
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(taskText));
  
      const removeBtn = document.createElement('button');
      removeBtn.appendChild(document.createTextNode('Remove'));
      li.appendChild(removeBtn);
  
      taskList.appendChild(li);
      taskInput.value = '';
    }
  
    function removeTask(e) {
      if (e.target.tagName === 'BUTTON') {
        const li = e.target.parentElement;
        taskList.removeChild(li);
      }
    }
    taskList.addEventListener('click', toggleTask);

function toggleTask(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
}
  });

  