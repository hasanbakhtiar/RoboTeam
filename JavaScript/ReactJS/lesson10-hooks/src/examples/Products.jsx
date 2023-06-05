import React, { useState } from 'react'


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


const newProd = [
    {
        id: 4,
        title: "Table",
        price: 200
    },
    {
        id: 5,
        title: "Chair",
        price: 20
    }
]

console.log([...data,...newProd]);





const Products = () => {
    const [product, setProduct] = useState(data)


    const changeProd = () => {
        setProduct([...data,...newProd])
    }




    return (
        <div className='container my-5'>
            {product.map(item => {
                return <li key={item.id}>{item.title}</li>
            })}

            <button onClick={changeProd}>change products</button>


        </div>
    )
}

export default Products