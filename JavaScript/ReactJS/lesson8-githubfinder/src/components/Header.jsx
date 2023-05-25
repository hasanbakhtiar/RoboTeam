import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="navbar-brand" href="https://github.com" target='_blank' rel="noreferrer">Gitub <i className="fa-brands fa-github"></i> Finder</a>

                            </li>



                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}

export default Header