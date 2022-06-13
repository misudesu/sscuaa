import React, { Component, useEffect, useState } from 'react'
import Iqquestion  from './Iqquestion'
import {  Link } from 'react-router-dom'
import { auth, db } from "../component/firebaseConfigcopy";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import GroupTitle from './GroupTitle';
function Allquiz(props){
  const [IQquestion,setIQuestion]=useState([]);
  useEffect(() => {
    const IQquestions = collection(db, "IQ");
    const q = query(IQquestions, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const question = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setIQuestion(question);
      console.log(question);
    });
  }, []);
  const [head, setHead] =useState({
        head: ["s.n","Group title","Action"],
       
     })
    const[data,setData]=useState(0)
  return (
    <div> 
    <div class="row">
     
<div className="col-12"> 
<nav>
  <div class="nav nav-tabs mb-3 my-4" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">IQ list</button>
    <button class="nav-link " id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Add IQ Question</button>
  
    
  </div>
</nav>

<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
 
       <table class="table col-8">
      <thead>
      {/*head.map(datas =><th key={datas}>{datas}</th>)*/}

<th>Group Title</th>
<th>Date</th>
<th>Action</th>
      </thead>
      <tbody>
       { IQquestion.length === 0 ?(
         <p>please create a new Question</p>
       ) : (
IQquestion.map(
  ({
    id,
    GroupTitle,
    Question,
    Option1,
    Option2,
    Option3,
    Option4,  
    createdAt,
    isCorrect,
    title,
  })=>(
    <tr key={id}>
    
    
    <td className="text-black">{title}</td>
    <td>{createdAt.toDate().toDateString()}</td>
    <td><button class="btn btn-sm btn-danger">delete</button> 
    <Link to={ `/AddIQ/${id}` }
      state={{ GroupT:title,
      ids:id}}    
      class="mx-2 btn-sm btn btn-primary"  type="">Add IQ</Link> <Link  to={ `/quizquestion/${id}` }
      state={{ GroupT:id}}  class="mx-2 btn-sm btn btn-primary"  type="">view</Link></td>
   
    </tr>
  
  ))) }
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

<GroupTitle DB="IQ" />
  
 
  </div>
  



</div>

</div>
    </div>
    

     </div>
  )
}

export default Allquiz;