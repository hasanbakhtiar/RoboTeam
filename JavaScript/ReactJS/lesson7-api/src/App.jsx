import React, { Component } from 'react'


class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }
  
  componentDidMount(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>this.setState({products:data}))
  }
 
    

  render() {
    return (
      <div className='container my-5'>
        <ol>
          {this.state.products.map(item => {
          return  <li key={item.id}>{item.title}</li>
          })}
        </ol>
      </div>
    )
  }
}

export default App