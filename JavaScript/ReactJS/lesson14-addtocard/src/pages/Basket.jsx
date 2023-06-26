import React from 'react'
import { Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart'

const Basket = () => {
    const { isEmpty,items,updateItemQuantity,removeItem,emptyCart,cartTotal } = useCart();
    return (isEmpty ? <div className="d-flex justify-content-center">
        <img src='https://cdnl.iconscout.com/lottie/premium/thumb/shopping-bag-6866084-5624247.gif'alt='err'/>
    </div> :
        <div>
            <h1 className='text-center my-4'>Basket</h1>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Photo</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {items.map((item,count)=>(
 <tr>
 <th scope="row">{count+1}</th>
 <td><img width={100} src={item.images[0]} alt="" /></td>
 <td>{item.title}</td>
 <td>{item.price*item.quantity}$</td>
 <td>
   <Button variant='danger' onClick={()=>{updateItemQuantity(item.id, item.quantity - 1)}}>-1</Button>
   <span className='mx-2'>{item.quantity}</span>
   <Button variant='success' onClick={()=>{updateItemQuantity(item.id, item.quantity + 1)}}>+1</Button>
 </td>
 <td><Button variant='danger' onClick={()=>{removeItem(item.id)}}>X</Button></td>
</tr>
    ))}
   

  </tbody>
</table>
<Button variant='danger my-2' onClick={()=>{emptyCart()}}>Clear basket</Button>
<h2>Totoal Price:{cartTotal}$</h2>
        </div>
    )
}

export default Basket