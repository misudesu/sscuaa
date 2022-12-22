import React, {useEffect, useState} from 'react'
import { v4 } from "uuid";
import  { Component } from 'react'
import {toast} from "react-toastify";
import StartFirebase from './component/firebaseConfig';
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc,deleteDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL,deleteObject } from "firebase/storage";
import { storage, db, auth } from "./component/firebaseConfigcopy";
import  {v4 as uuidv4 } from "uuid"
import { Link } from 'react-router-dom';
import AddLive from './AddLive';

export function  Live() {

 const [state,setState]=useState({
    head: ["image","title","reating","catagory","Action"] });
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articleRef = collection(db, "Live");
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
   
const handleDelete =(id,Image)=>  {
  try {
      deleteDoc(doc(db,"Live", id));
      // collection(db, "Book");
      alert("Article deleted successfully", { type: "success" });
      const storageRef = ref(storage,Image);
      deleteObject(storageRef);
    } catch (error) {
      alert("Error deleting article", { type: "error" });
      console.log(error);
    }
  
};
  return (
    <div> 
  
        <div class="row">
         
<div className="col-12"> 
<nav>
      <div class="nav nav-tabs mb-3 my-4" id="nav-tab" role="tablist">
        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Live list</button>
        <button class="nav-link " id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Add Live</button>
      
        
      </div>
    </nav>

    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
     
           <table class="table">
          <thead>
            {state.head.map(datas =><th key={datas}>{datas}</th>)}

          </thead>
          <tbody>
          {articles.length === 0 ? (
        <p>No articles found!</p>
      ) : (
        articles.map(
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
              <tr key={id}>
  
 <td> <Link to="/viewLive"> <img data-bs-toggle="modal"  width="30" height="30" src={LiveImage}/> </Link>
<a></a> </td>  
<td className="text-black">{LiveTitle}</td>
<td>{Rating}</td>
<td>{Category}</td>
<td><button onClick={()=>handleDelete(id,LiveImage)} class="btn btn-sm btn-danger">delete</button>  <Link  to={ `/LiveRoom/` }
     
       class="mx-2 btn-sm btn btn-primary"  type=''>view</Link>
           <a   href={Liveurl} target="_blank" rel="noopener"> <button class="btn btn-sm btn-outline-danger ">Start Live</button>  </a>
           </td>
</tr>
  )
  )
)}

          </tbody>
      </table>


      <div class="bd-example mx-5 ">
        <nav aria-label="Standard pagination example text-align-center justify-content-between align-items-center">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
        </div>
      </div>
      <div class="tab-pane fade " id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
     <AddLive />
      </div>
      
  
  
   
    </div>

</div>
        </div>
        

         </div>
  
  )
}
export default Live;