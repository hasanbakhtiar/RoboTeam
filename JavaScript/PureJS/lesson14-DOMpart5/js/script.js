const text = document.querySelector('p');
const ul = document.querySelector('ul');

// const h1 = document.querySelector('h1');

// text.innerHTML = h1.firstChild.nodeValue;

// text.innerHTML = ul.firstChild.firstChild.nodeType;
// text.innerHTML = ul.firstChild.firstChild.parentElement.parentElement.lastChild.firstChild.nodeValue;


// const newElem = document.createElement('h2');
// const newText = document.createTextNode('Hello new value');
// newElem.appendChild(newText);
// document.body.appendChild(newElem);

// basic todo app


// const input  = document.querySelector('input');
// const btn = document.querySelector('button');
// const ol = document.querySelector('ol');
// const todoApp = ()=>{
//   const li = document.createElement('li');
//   li.innerHTML = input.value;
//   ol.appendChild(li);
//   input.value = null;
//   li.onclick=()=>{
//     li.style.textDecoration = 'line-through'
//   }
//   li.ondblclick = ()=>{
//     li.remove();
//   }
// }
// btn.onclick = todoApp;


// normal todo

const input = document.querySelector('input');
const form = document.querySelector('form');
const listGroup = document.querySelector('.list-group');

const todoApp = (e) => {
  e.preventDefault();


  if (!input.value) {
    alert('please,fill input')
  } else {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item list-group-item-action');
    li.innerHTML = input.value;
    listGroup.appendChild(li);
    input.value = null;
    li.onclick = () => {
      if (li.style.textDecoration === 'line-through') {
    
      li.style.textDecoration = 'none';
      li.style.color ="#000";
      li.style.backgroundColor="white";
      }else{
        li.style.textDecoration = 'line-through';
        li.style.color ="#fff";
        li.style.backgroundColor="grey";
      }
    }
    li.ondblclick = () => {
      li.remove();
    }
  }

}

form.onsubmit = todoApp;