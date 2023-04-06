// const text = document.querySelectorAll('h1')[0];
// const infotext = document.querySelectorAll('h1')[1];

// const btn = document.querySelectorAll('button')[0];
// const infobtn = document.querySelectorAll('button')[1];

// const changeTextOne =()=>{
//     text.innerHTML = 'test';
// }

// btn.onclick = changeTextOne;

// const changeTextTwo =()=>{
//     infotext.innerHTML = 'test';
// }

// infobtn.onclick = changeTextTwo;

const lang = {
    az:["Ana Sehife","Haqqimizda","Xidmetlerimiz","Oz melumat","Elaqe"],
    en:["Home","About","Service","Portfolio","Contact"]
}

const navLink = document.querySelectorAll('.nav-link');
const langBtn = document.querySelector('#langBtn');


// default olaraq dili js ile htmle verdik
for(let x in lang.en){
    navLink[x].innerHTML = lang.en[x];
}

// bir funksiya yaratdiq ve daxilinde en dilini dongu ile az diline cevirdik
const multiLang=()=>{
    if (langBtn.innerHTML === 'AZ') {
        for(let x in lang.az){
            navLink[x].innerHTML = lang.az[x];
        }
        langBtn.innerHTML = 'EN';
        langBtn.style.backgroundColor = 'red';
    }else{
        for(let x in lang.en){
            navLink[x].innerHTML = lang.en[x];
        }
        langBtn.innerHTML = 'AZ'; 
        langBtn.style.backgroundColor = 'yellow';

    }
}

// duymeni basdiqdan sonra multiLang funksiyasi ise dusur
langBtn.onclick=multiLang;


for(let x in lang.az){
    navLink[x].onclick = ()=>{
        if (navLink[x].style.color == '') {
            navLink[x].style.color = 'red';
        }else{
            navLink[x].style.color = 'white'
        }
    }
}


document.querySelector('h1').style.color = 'red';
document.querySelector('h1').style.backgroundColor = 'green';



const info = {
    az:['az','soyad','olke'],
    en:['name','surname','country']
};





