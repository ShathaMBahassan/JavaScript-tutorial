
console.log('JS Loaded 01');

const todo_list = [];

function renderTodoList() {
    let todo_list_html = '';

    for (let i = 0; i < todo_list.length; i++) {
        const name = todo_list[i].name;
        const dueDate =todo_list[i].dueDate;

        todo_list_html += `
            <p>
                ${name} ${dueDate}
                <button onclick="
                    todo_list.splice(${i}, 1);
                    renderTodoList();
                ">DELETE</button>
            </p>
        `;
    }

    document.querySelector('.js-to-do-list').innerHTML = todo_list_html;
}

function toDo() {
    const inputElement_name = document.querySelector('.js-name-inp')
    const inputElement_date = document.querySelector('.js-date-inp')

    todo_list.push({
        name:inputElement_name.value,
        dueDate: inputElement_date.value
    });

    inputElement_name.value = '';
    inputElement_date.value = '';

    renderTodoList();
}






    
    


