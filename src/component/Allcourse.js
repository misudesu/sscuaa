import React, { useEffect, useState } from 'react'
import Addcourse from './Addcourse';
import Addvideo from './Addvideo';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import {toast} from "react-toastify";
import StartFirebase from './firebaseConfig';
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../component/firebaseConfigcopy";
import  {v4 as uuidv4 } from "uuid"
export default function Allcourse() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const articleRef = collection(db, "Course");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);
  return (
    <div> 
       {     articles.length === 0 ?(
		<p>please create a new Question</p>
	  ) : (
        <div className="row">
            Course List
<div classNameName="col-12"> 
<nav>
      <div className="nav nav-tabs nav-tabs-bordered mb-3 my-4" id="nav-tab" role="tablist">
        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Course list</button>
        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">creat course</button>
       
        
      </div>
    </nav>

    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
     
           <table className="table">
          <thead>

<th>Image</th>
<th>title</th>
<th>level</th>
<th>time</th>
<th>Author(s)</th>
<th>rating</th>
<th>Action</th>
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

<td> <a href="viewhome.php"> <img data-bs-toggle="modal"  width="50" height="50" src={Certificate}/> </a>
<a></a> </td>
<td>{Coursename}</td>
<td>{Level}</td>
<td>{TotalHoure}</td>
<td>{Lecturename}</td>
<td>{Rating}</td>
<td><button className="btn btn-sm btn-danger">delete</button>  <Link 
to={`/viewvideo`} 
state={{ 
  ids:id,
   Lecturenames:Lecturename,
  LectureImages:LectureImage,
  Coursenames:Coursename,
  TotalHoures:TotalHoure,
   Levels:Level,
   Catagorys:Catagory,
   Certificates:Certificate,  
   Certifeds:Certifed,
   ResourseLinks:ResourseLink,
   IQQuestions:IQQuestion,
   Reletedcourses:Reletedcourse,
   Ratings:Rating,
   completedviews:completedview,
   coverimages:coverimage,
   Discrptions:Discrption,
  createdAts:createdAt,
  Qkey:Qkey,
} }
className="mx-2 btn-sm btn-primary">view</Link></td>
<Link to={`/Addvideo/${id}`} 
state={{ 
  ids:id,
}}
class="my-2 btn btn-sm btn-outline-secondary" >Add</Link>
</tr>
 )))}
   
          </tbody>
      </table>
      <div className="bd-example mx-5 ">
        <nav aria-label="Standard pagination example text-align-center justify-content-between align-items-center">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
        </div>
      </div>
     
      <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
      <Addcourse/>
        </div>
  
  
   
    </div>

</div>
        </div>
    )}
         </div>
  )
}
