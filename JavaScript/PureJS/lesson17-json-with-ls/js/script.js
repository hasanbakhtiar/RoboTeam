// const data = [
//     {
//         id:1,
//         text:"Todo one"
//     },
//     {
//         id:2,
//         text:"Todo two"
//     }
// ]

// const transformationJSON = JSON.stringify(data);


// localStorage.setItem('tododata',transformationJSON);

// const comingData = localStorage.getItem('tododata');


// const transformationObject = JSON.parse(comingData)


// document.querySelector('p').innerHTML = transformationObject[1].text;



const ol = document.querySelector('ol');
const input = document.querySelector('input');
const form = document.querySelector('form');


let data= [];
let li = "";
form.onsubmit = e =>{
    e.preventDefault();
    data.push(input.value);
    localStorage.setItem('todo',JSON.stringify(data));
    // let comingData = JSON.parse(localStorage.getItem('todo'));
    let comingData = JSON.parse(localStorage.getItem('todo'));
    
    
    for(let a of comingData){
        if (a === input.value) {
            li+=`<input value="${a}"/><br>`
            break;
        }
    }
    ol.innerHTML = li;  
    input.value = "";   
}

let comingData = JSON.parse(localStorage.getItem('todo'));


comingData.map(item=>{
    console.log(item);
    li+=`<input value="${item}"/><br>`
})
ol.innerHTML = li;
