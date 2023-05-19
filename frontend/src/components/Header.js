import React from 'react'
import { NavLink,Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-sm navbar-light"style={{backgroundColor: "#d0e1f9 "}}>
            <Link className="navbar-brand" to='/home'>Pra's Mart</Link>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                    <NavLink to='/home' className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/products' className="nav-link"> Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/products' className="nav-link" style={({ isActive }) => ({ 
                            color: isActive ? '#0392cf' : 'black' })}>Services</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" >Contact us</NavLink>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/">Outlet</a>
                            <a className="dropdown-item" href="/">Office</a>
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </>
  )
}

export default Header;