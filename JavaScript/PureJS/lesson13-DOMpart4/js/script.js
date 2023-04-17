// const row = document.querySelector('.row')

// import { products } from "../data/product.js";


// let col = "";
// products.map(item=>{
//     col+=`      <div class="col-12 col-sm-6 col-md-4">
//     <div class="card" >
//       <img src="${item.img}" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">${item.title}</h5>
//         <p class="card-text">${item.price}AZN</p>
//         <button type="button" class="btn btn-${item.stock ? "success":"secondary"}" ${item.stock ? "":"disabled"} >Add to cart</button>
//       </div>
//     </div>
//   </div>    `
// })


// row.innerHTML  = col;




// console.log(products);
// products.map(item=>{
//     console.log(item);
// })



const row = document.querySelector('.row')
fetch('https://fakestoreapi.com/products')
.then(myres=>myres.json())
.then(mydata=>{
  let col = "";
  mydata.map(item=>{
      col+=`      <div class="col-12 col-sm-6 col-md-4">
      <div class="card" >
        <img height="300" src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.price}AZN</p>
          <button type="button" class="btn btn-success"  >Add to cart</button>
        </div>
      </div>
    </div>    `
  })
  
  
  row.innerHTML  = col;
})


