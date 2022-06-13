import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import Footer from './Footer'
import { signOut } from "firebase/auth";
import { storage, db, auth } from "../component/firebaseConfigcopy";
export default function Leftsidemenu(props) {
  return (
   
    <div class="mx-0 my-0 mt-0">
 <div className="leftside-menu">
  <a href="#" className="logo text-center logo-light">
        <span className="logo-lg">
            <img src="../home/assets/images/logo_uk.png" alt="" height="70"/>
        </span>
        <span className="logo-sm">
            <img src="../home/assets/images/logo_sm.png" alt="" height="16"/>
        </span>
    </a>
    <a href="/" className="logo text-center logo-dark">
        <span className="logo-lg">
            <img src="assets/images/users/logo-dark.png" alt="" height="16"/>
        </span>
        <span className="logo-sm">
            <img src="assets/images/users/logo_sm_dark.png" alt="" height="16"/>
        </span>
    </a>

    <div className="h-100" id="leftside-menu-container" data-simplebar="">

        
         
            <ul className="side-nav">

                <li className="side-nav-title side-nav-item">Navigation</li>
                
                <li className="side-nav-item">
               
                  
                       
                   
                </li>

                
                <li className="side-nav-item">
                <Link  to="/"  className="side-nav-link">
                <i className="bi bi-house-door"></i>
                       
                       
                  <span>Home</span>  
                  </Link>
                    
                </li>
  

                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#sidebarEcommerce" aria-expanded="false" aria-controls="sidebarEcommerce" className="side-nav-link">
                    <i class="bi bi-folder-plus"></i>
                    
                        <span> Course </span>
                    
                    </a>
                    <div className="collapse" id="sidebarEcommerce">
                        <ul className="side-nav-second-level">
                        
                            <li>
                                <Link to="/allcourse">All course </Link>
                            </li>
                            <li>
                         
                                        <Link to="/quiz"> IQ Question</Link>
                               
              </li>
             
                        </ul>
                    </div>
                </li>

                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#sidebarPages" aria-expanded="false" aria-controls="sidebarPages" className="side-nav-link">
                    <i class="bi bi-book"></i>                  
                     <span>Book </span>
                      
                    </a>
                    <div className="collapse" id="sidebarPages">
                        <ul className="side-nav-second-level">
                          
                            <li>
                                <Link to="/book">All Book </Link>
                            </li>
                            <li>
                                
                            </li>
                            
                         
                            
                        </ul>
                    </div>
                </li>
                        
  <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#sidebarreport" aria-expanded="false" aria-controls="sidebarEcommerce" className="side-nav-link">
                    <i class="bi bi-flag-fill"></i>                     
                      <span> Report </span>
                        
                    </a>
                    <div className="collapse" id="sidebarreport">
                        <ul className="side-nav-second-level">
                            <li>
                              
                                <Link to="/feedback"> View report   </Link>
                            </li>
                          <li>
                       </li>
                        </ul>
                    </div>
                </li>

                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#sidebarEmail" aria-expanded="false" aria-controls="sidebarEmail" className="side-nav-link">
                    <i class="bi bi-gear"></i>
                        <span> Manage System </span>
                       
                    </a>
                    <div className="collapse" id="sidebarEmail">
                        <ul className="side-nav-second-level">

                            <li>
                                <Link to="/user"> Manage user   </Link>
                            </li>
                            <li>
                                <Link to={ "/manegchair/front-end"}
                                  state={{ state: 'mystate' }}>Manage Chir head </Link>
                            </li>
                            
                           
                        </ul>
                    </div>
                </li>

                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#sidebarProjects" aria-expanded="false" aria-controls="sidebarProjects" className="side-nav-link">
                        <i className="fas fa-suitcase-rolling"></i>
                        <span> Tool </span>
                     
                    </a>
                    <div className="collapse" id="sidebarProjects">
                        <ul className="side-nav-second-level">
                            <li>
                             <Link to={"/IDE"}>IDE </Link> 
                            </li>

                            <li>
                                
                                <Link to={ "/liveClass"}
                                  state={{ state: 'mystate' }}>Live className </Link>
                            </li>

                      
                                
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                <Link  to="/"  className="side-nav-link">
                <i class="bi bi-box-arrow-left"></i>
                        <span className="btn btn-sm btn-outline-primary" onClick={()=>{signOut(auth)}}> Log out </span>
                  </Link>
                    
                </li>
                <li className="side-nav-item">
                <ul classNameName="side-nav-link"  >
                 </ul>
                  
                       
                   
                </li>
            </ul>
            </div>
          
            </div>
            <Footer/>
          
</div>
        
      

 
   
  
  )
}
