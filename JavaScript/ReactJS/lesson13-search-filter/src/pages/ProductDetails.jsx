import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/productContext';

const ProductDetails = () => {

    const {url} = useParams();
    
    const [product] = useContext(ProductContext);
    const detailsData=  product.find(p=>p.id.toString() === url);
    return (
      <>
      {!product.length ?  <img className='d-block m-auto' src='https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif' alt='err'/>:  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

<div className="col-lg-6">
    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{detailsData.title}</h1>
    <p className="lead">{detailsData.description}</p>
    <p className="lead text-danger">{detailsData.price}$</p>
    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
    </div>
</div>
<div className="col-10 col-sm-8 col-lg-6">
    <img src={detailsData.images[0]} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
</div>
</div>}
      </>

    )
}

export default ProductDetails