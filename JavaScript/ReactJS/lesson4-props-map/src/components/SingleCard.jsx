import React, { Component } from 'react'

class SingleCard extends Component {
    render() {
        return (

            <div className="col-12 col-sm-6 col-md-4">
                <div className="card" >
                    <img src={this.props.photo} height={300} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">Price:{this.props.price}AZN</p>
                        <div className="mb-2"  style={{"height":"15px","width":"15px","backgroundColor":`${this.props.color}`}}></div>
                        <button  className={`btn btn-success ${this.props.stock?"":"disabled"}`} onClick={()=>{
                            alert('product added')
                        }}>Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleCard