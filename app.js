// event happens when page loads
window.addEventListener("load", () => {

    // get form input, and tasks DOM elements
    const form = document.querySelector("#new-task-form");

    const input = document.querySelector("#new-task-input");

    const listElement = document.querySelector("#tasks");

    // event happens when form is submitted
    form.addEventListener("submit", (e) => {

        // prevent page refresh(default submit action)
        e.preventDefault();

        const task = input.value;

        // if there is no value in the input
        if (!task) {
            alert("Please fill out field.");
            return;
        }

        // Create divs and give them class elements

        const taskElement = document.createElement('div');

        // add new div to class list "task" 
        taskElement.classList.add("task");

        const taskContentElement = document.createElement('div');
        taskContentElement.classList.add("content");

        // append child elements to parents
        taskElement.appendChild(taskContentElement);

        const taskInputElement = document.createElement("input");
        taskInputElement.classList.add("text");

        //set input type to text
        taskInputElement.type = "text";

        taskContentElement.appendChild(taskInputElement);

        // what outputs to the task list is the value associated with the form
        taskInputElement.value = task;

        //set input to readonly
        taskInputElement.setAttribute("readonly", "readonly");

        //create actions div
        const taskActionsElement = document.createElement("div");
        taskActionsElement.classList.add("actions");

        // create edit and del buttons
        const taskEditElement = document.createElement("button");
        taskEditElement.classList.add("edit");
        taskEditElement.innerHTML = "Edit"

        const taskDeleteElement = document.createElement("button");
        taskDeleteElement.classList.add("delete");
        taskDeleteElement.innerHTML = "Del"

        taskActionsElement.appendChild(taskEditElement);

        taskActionsElement.appendChild(taskDeleteElement);

        taskElement.appendChild(taskActionsElement);

        listElement.appendChild(taskElement);
        form.reset();

        // click event for edit button
        taskEditElement.addEventListener("click", () => {
            if (taskEditElement.innerHTML.toLowerCase() == "edit") {
                taskInputElement.removeAttribute("readonly");
                taskEditElement.innerHTML = "Save";
            } else {
                taskInputElement.setAttribute("readonly", "readonly");
                taskEditElement.innerHTML = "Edit";
            }
        });

        // click event for delete button
        taskDeleteElement.addEventListener("click", () => {
            listElement.removeChild(taskElement);
        });
    });
});