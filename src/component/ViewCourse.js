import React, { useEffect, useState } from 'react';
import css from './viewcourse.css'
import auther from "./pik1.png"
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc, updateDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../component/firebaseConfigcopy";
import { toast } from 'react-toastify';
import {BrowserRouter as Router,Route,Routes,Link,useParams,useLocation} from 'react-router-dom'

export default function ViewCourse(props) {
  
  const {Lecturenames}=useLocation().state;
  const { LectureImages}=useLocation().state;
  const { Coursenames}=useLocation().state;
  const { Ratings}=useLocation().state;
  const {  TotalHoures}=useLocation().state;
  const { Levels}=useLocation().state;
  const { createdAts}=useLocation().state;
  const { Discrptions}=useLocation().state;
  const { Catagorys}=useLocation().state;
  const { ids}=useLocation().state;
  const { coverimages}=useLocation().state;
  const { completedviews}=useLocation().state;
  const {Reletedcourses}=useLocation().state;
  const { IQQuestions}=useLocation().state;
  const {  ResourseLinks}=useLocation().state;
  const {  Certifeds}=useLocation().state;
  const {  Certificates}=useLocation().state;
  const {  Qkey}=useLocation().state;
const  style={
        backgroundImage: 'url('+coverimages+')',
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5"
   }
  
   const [Coursevideo, setArticles] = useState([]);
   useEffect(() => {
     const articleRefs = collection(db, "Course",ids,"package");
     const q = query(articleRefs, orderBy("createdAt", "asc"));
     onSnapshot(q, (snapshot) => {
       const articles = snapshot.docs.map((doc) => ({
         id: doc.id,
         ...doc.data(),
       }));
       setArticles(articles);
     
     });
   }, []);
 
  return (
    <div class="row">
        <div class="col-12">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg back "  >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{Coursenames}</h2>
            <p>by {Lecturenames}</p>
        <p>{Discrptions}</p>
      
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
              <Link  to={ `/videoPlay/${ids}` }
      state={{ ids:ids}}  class="btn btn-secondary text-light btn-outline-danger">Start Course</Link>
               
              </li>
              <li class="d-flex align-items-center me-3">
           <a   href={ResourseLinks} target="_blank" rel="noopener"> <button class="btn btn-sm btn-outline-secondary">Resource</button>  </a> 
               
                </li>
              <li class="d-flex align-items-center">
              <Link  to={ `/quizquestion/${ids}` }
      state={{ GroupT:Qkey}}  class="btn btn-sm btn-outline-secondary"  type="">IQ Question</Link>
            
              <small class="mx-3">  7 sep 2024</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br/>

       
        <div class="col-8 my-3">
            <h6 >Description</h6>
           
            <p >{Discrptions}</p>
      
<table class="table">
    <thead>
   
        <tr>
            <th>TITLE</th>
            <th>LEVEL</th>
            <th>TIME</th>
        </tr>
         
    </thead>
    <tbody>
    {Coursevideo.length === 0 ? (
        <p>No articles found!</p>
      ) : (
       Coursevideo.map(
          ({
            id,
            CourseTitle,
            Tablecontent,
            Totaltime,
            Number,
            Date,
            Videotitle,
            Videotime,
            Video,
          })=>( 
       <tr key={id}>
       
            <td>{Videotitle}</td>
            <td>{Levels}</td>
            <td>{Videotime} </td>
           
        </tr>
       
        )))}
    </tbody>
</table>
        </div>
        <div class="col-4">
            <p>Course Auther</p>
            <img src={LectureImages} width="70" height="70"/> <label class="taxt-info">{Lecturenames}</label>
            <hr/>
            <p>{Lecturenames} is a data protection specialit He helps organizations comply with reganizations comply with regulation in a sensible and progmatic way balancing business needs risk and regulations He hlds qualifications..</p>
       <br/>
      <p> Course info </p>
      <hr/>
      <span>Level</span>    <label class=" mx-5">{Levels}</label>
      <hr/>
      <span>Rating</span>   <label class=" mx-5">{Levels} ({Ratings})</label>
     <hr/>
   
      <span>Duration</span>  <label class=" mx-5">{TotalHoures}</label>
      <hr/>
  
      <span>Updated</span> <label class=" mx-5"> 7 sep2018</label>
      <hr/>
        </div>

    </div>
  )
}
