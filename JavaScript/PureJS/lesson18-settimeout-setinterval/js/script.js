// setTimeout // verilmis saniyeden sonra bir defe isledir
// clearTimeout


// setInterval // vermis sainyeden sonra mutemadi isledir
// clearInterval

// 1000ms = 1s 


// const infoText = ()=>{
//     document.write('hello');
// }

// const text =setTimeout(infoText,2000);



// document.querySelector('button').onclick = ()=>{clearTimeout(text)}


// const text = setInterval(() => {
//     document.querySelector('h1').innerHTML = new Date();
// }, 1000);


// document.querySelector('button').onclick = ()=>{clearTimeout(text)}



const info = document.querySelector('h1');

// info.innerHTML = window.innerWidth
// info.innerHTML = screen.height
// info.innerHTML = screen.availWidth
// info.innerHTML = window.location.href
// info.innerHTML = window.location.pathname   
info.innerHTML = navigator.language   

document.querySelector('button').onclick = ()=>{
    // window.location.reload();

}

// console.log(window);