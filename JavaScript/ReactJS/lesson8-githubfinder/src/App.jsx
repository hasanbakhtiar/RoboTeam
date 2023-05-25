import React, { Component } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import UserList from './components/UserList'
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state={
      users:[]
    }
  }
  
  findUser=(comingkeyword)=>{
    axios.get(`https://api.github.com/search/users?q=${comingkeyword}`)
    .then(res=>this.setState({users:res.data.items}))
  }
  
  render() {
    return (
         <>
         <Header />
         <div className="container">
         <Search searchData={this.findUser}/>
         <UserList sendusers = {this.state.users} />
         </div>
         </>

    )
  }
}

export default App