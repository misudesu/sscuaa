import React,{useState,useEffect} from 'react';
import './login.css'
import { signInWithEmailAndPassword,sendPasswordResetEmail,getAuth } from "firebase/auth";
import { storage, db, auth } from "../component/firebaseConfigcopy";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Footer from '../bignning/Footer';
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc,where } from "firebase/firestore";

export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileinfo,setProfileInfo] =useState([]);
 const [message,setMessage]= useState("2,just login Now");

 const [Active,setActive]= useState("");
  const checkUP=()=>{
      const articleRef = collection(db, "User");
      const q = query(articleRef,  where("Email", "==", email));
      onSnapshot(q, (snapshot) => {
        const user = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProfileInfo(user);
        console.log(user);
      });
  }

  const login=(info)=>{
    setMessage(info);
  }
  const handleLogin = async () => {
          
    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      navigate("/");
    
    } catch (error) {
      setMessage(error.code, { type: "error" });
    }
  };
  const ResetPassword=async()=>{
    await sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
    alert("Password reset email sent!");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage)
  });
  }
  return (
   
<section class="min-vh-100 " >
    <div class="page-header align-items-start min-vh-50   pb-11 m-3 border-radius-lg back" >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 text-center mx-auto">
            <h1 class="text-white mb-2 mt-5">Welcome!</h1>
            <p class="text-lead text-white"></p>
          </div>
        </div>
      </div>
    </div>
   
    <div class="container">
      <div class="row mt-lg-n10 mt-md-n11 mt-n10">
        <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div class="card z-index-0">
            
            <div class="card-header text-center pt-4">
              <h5>Login with</h5>
            </div>
            <div class="row px-xl-5 px-sm-4 px-3">
              <div class="col-3 ms-auto px-1">
                <a class="btn btn-outline-light w-100" href="javascript:;">
                 
                </a>
              </div>
              <div class="col-3 px-1">
                <a class="btn btn-outline-light w-100" href="javascript:;">
                <svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="google-icon" transform="translate(3.000000, 2.000000)" fill-rule="nonzero">
                        <path d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267" id="Path" fill="#4285F4"></path>
                        <path d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667" id="Path" fill="#34A853"></path>
                        <path d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782" id="Path" fill="#FBBC05"></path>
                        <path d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769" id="Path" fill="#EB4335"></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div class="col-3 me-auto px-1">
                <a class="btn btn-outline-light w-100" href="javascript:;">
               
                </a>
              </div>
            
            </div>
            {profileinfo.length === 0 ? (
       <> 
       <p class="text-center ">1,To continue first verify it's You! </p>
        <p class="bg-warning text-dark">{message}</p>
       
        </>
      ) : (
        profileinfo.map(
          ({
           id,
            userName,
            Image,
            Email,
            Type,
            States,
            
          }) => ( 
            <div key={id}>
            {/* <p >{Email} <br/>Type: {Type}<br/>States:{States}</p> */}
          <div class="text-center pt-4" >


    
          </div>
          </div>
          )))}
            <div class="card-body">
           
             <div class="mb-3">
                  <input type="email" class="form-control" required placeholder="Email" aria-label="Email" aria-describedby="email-addon"
                   onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  />
                </div>
                <div class="mb-3 mb-0">
                  <input type="password" minlength="8" required class="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon"
                   onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  />
                </div>
              
                <div class="text-center ">
                  <button type="submit" class="btn btn-primary w-100 my-1 mb-2" onClick={profileinfo.length === 0 ? checkUP:handleLogin} >Sign in</button>
                </div>
                <p class="text-sm mt-3 mb-0"> <a onClick={ResetPassword} class="text-dark font-weight-bolder">Reset Password?</a></p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  )
}
