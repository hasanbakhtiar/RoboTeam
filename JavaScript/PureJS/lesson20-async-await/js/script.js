// const loadInfo = document.querySelector('.load');


// const fetchApi = async()=>{
//   const comingdata = await fetch('https://fakestoreapi.com/products')
//   console.log(await comingdata.json());
// }
// fetchApi()


const myPromise = new Promise((resolve,reject)=>{
    const successdata = false;
    if (successdata) {
      return resolve('success');
    }else{
      return reject('reject')
    }
});
myPromise
.then(res=>console.log(res))
.catch(err=>console.log(err))

fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>console.log("My resolve:",data))
.catch(err=>console.log("My error:",err))



