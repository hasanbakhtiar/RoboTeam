import { useContext } from "react"
import Products from "./components/Products"
import { RestContex } from "./context/RestContext"

const App:React.FC = () => {
    const [data] = useContext(RestContex);
  return (
    <div>
        <Products />
        {data.map(function(item:any) {
                return <p>{item.title}</p>
        })}
    </div>
  )
}

export default App