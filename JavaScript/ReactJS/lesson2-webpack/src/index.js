import React from "react";
import ReactDOM from 'react-dom';
import './sass/style.scss'
import flowerphoto from './img/flower.jpg';


class App extends React.Component{
    render(){
        return(
            <>
            <h1>Hello React</h1>
            <img src={flowerphoto} alt="err" />
            </>
        )
    }
}


ReactDOM.render(<App />,document.querySelector('#root'));