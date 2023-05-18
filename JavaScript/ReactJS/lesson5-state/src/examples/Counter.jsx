import React, { Component } from 'react'

class Counter extends Component {
  constructor() {
    super();
    // this.decrement = this.decrement.bind(this);
    // this.increment = this.increment.bind(this);
    this.state = {
      count: 1,
      price:315
    };
  }


  decrement=()=> {
    if (this.state.count>1) {
      this.setState({
        count: this.state.count - 1
      })
    }
    
  }

  increment=()=> {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div className='container mt-4'>
        <h4>XiaomiMi Wifi Pro Sinyal Güçlendirici 300Mbps </h4>
        <h5>Price: <span className='text-danger'>{this.state.price * this.state.count}</span>TL</h5>

        <button className={`btn btn-success me-3 ${this.state.count <= 1 ? "disabled":""}`} onClick={this.decrement}>-1</button>
        <span>{this.state.count}</span>
        <button className='btn btn-danger ms-3' onClick={this.increment}>+1</button>
      </div>
    )
  }
}

export default Counter