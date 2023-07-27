import React from 'react'
import { productType } from '../config'


const SingleProduct:React.FC<productType> = ({title,price,photo,stock}) => {
  return (
   <>
   
    <ol>
       <li><img height={100} src={photo} alt="" /></li> 
       <li>{title}</li> 
       <li>{price}</li> 
       <li>{stock?"In Stock":"Stock out"}</li> 
    </ol>
    <hr />
   </>
  )
}

export default SingleProduct