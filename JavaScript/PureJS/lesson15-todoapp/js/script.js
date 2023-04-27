const form = document.querySelector('form');
const input = document.querySelector('input');
const todoList = document.querySelector('.todo-list')
const clearAll = document.querySelector('.clearAll');
const count = document.querySelector('.count');

let listcount = 0;

const addTodo = (event) => {
    event.preventDefault();
    if (!input.value) {
        alert('fill input')
    } else {
        // create element
        const item = document.createElement("div");
        const liInput = document.createElement("input");
        const delbtn = document.createElement('button');
        const editbtn = document.createElement('button');
        // create element end
        listcount += 1;

        liInput.setAttribute('class', "hide");
        liInput.setAttribute('disabled', "");
        editbtn.setAttribute('type', "button");
        delbtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        editbtn.innerHTML = 'edit'
        liInput.value = input.value;
        item.appendChild(liInput);
        item.appendChild(editbtn);
        item.appendChild(delbtn);

        todoList.appendChild(item);
        input.value = null;
        delbtn.onclick = () => {
            item.remove();
            listcount -= 1;
            count.innerHTML = listcount;


        }
        editbtn.onclick = () => {
            if (liInput.attributes[0].value === 'hide') {
                liInput.removeAttribute("disabled");
                liInput.attributes[0].value = 'show';
            } else {
                liInput.setAttribute('disabled', "");
                liInput.attributes[0].value = 'hide'
            }
        }
        clearAll.onclick = () => {
            let list = document.querySelectorAll("div");
            for (let i = 0; i < list.length; i++) {
                list[i].remove();
                listcount = 0;
                count.innerHTML = listcount;

            }
        }
    }


    count.innerHTML = listcount;
}
count.innerHTML = listcount;


form.onsubmit = addTodo;





