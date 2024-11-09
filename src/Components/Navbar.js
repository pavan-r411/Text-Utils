import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <a className="navbar-brand" href="#">TextUtils</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">{props.title} <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.randomShit}</a>
                    </li>
                </ul>
                {/* <form className="d-flex">
                    <input className="form-control me-20" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success mx-2" type="submit">Search</button>
                </form> */}

            </div>

            <div className={`form-check form-switch text-${props.mode === `light` ? `dark` : `light`}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.taggleMode} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    randomShit: PropTypes.string
}


