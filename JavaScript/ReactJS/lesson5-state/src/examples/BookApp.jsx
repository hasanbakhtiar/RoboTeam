import React, { Component } from 'react'
import book from '../data/products';

class BookApp extends Component {
    constructor(){
        super();
        this.state=book[0];
    }

    nextBook=()=>{
        this.setState(book[1]);
    }
  render() {
    return (
      <div className='container my-5'>
        
            <div className="card" style={{width: '18rem'}}>
            <img src={this.state.photo} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{this.state.bookName}</h5>
                <p className="card-text">{this.state.category}</p>
                <button className="btn btn-primary" onClick={this.nextBook}>Next book</button>
            </div>
            </div>

      </div>
    )
  }
}

export default BookApp