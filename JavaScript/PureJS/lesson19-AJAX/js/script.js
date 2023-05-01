// const xhttp = new XMLHttpRequest;
// console.log(xhttp);


const info = document.querySelector('h1');


const loadDoc=()=> {


    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      info.innerText = this.responseText;
      }
    xhttp.open("GET", "../data/info.txt", true);
    xhttp.send();   
  }

  document.querySelector('button').onclick = loadDoc;


  setTimeout(()=>{

    document.querySelector('#preloader').style.display = 'none';
    document.querySelector('.wrapper').style.display = 'block';
  },3000)