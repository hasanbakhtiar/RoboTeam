import { Col } from "react-bootstrap"
import NewsForm from "../NewsForm"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import slugify from "slugify"

const EditNews = () => {
  const {ne} = useParams();
  const newsdata = useSelector(p=>p);
  const newsprop = newsdata.find(p=>slugify(p.title)===ne);
  
  return (
    <div>
      {console.log(newsprop)}
        <h1 className='text-center my-3'>Edit Blog</h1>
        <div className="d-flex justify-content-center">
            <Col md={6}>
                <NewsForm editnews={newsprop}  />
            </Col>
        </div>
    </div>
  )
}

export default EditNews