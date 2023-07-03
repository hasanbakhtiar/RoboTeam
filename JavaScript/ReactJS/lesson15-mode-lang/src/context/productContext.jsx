import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { LangContext } from "./langContext";

export const ProductContext = createContext();

export const ProductProvider=(props)=>{
    const [product,setProduct] = useState([]);
    const [lang] = useContext(LangContext);
    
    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then(res => setProduct(res.data.products))   
    },[])
    
    return <ProductContext.Provider value={[product,setProduct]}>
            {props.children}
    </ProductContext.Provider>
}