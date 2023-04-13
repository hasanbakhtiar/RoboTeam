
// localStorage.setItem('name','Hasan')
// document.querySelector('h1').innerHTML = localStorage.getItem('name');
// localStorage.removeItem('name')
// localStorage.clear();

const modeBtn = document.querySelector('#mode-btn');
const nav = document.querySelector('nav');





if (localStorage.getItem('mode') === null) {
    localStorage.setItem('mode', 'light')
} else {
    modeBtn.onclick = () => {

        if (modeBtn.innerHTML === 'dark' ) {
            nav.className = "navbar navbar-expand-lg bg-dark navbar-dark";
            modeBtn.innerHTML = 'light';
            localStorage.setItem('mode', 'dark');
        } else {
            nav.className = "navbar navbar-expand-lg bg-light navbar-light";
            modeBtn.innerHTML = 'dark'
            localStorage.setItem('mode', 'light');

        }
    }

    if (localStorage.getItem('mode') === 'dark') {
        nav.className = "navbar navbar-expand-lg bg-dark navbar-dark";
        modeBtn.innerHTML = 'light';
    }else{
        nav.className = "navbar navbar-expand-lg bg-light navbar-light";
            modeBtn.innerHTML = 'dark'
    }
    
    
    
}

