// Event happens when page loads
window.addEventListener('load', () => {

    // variable to hold form
    const form = document.querySelector('#new-task-form');

    // variable to hold input for form
    const input = document.querySelector('#new-task-input');

    // variable to hold div for task elements
    const listElement = document.querySelector('#tasks');

    // add form submit event 
    form.addEventListener('submit', (e) => {

        // Stops page from refreshing on submit
        e.preventDefault();

        // variable to hold the typed value in the form
        const task = input.value;

        // If the form is empty
        if (!task) {
            
            // add alert popup that says "Please fill out field"
            alert("Please fill out field.");

            // End function
            return;
        }

        // variable to create a div under the task class
        const taskElement = document.createElement("div");

        // add task element to task class
        taskElement.classList.add("task");


        // variable to create a div under the content class
        const taskContentElement = document.createElement("div");

        // add content element to content class
        taskContentElement.classList.add("content");

        // appends task to content element
        taskElement.appendChild(taskContentElement);


        // variable to create input under text class
        const taskInputElement = document.createElement("input");

        // add input element to text class
        taskInputElement.classList.add("text");

        // set input type to text
        taskInputElement.type = "text";

        // assign the value of input element to task var
        taskInputElement.value = task;

        // Make task input a readonly element
        taskInputElement.setAttribute("readonly", "readonly");

        // appends input element to content class
        taskContentElement.appendChild(taskInputElement);

        // variable to create actions element
        const taskActionsElement = document.createElement("div");

        // add actions element to actions class
        taskActionsElement.classList.add("actions");

        // variable to create edit button
        const taskEditElement = document.createElement("button");

        // add edit button to edit class
        taskEditElement.classList.add("edit");

        // set button text to "Edit"
        taskEditElement.innerHTML = "Edit";

        // variable to create delete button
        const taskDeleteElement = document.createElement("button");

        // add delete button to delete class
        taskDeleteElement.classList.add("delete");

        // Set button text to "Del"
        taskDeleteElement.innerHTML = "Del";

        // Append edit button to actions element
        taskActionsElement.appendChild(taskEditElement);

        // Append delete button to actions element
        taskActionsElement.appendChild(taskDeleteElement);

        // append actions element to task element
        taskElement.appendChild(taskActionsElement);

        // append task element to list element
        listElement.appendChild(taskElement);


        // Clear text field after submit
        form.reset();

        // Add click event to edit button
        taskEditElement.addEventListener("click", () => {

            // If the button says edit::made case insensitive
            if (taskEditElement.innerText.toLowerCase() ==
            "edit") {
                // removes readonly property
                taskInputElement.removeAttribute("readonly");

                // focus task input element
                taskInputElement.focus();

                //change value of button to "Save"
                taskEditElement.innerText = "Save";
            }
            else {
                // set readonly attribute
                taskInputElement.setAttribute("readonly", "readonly");

                // change value of button to "Edit"
                taskEditElement.innerText = "Edit";
            }
        });

         // Add click event for delete button
        taskDeleteElement.addEventListener("click", () => {
                
            // remove task element from list element
            listElement.removeChild(taskElement);
        });
    });
});