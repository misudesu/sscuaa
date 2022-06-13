import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { storage, db, auth } from "../component/firebaseConfigcopy";
import { signOut } from "firebase/auth";
export default function Topbar() {
    const [user] = useAuthState(auth);
  return (
  
    <div class="navbar-custom">
                        <ul class="list-unstyled topbar-menu float-end mb-0">
                          
                            


                         

                            <li class="dropdown notification-list">
                                <a class="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <span class="account-user-avatar"> 

                                       
                                    </span>
                                    <span>
                                        <span class="account-user-name"> Signed is as {user.displayName || user.email} </span>
                                        
                                    </span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                                  
                                    <div class=" dropdown-header noti-title">
                                        <h6 class="text-overflow m-0">Welcome !</h6>
                                    </div>

    
                                 
                                    <a href="/" class="dropdown-item notify-item">
                                    <i class="bi bi-box-arrow-left"></i>
                                        <span  onClick={()=>{signOut(auth)}}>Logout</span>
                                    </a>
                                </div>
                            </li>

                        </ul>
                       
                      
                     
                    </div>
               
  )
}
