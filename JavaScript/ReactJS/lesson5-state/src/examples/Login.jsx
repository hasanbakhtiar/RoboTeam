import React, { Component } from 'react'

const userdata = {
    email: 'test@exmaple.com',
    pass: "test123"
}



class Login extends Component {
    constructor() {
        super();
        this.state = {
            inputemail: "",
            inputpass: "",
            alerttext:"",
            alertstyle:""
        }
    }

    loginSubmit=(e)=>{
        e.preventDefault();
        if (!this.state.inputemail || !this.state.inputpass) {
         this.setState({
            alerttext:"plase,fill input",
            alertstyle:"warning"
         })
        }else{
            if (this.state.inputemail === userdata.email && this.state.inputpass === userdata.pass) {
                this.setState({
                    alerttext:"login is successfully",
                    alertstyle:"success"
                 })
            }else{
                this.setState({
                    alerttext:"email or password is wrong",
                    alertstyle:"danger"
                 })
            }
        }
    }

    render() {
        return (
            <div className="d-flex align-items-center justify-content-center flex-column">
                <h1 className='my-5'>Login </h1>
                <p className={`alert alert-${this.state.alertstyle}`}>{this.state.alerttext}</p>
                <div className="col-4">
                    <form onSubmit={this.loginSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" onChange={e => {
                                this.setState({ inputemail: e.target.value })
                            }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" onChange={e => {
                                this.setState({ inputpass: e.target.value })
                            }}  />
                        </div>

                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>

            </div>

        )
    }
}

export default Login