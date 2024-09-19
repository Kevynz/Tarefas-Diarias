function addTask() {
    const taskName = document.getElementById("taskName").value;
    const currentTime = new Date().toLocaleTimeString();

    // Cria elemento <li> para a nova tarefa
    const newTaskItem = document.createElement("li");
    newTaskItem.innerHTML = `${taskName} (Início: ${currentTime})`;

    // Cria botao para finalizar tarefa
    const finishButton = document.createElement("button");
    finishButton.innerText = "Finalizar";
    finishButton.onclick = function () {
        const finishTime = new Date().toLocaleTimeString();
        newTaskItem.innerHTML += ` - Finalizado às ${finishTime}`;
        finishButton.disabled = true;
    };

    // ADD botao a tarefa
    newTaskItem.appendChild(finishButton);

    // ADD tarefa
    document.getElementById("taskList").appendChild(newTaskItem);
}