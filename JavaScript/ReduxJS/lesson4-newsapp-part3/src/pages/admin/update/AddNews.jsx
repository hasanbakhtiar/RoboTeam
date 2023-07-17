import { Col } from "react-bootstrap"
import NewsForm from "../NewsForm"
import { useDispatch } from "react-redux"
import { addNews } from "../../../manager/actions/newsAction";
import { useNavigate } from "react-router-dom";

const AddNews = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div>
        <h1 className="text-center my-4">Add News</h1>
        <div className="d-flex justify-content-center">
            <Col md={6}>
                <NewsForm sendValue={(items)=>{
                    dispatch(addNews(items));
                    navigate('/admin')
                }} />
            </Col>
        </div>
    </div>
  )
}

export default AddNews