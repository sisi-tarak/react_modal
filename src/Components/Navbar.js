import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-light fixed-top my-1">
    <div className="container ">
        <Link to="/" className="navbar-brand text-dark font-weight-light">
            <span className="text-info">Maj</span>or <span className="text-info">Pro</span>ject
        </Link>
        <Link to='/' className='font-weight-light ml-auto'>
            <button className="btn btn-outline-warning" id="login">Login</button>
        </Link>
        <Link to='/' className='font-weight-light mx-2'>
            <button className="btn btn-outline-info" id="signup">Signup</button>
        </Link>
        <button 
            className="navbar-toggler" 
            data-toggle="collapse" 
            data-target="#collapseNav">
            <span className="fa-solid fa-bars text-dark"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
            <div className="navbar-nav font-weight-light text-center">
                <Link to="/" className="nav-item nav-link text-dark">
                    Home
                </Link>
                <Link to="/" className="nav-item nav-link text-dark">
                    About
                </Link>
                <Link to="/" className="nav-item nav-link text-dark">
                    Market
                </Link>
                <Link to="/contactme" className="nav-item nav-link text-dark">
                    Contact
                </Link>
            </div>
        </div>
    </div>
</nav>    
  )
}

export default Navbar;
