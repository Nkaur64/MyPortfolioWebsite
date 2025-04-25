document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
  
    // Add task on button click
    addBtn.addEventListener('click', () => {
      const task = input.value.trim();
      if (task !== '') {
        addTask(task);
        input.value = ''; // Clear the input after adding the task
      }
    });
  
    // Add task on Enter key
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addBtn.click();
      }
    });
  
    // Function to add a task
    function addTask(task) {
      const li = document.createElement('li');
      
      // Create task text
      const taskText = document.createElement('span');
      taskText.textContent = task;
  
      // Add delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '&times;';
      deleteBtn.className = 'delete-btn';
      
      // Delete button functionality
      deleteBtn.addEventListener('click', () => {
        todoList.removeChild(li); // Removes the specific li element
      });
  
      // Toggle completed task on click
      li.addEventListener('click', () => {
        li.classList.toggle('completed'); // Toggle completion (strikethrough)
      });
  
      // Append task text and delete button to the list item
      li.appendChild(deleteBtn);
      li.appendChild(taskText);
  
      // Append the list item (li) to the todo list
      todoList.appendChild(li);
    }
  });
  