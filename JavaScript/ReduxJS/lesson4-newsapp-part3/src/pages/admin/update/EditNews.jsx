import { Col } from "react-bootstrap"
import NewsForm from "../NewsForm"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import slugify from "slugify"
import { editNews } from "../../../manager/actions/newsAction"

const EditNews = () => {
  const {ne} = useParams();
  const newsdata = useSelector(p=>p);
  const newsprop = newsdata.find(p=>slugify(p.title)===ne);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      {console.log(newsprop)}
        <h1 className='text-center my-3'>Edit Blog</h1>
        <div className="d-flex justify-content-center">
            <Col md={6}>
                <NewsForm editnews={newsprop} 
                sendValue={(items)=>{
                  dispatch(editNews(newsprop.id,items));
                  navigate('/admin');
              }}
                 />
            </Col>
        </div>
    </div>
  )
}

export default EditNews