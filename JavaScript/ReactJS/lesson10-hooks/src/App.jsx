import axios from 'axios';
import React, { useEffect, useState } from 'react'



const data = [
    {
        id: 1,
        title: "Pen",
        price: 1
    },
    {
        id: 2,
        title: "Ruler",
        price: 5
    },
    {
        id: 3,
        title: "Copybook",
        price: 2
    }
]



const App = () => {
const [product,setPorduct] = useState([]);


useEffect(()=>{
    axios.get("https://api.escuelajs.co/api/v1/products")
    .then(res=>setPorduct(res.data));
},[])

    
  return (
    <div className='container my-5 row'>
        {product.map(item=>(
            <li className='col-4'>
                <img width={100} src={item.images[0]} alt="" />
                {item.title}</li>
        ))}
     
    </div>
  )
}

export default App