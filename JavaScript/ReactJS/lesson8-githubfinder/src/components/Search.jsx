import React, { Component } from 'react'

class Search extends Component {
    constructor(){
        super();
        this.state = {
            keyword:""
        }
        
    }

    searchSubmit=(e)=>{
        e.preventDefault();
        this.props.searchData(this.state.keyword)
    }
    
    
    render() {
        return (
            <form onSubmit={this.searchSubmit}>
                <div className="d-flex justify-content-center my-5">
                    <div className="col-6">
                        <div className="input-group mb-3">
                            <input onChange={e=>this.setState({keyword:e.target.value})} type="text" className="form-control" placeholder="Enter username" />
                            <button className="btn btn-dark" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
            </form>

        )
    }
}

export default Search