import axios from "axios";
import { createContext, useEffect, useLayoutEffect, useState } from "react"

export const RestContex = createContext<any>(null);

export const RestProvider = ({children}:any) => {
        const [data,setData] = useState<any[]>([]);
        useLayoutEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res:any)=>setData(res.data))
        },[])
  return (
    <RestContex.Provider value={[data,setData]}>
        {children}
    </RestContex.Provider>
  )
}