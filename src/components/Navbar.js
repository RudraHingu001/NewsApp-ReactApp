import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar fixed-top navbar-expand-sm bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">NewsApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Business">Business</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Health">Health</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Science">Science</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Sports">Sports</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Technology">Technology</Link></li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enabled {props.mode} Mode</label>
          </div>
        </div>
      </div>
    </nav>
  </>
  )
}
