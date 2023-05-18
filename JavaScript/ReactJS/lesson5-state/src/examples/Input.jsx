import React, { Component } from 'react'


const data = {
    countryOne: "England",
    countryTwo: "Germany",
    countryThree: "Italy"
}


class Input extends Component {
    constructor() {
        super();
        this.state = {
            currentCity: "London"
        }
    }

    changeItem = (e) => {
        if (e.target.value === data.countryOne) {
            this.setState({
                currentCity: "London"
            })
        }else if (e.target.value === data.countryTwo) {
            this.setState({
                currentCity: "Berlin"
            })
        }else if(e.target.value === data.countryThree){
            this.setState({
                currentCity: "Rome"
            })
        }
    }


    render() {
        return (
            <div className='container my-5'>
                <p>{this.state.currentCity}</p>
                <input type="text" onChange={this.changeItem} />
            </div>
        )
    }
}

export default Input