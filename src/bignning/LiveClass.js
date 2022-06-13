import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';

import {BrowserRouter as Router,Route,Routes,Link,useParams,useLocation} from 'react-router-dom'

import { storage, db, auth } from "../component/firebaseConfigcopy";
export default function LiveClass() {
    const [liveClass,setLiveClass]=useState([]);
    useEffect(() => {
    const IQuestion = collection(db, "Live");
  const qq = query(IQuestion, orderBy("createdAt", "desc"));
  onSnapshot(qq, (snapshot) => {
    const Lclass = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setLiveClass(Lclass);
   
  });
},[]);
  return (
    <div>
         {/* <!-- Header Start --> */}
    <div class="container-fluid bg-primary py-5 mb-5 page-Live">
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-lg-10 text-center">
            <h1 class="display-3 text-white animated slideInDown">ON Streaming</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item">
                  <a class="text-white" href="#">Class</a>
                </li>
                <li class="breadcrumb-item">
                  <a class="text-white" href="#">Conference</a>
                </li>
                <li
                  class="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Event
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Header End -->

    <!-- Live Start --> */}
   <div class="col-12">
         
         <div class="col">
             <legend>Live Room!</legend>
             {liveClass.length === 0 ? (
         <p>No articles found!</p>
       ) : (
        liveClass.map(
           ({
            id,
            Category,
            Discrption,
            LiveTitle,
            Lecture,
            Rating,
            Liveurl,
            LiveImage,     
            createdAt
           }) => ( 
             <div key={id} class="card list-group-item list-group-item-action">
               <div class="row g-0 ">
                 <div class="col-md-4 ">
 <img class="bd-placeholder-img" src={LiveImage} width="100%" height="170" />
                 </div>
                 <div class="col-md-8">
                   <div class="card-body">
                     <h5 class="card-title">{LiveTitle}</h5>
                     <p class="card-text">   {Discrption} </p>
                     <p class="card-text"><small class="text-muted">Start at {createdAt}</small> </p>
                  
                     <p class="card-text"><small class="text-muted">Live by  {Lecture} </small>   
           <a   href={Liveurl} target="_blank" rel="noopener"> <button class="btn btn-sm btn-outline-danger mx-5">Start Live</button>  </a> 
               
                 </p>
                   </div>
                 </div>
               </div>
             </div>
               )))}
           </div>
         
         </div>
         
    {/* <!-- Live End --> */}
<Footer/>
    </div>
  )
}
