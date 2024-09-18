const tasks = [];

function addTask() {
    const taskName = document.getElementById('taskName').value;
    if (taskName.trim() !== '') {
        tasks.push(taskName);
        updateTaskList();
        document.getElementById('taskName').value = '';
    }
}

function updateTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}