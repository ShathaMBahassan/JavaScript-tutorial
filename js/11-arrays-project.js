
console.log('JS Loaded 01');

const todo_list = [];

function toDo(){
    let todo_list_html= '';
    
    const inputElement = document.querySelector('.js-inp');

    todo_list.push(inputElement.value);

    inputElement.value = '';  
    
    for (let i=0;i<todo_list.length;i++){
        const todo = todo_list[i];

        const html = `<p>${todo}</P>`;

        todo_list_html +=html;
        console.log(todo_list_html);

    }

    const list_div = document.querySelector('.js-to-do-list');
    list_div.innerHTML = todo_list_html 
}

    
    


