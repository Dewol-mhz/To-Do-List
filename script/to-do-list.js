const todolist = [
    {
        name: 'make dinner',
        duedate: '2022-12-22'  
    }
];

renderTodoList();

function renderTodoList(){
    let todolistHTML = '';
    for(i = 0; i < todolist.length; i++ ){
        const todoObject = todolist[i];
        const name = todoObject.name;
        const duedate = todoObject.duedate;
        
        
        const html = `
        <div class = "inner-name">${name} </div>
        <div>${duedate} </div>
        <button onclick= "
            todolist.splice(${i}, 1);
            renderTodoList();
        " class="delete-button" 
        >
        <img src="/img/delete_30dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="">
        </button>
        
        `;
        todolistHTML += html;
    }
    document.querySelector('.js-name-output')
        .innerHTML = todolistHTML;
}

function addtodo(){
    const inputElement =document.querySelector('.js-name-input');
    const name = inputElement.value;

    const duedateinputelement = document.querySelector('.js-due-date-input')
    const duedate = duedateinputelement.value
    todolist.push(
        {
            name: name,
            duedate: duedate
        }
    );
    
    inputElement.value = ''; //clears the input element!

    renderTodoList();
}

