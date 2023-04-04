
let count = 0;
function addNewTask(task) {
    const li = document.createElement('li');
    li.setAttribute('id', 'listItem');
    li.innerHTML = `<input type="checkbox" id="check"> <p class="todotext">${task}</p> <i class="fa-solid fa-trash" id="trash"></i>`
    const ul = document.querySelector('ul');
    ul.appendChild(li);


    li.addEventListener('mouseover', () => {
        const trash = li.querySelector('#trash');
        trash.style.opacity = '1';
    })

    li.addEventListener('mouseout', () => {
        const trash = li.querySelector('#trash');
        trash.style.opacity = '0';
    })

    const checkedTask = li.querySelector('#check');
    checkedTask.addEventListener('click', () => {
        if(checkedTask.checked){
            li.querySelector('.todotext').style.textDecoration = 'line-through';
            li.querySelector('.todotext').style.opacity = '0.5';
            document.querySelector('#count_todos').innerHTML = --count;
        }
        else{
            li.querySelector('.todotext').style.textDecoration = 'none';
            li.querySelector('.todotext').style.opacity = '1';
            document.querySelector('#count_todos').innerHTML = ++count;
        }
    })

    const deleteTask = li.querySelector('#trash');
    deleteTask.addEventListener('click', () => {

        if(!checkedTask.checked){
            if(count >= 0){
                count--;
            }
        }

        document.querySelector('#count_todos').innerHTML = count;
        li.remove();
    })

}


function main() {

    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = document.querySelector('#task').value;
        count++;
        document.querySelector('#count_todos').innerHTML = count;
        addNewTask(task);
        if (task != '') {
            document.querySelector('#task').value = '';
        }
    })


    const clearAllTask = document.querySelector('.clearall');
    clearAllTask.addEventListener('click',() => {
        const task = document.querySelectorAll('#listItem');
        task.forEach((task) => {
            task.remove();
            count = 0;
            document.querySelector('#count_todos').innerHTML = count;
        })
    })
}

main();



