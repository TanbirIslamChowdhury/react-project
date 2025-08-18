import * as React from 'react';
import { Link,useLocation } from 'react-router'

function Header(){
    return(
          <>
          <nav className="navbar navbar-expand-sm bg-info navbar-dark">
              <div className="container-fluid">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link text-white" to={"/admin/dashboard"}>Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to={"/admin/users"}>users</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link text-white" to={"/admin/Technicians"}>Technicians</Link>
                  </li>


                  
                </ul>
              </div>
            </nav>
          </>
    )
}


export default Header;