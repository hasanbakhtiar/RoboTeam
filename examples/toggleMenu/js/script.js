const toggleBtn = document.querySelector('#toggleBtn');
const menu =document.querySelector('.mymenu');

toggleBtn.onclick=()=>{
    if (menu.attributes[0].value === '') {
        menu.attributes[0].value = 'hide';
    }else{
        menu.attributes[0].value = '';
    }
}
// ======================Mode======================


const modeBtn  =document.querySelector('#mode');
const nav = document.querySelector('nav');
const box = document.querySelector('#box');
modeBtn.onclick=()=>{
       if (modeBtn.innerHTML === 'light') {
        nav.className = 'navbar navbar-expand-lg bg-light navbar-light'
        modeBtn.innerHTML = 'dark';
        modeBtn.className = 'btn btn-dark me-3';
        box.className = 'light';
    }else{
        nav.className = 'navbar navbar-expand-lg bg-dark navbar-dark'
        modeBtn.innerHTML = 'light';
        modeBtn.className = 'btn btn-light me-3';
        box.className = 'dark   ';


       }
}
