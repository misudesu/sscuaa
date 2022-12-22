import React, { Component, useEffect, useState } from 'react'
import Reactplayer from 'react-player'
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc, updateDoc, setDoc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { storage, db, auth } from "../component/firebaseConfigcopy";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router,Route,Routes,Link,useparams,useLocation} from 'react-router-dom'
import { p } from 'bootstrap';
import { BiCaretRightCircle } from "react-icons/bi";
function Videoplay() {
  const { ids}=useLocation().state;
  
  const [video,setVideo]=useState({
    vd:"https://",
  });
const onClick=(e)=>{
  const vd=e.target.id;
  setVideo({
    vd:null,
  })
setVideo({
  vd:vd,
})
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

const handleDelete =(id, BookImage)=>  {
  try {
      deleteDoc(doc(db, "Course", ids,"package",id));
      // collection(db, "Book");
      alert("Article deleted successfully", { type: "success" });
      const storageRef = ref(storage,BookImage);
   
    
      deleteObject(storageRef);
    } catch (error) {
      alert("Error deleting article", { type: "error" });
      console.log(error);
    }
  
};
    return (
      <div className='row bg-dark text-light ' height="100%">
        <div className='col-8 '>
<Reactplayer  controls playing url={video.vd}></Reactplayer>
        </div>
        
        <div className='col-4 my-5 mt-5 mb-0'>
        
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
            
              <div key={id}>
            <h5>{Tablecontent} {Totaltime} </h5> 
            <i class="bi bi-play"><BiCaretRightCircle/></i>  <p className='text-light btn-sm btn btn-outline-primary' id={Video} onClick={(e)=>onClick(e)}>{Number} {Videotitle}</p>
            <span className='mx-2'>{Videotime}</span>
            <button onClick={()=>{handleDelete(id,Video);}} class="btn btn-sm btn-danger">delete</button> 
          </div>
      
          )))}
        </div>
        
      </div>
    )
  
}

export default Videoplay