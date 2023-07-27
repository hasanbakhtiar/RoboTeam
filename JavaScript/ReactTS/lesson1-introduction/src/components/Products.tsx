import { useRef, useState } from "react"
import productdata from "../data/productdata"
import SingleProduct from "./SingleProduct"




const Products:React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [count,setCount] = useState<string>("data");
    
  return (
    <div>
        <form onSubmit={(e:React.FormEvent)=>{
            e.preventDefault();
            setCount(inputRef.current!.value)}}>
            <input ref={inputRef} type="text" />
            <button>send</button>
        </form>
        {count}
        {productdata.map(function(item:any,count:number){
            return <SingleProduct
                    title={item.title}
                    price={item.price}
                    photo={item.photo}
                    stock={item.stock}
             />
        })}

    </div>
  )
}

export default Products