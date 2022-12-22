import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

import {BrowserRouter as Router,Route,Routes,Link,useParams,useLocation} from 'react-router-dom'

import pik from './pik1.png';
import { storage, db, auth } from "../component/firebaseConfigcopy";
import './FeedBack.css'
export default function Userview(props) {
  const {id}=useParams();
  const {ids}=useLocation().state;
 const {userName}=useLocation().state;
 const {Image}=useLocation().state;
 const {Email}=useLocation().state;
 const {Type}=useLocation().state;
 const {States}=useLocation().state;
 const {phon}=useLocation().state;
 const {Date}=useLocation().state;
 const [articles, setArticles] = useState([]);
 const [IQquestion, setIQquestion] = useState([]);
 const [FeedBack, setFeedBack] = useState([]);
 useEffect(() => {
  const articleRef = collection(db, "User",ids,"courses");
  const q = query(articleRef, orderBy("createdAt", "desc"));
  onSnapshot(q, (snapshot) => {
    const articles = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setArticles(articles);
  
  });
  const IQuestion = collection(db, "User",ids,"score");
  const qq = query(IQuestion, orderBy("createdAt", "desc"));
  onSnapshot(qq, (snapshot) => {
    const Qkey = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setIQquestion(Qkey);
   
  });
  const FeedBackRef = collection(db,  "User","FeedBack","GeneralFeedBack");
  const feed = query(FeedBackRef, where("Email", "==", "Verfied:-"+Email));
   onSnapshot(feed, (snapshot) => {
    const Fback = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setFeedBack(Fback); 
         
  });
}, []);

  return (
    <div class="row">
        <div class="col-4 p-5 ">
            <img class="mx-4" width="100" height="100" src={Image}/><br/> 
            <div class="">
             <small id="helpId" class="form-text text-muted">Name: {userName}</small> <br/> 
             <small id="helpId" class="form-text text-muted">Email: {Email}</small><br/> 
             <small id="helpId" class="form-text text-muted">Phone: {phon}</small><br/> 
             <small id="helpId" class="form-text text-muted is-valid">States: {States} </small><br/> 
             </div>
        </div>
        <div class="col-8  ">
<div class="row">
    <div class="col-12">
        <legend>Course Activity</legend>
        <table className="table ">
            <thead>
                    <th>course</th>
                    <th>Total Hr</th>
                    <th>completion</th>
                    <th>Last view</th>
           </thead>
            <tbody>
                
                {articles.length === 0 ? (
        <p>No articles found!</p>
      ) : (
        articles.map(
          ({
            id,
            Lecturename,
  LectureImage,
  Coursename,
  TotalHoure,
   Level,
   Catagory,
   Certificate,  
   Certifed,
   ResourseLink,
   IQQuestion,
   Reletedcourse,
   Rating,
   completedview,
   coverimage,
   Discrption,
  createdAt,
  Qkey,
          }) => (    
            <tr key={id}>
              <td>{Coursename}</td>
              <td>{TotalHoure}</td>
              <td>{"Level: "}{Level}</td>
              <td>27/4/2012</td>
        </tr>
                )))}
            </tbody>
        </table>
    </div>
    <div class="col-10">
    <article class="my-3" id="progress">
      <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h3>IQ Level</h3>
      </div>

      <div>
        <div class="bd-example">
        {IQquestion.length === 0 ? (
        <p>No articles found!</p>
      ) : (
        IQquestion.map(
          ({
            id,
            score,
            Cname

          }) => ( 
        <div class="progress mb-3" key={id}>
          <div className={`progress-bar  ${ score<="90" ? " bg-warning" : "bg-success"} ${score<="90" ? " w-75" : "w-100"}` } role="progressbar" aria-valuenow={score} aria-valuemin="0" aria-valuemax="100">{Cname} {score}%</div>
        </div>
        )))}
        {/* <div class="progress mb-3">
          <div class="progress-bar bg-success w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>
        <div class="progress mb-3">
          <div class="progress-bar bg-info text-dark w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
        </div>
        <div class="progress mb-3">
          <div class="progress-bar bg-warning text-dark w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
        </div>
        <div class="progress">
          <div class="progress-bar bg-danger w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
        </div> */}
        </div>

    
      </div>
    </article>
    </div>
</div>
        </div>
        <div class="col-12">
         
        <div class="col">
            <legend>Certificate!</legend>
            {IQquestion.length === 0 ? (
        <p>No articles found!</p>
      ) : (
        IQquestion.map(
          ({
            id,
            score,
            Cname
,createdAt,
Email,
Username,
          }) => ( 
            <div key={id} class="card list-group-item list-group-item-action">
              <div class="row g-0 ">
                <div class="col-md-4 ">
                  <svg class="bd-placeholder-img" width="100%" height="170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>

                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title"> Certificate of Completion</h5>
                    <p class="card-text">    Amu Fucality of Computer and Softwarre Engineering
           This certificate is presented to {Username} has completed the course {Cname}
            with score of </p>
            <div className={`progress-bar  ${ score<="90" ? " bg-warning" : "bg-success"} ${score<="90" ? " w-75" : "w-100"}` } role="progressbar" aria-valuenow={score} aria-valuemin="0" aria-valuemax="100"> {score}%</div>
       
                    <p class="card-text"><small class="text-muted">Last updated {} ago</small></p>
                  </div>
                </div>
              </div>
            </div>
              )))}
          </div>
        
        </div>
        
        <div class="col-12">
        <div class="row">

<div class="col-md-4 col-sm-4 col-xs-12 rating-part-left text-center">
<h1>1.3</h1>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<p>Average Rating</p>
</div>
<div class="col-md-8 col-sm-8 col-xs-12">
<div class="progress-bar-section">
<p>80</p>
<div class="progress progress-bar-vertical">
<div class="progress-bars" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{height: '80%'}}></div>
</div>
<i class="fa fa-star" aria-hidden="true"></i><br/>
<span>5</span>
</div>
<div class="progress-bar-section">
<p>70</p>
<div class="progress progress-bar-vertical">
<div class="progress-bars" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{height: '70%'}}></div>
</div>
<i class="fa fa-star" aria-hidden="true"></i><br/>
<span>4</span>
</div>
<div class="progress-bar-section">
<p>40</p>
<div class="progress progress-bar-vertical">
<div class="progress-bars" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{height: "40%"}}></div>
</div>
<i class="fa fa-star" aria-hidden="true"></i><br/>
<span>3</span>
</div>
<div class="progress-bar-section">
<p>60</p>
<div class="progress progress-bar-vertical">
<div class="progress-bars" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{height: "60%"}}></div>
</div>
<i class="fa fa-star" aria-hidden="true"></i><br/>
<span>2</span>
</div>
<div class="progress-bar-section">
<p>10</p>
<div class="progress progress-bar-vertical">
<div class="progress-bars" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"  style={{height: '10'}}></div>
</div>
<i class="fa fa-star" aria-hidden="true"></i><br/>
<span>1</span>
</div>
</div>
</div>

         <div class="col">
         <div class=" ">
         <div class="col-md-12 col-sm-12 col-xs-12">
           
            <h3>Reviews</h3>
            <hr/>
            </div>
         {FeedBack.length === 0 ? (
        <p>No articles found!</p>
      ) : (
        FeedBack.map(
          ({
            id,
           userName,
           image,
           idKey,
           Email,
           feedBack,
           createdAt,
          }) => ( 
            <div class="row review-section">
            
            <div class="col-md-4 col-md-4 col-xs-4 review-part-left">
            <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12">
            <img src={Image}/>
            </div>
            <div class="col-md-8 col-sm-8 col-xs-12">
            <p>8 days ago</p>
            <span>{userName}</span><br/>
            <small>Report</small>
            </div>
            </div>
            </div>
            <div class="col-md-8 col-sm-8 col-xs-8 review-part-right">
            <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12">
            <p>{feedBack}</p>
            </div>
            </div>
            </div>
            </div>
          )))}
           </div>
           </div>
           </div>
    </div>
  )
}
