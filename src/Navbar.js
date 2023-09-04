import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div >
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="https://effizient.ca/">
        <img src='https://effizient.ca/assets/img/logo.png' alt='logo' className='logo'></img>
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class=" nav-link" href="https://effizient.ca/"> 
                <h6 className="top clr">Home</h6>
                <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown clr">
                <a class="nav-link dropdown-toggle rest clr" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                <span className='clr'>Resources</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="https://effizient.ca/resources.html">Resources</a>
                <a className="dropdown-item" href="https://effizient.ca/french.html">Learn French</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="https://effizient.ca/legal-disclaimer.html">Learn Disclaimer</a>
                </div>
            </li>
            <li class="nav-item ">
                <a class=" nav-link rest" href="https://blog.effizient.ca/"> 
                <span className='clr'>Blog</span>
                <span class="sr-only">(current)</span></a>
            </li>
            </ul>
        </div>
        </nav>
      
    </div>
  )
}

export default Navbar