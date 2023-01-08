import React from 'react'

function Navbar() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg my-navbar">
                    <div className="container text-center">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav-link active" aria-current="page" to="#">Quiz App</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
