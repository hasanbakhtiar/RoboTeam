import React, { Component } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import UserList from './components/UserList'
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state={
      users:[],
      display:"d-none"
    }
  }
  
  findUser=(comingkeyword)=>{
    axios.get(`https://api.github.com/search/users?q=${comingkeyword}`)
    .then(res=>this.setState({users:res.data.items,display:"d-block"}))
  }
  
  render() {
    return (
         <>
         <Header />
         <div className="container">
         <Search searchData={this.findUser}/>
         {this.state.users.length === 0?<div className={`text-center mt-5 ${this.state.display}`}><img src='https://media3.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif?cid=6c09b952amd6q7h6x2rqepy35g01fxwkfikq5gr0nozo54nu&ep=v1_gifs_search&rid=giphy.gif&ct=g' alt='err'/></div>:<UserList sendusers = {this.state.users} />}
         </div>
         </>

    )
  }
}

export default App