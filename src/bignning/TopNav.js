import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
export default function TopNav() {
  return (
    <>
   
{/* <!-- Navbar Start --> */}

<nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top  ">
< Link to={"/"} className="navbar-brand d-flex align-items-center px-4 ">
            <h2 className="m-0 text-primary"><i className="fa fa-book me-3"></i>SSCUAA Skill</h2>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
               < Link to={"/"} className="nav-item nav-link active">Home </Link>
                <Link to={ "/About"} className="nav-item nav-link"
                                  state={{ state: 'mystate' }}>About </Link>
               
               <Link to={ "/Courses"} className="nav-item nav-link">Courses</Link>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu fade-down m-0">
                    <Link to={ "/Team"}  className="dropdown-item">Our Instracters </Link>
                    {/* <Link to={ "/testamonal"} className="dropdown-item">Testimonial</Link> */}
                    <Link to={ "/ide"} className="dropdown-item">IDE</Link>
                    <Link to={ "/LiveRoom/"} className="nav-item nav-link">Live Class</Link>
                    </div>
                </div>
                <Link to={ "/Contact"} className="nav-item nav-link">Contact</Link>
            </div>
            <Link to={"/login"} className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">LOGIN <i className="fa fa-arrow-right ms-3"></i> </Link>
            
        </div>
    </nav>
    {/* <!-- Navbar End --> */}
   
    </>
  )
}
