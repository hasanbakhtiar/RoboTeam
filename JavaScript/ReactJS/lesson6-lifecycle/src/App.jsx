import React, { Component } from 'react'

class List extends Component {
  componentWillUnmount(){
    alert('list is deleted')
  }
  
  render() {
    return (
      <ol>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ol>
    )
  }
}



class App extends Component {
  constructor() {
    super();
    this.state = {
      test: "Hello",
      count: 0,
      display:true
    }
  }


  //   componentDidMount(){
  //     this.setState({test:"new value"})
  //   }

  //  componentDidUpdate(){
  //   console.log('componentDidUpdate is running...');
  //   document.querySelector('h1').style.color = 'red'
  //  }

  render() {
    let data = null;
    if (this.state.display) {
     data =  <List />
      
    }


    return (
      <div className='container my-5'>


        {data}
        <button onClick={()=>{
          this.setState({display:false})
        }}>list delete</button>



        {/* <h1> {this.state.test}</h1>
       <p>{this.state.count}</p>
       <button onClick={()=>{
        this.setState({count:this.state.count + 1})
       }}>update</button> */}
      </div>
    )
  }
}

export default App