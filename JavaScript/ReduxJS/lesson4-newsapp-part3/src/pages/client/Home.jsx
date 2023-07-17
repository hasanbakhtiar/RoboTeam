import { Row } from "react-bootstrap"
import SingleCard from "../../components/SingleCard"
import { useSelector } from "react-redux"

const Home = () => {
    const newsData = useSelector(state=>state);
    
    return (
        <div>
            <h1 className="text-center my-4 text-success">Welcome News App</h1>
            <Row>
                {newsData.map(item=>(
                    <SingleCard id={item.id} key={item.id} title={item.title} desc={item.desc} image={item.photo}/>
                ))}
            </Row>
        </div>
    )
}

export default Home