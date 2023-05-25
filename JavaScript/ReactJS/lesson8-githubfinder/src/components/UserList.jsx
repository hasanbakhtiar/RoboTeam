import React, { Component } from 'react'
import SingleCard from './SingleCard'

class UserList extends Component {
  render() {
    return (
      <div className='row g-5'>
        {this.props.sendusers.map(item=>{
            return <SingleCard key={item.id} alldata={item} />
        })}
       
      </div>
    )
  }
}

export default UserList