import React, { useEffect, useState }  from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { storage, db, auth } from "../component/firebaseConfigcopy";
import { toast } from "react-toastify";
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc,updateDoc, where } from "firebase/firestore";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function FeedBack() {
  const [FeedBack, setFeedBack] = useState([]);
  useEffect(() => {
    const articleRef = collection(db,  "User","FeedBack","GeneralFeedBack");
    const qq = query(articleRef, orderBy("createdAt", "desc")); 
     onSnapshot(qq, (snapshot) => {
      const Fback = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setFeedBack(Fback); 

    });
  }, []);
  const View=(e)=>{
  
    const userinfo = doc(db, "User","FeedBack","GeneralFeedBack", e.target.name);
    updateDoc(userinfo, {
      States: "Viewed",
    });
}
  return (
      <>
       <div class="col-4 my-5">
      <input class="form-control" placeholder="search"/>
  </div>
    <div class="card my-5 ">
 
  <table class="table datatable table-borderless card-body">
                    <thead>
                      <tr>
                        <th scope="col">States</th>
                        <th scope="col">Email</th>
                        <th scope="col">name</th>
                        <th scope="col">FeedBack</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {FeedBack.length === 0 ? (
        <p>No user found!</p>
      ) : (
        FeedBack.map(
          ({
           id,
           userName,
           image,
           idKey,
           Email,
           feedBack,
           States,
           createdAt,
          }) => (    
                      <tr key={id}>
                        <th scope="row"><a href="#">{States}</a></th>
                        <td><a href="#" class="text-primary fw-bold">{Email}</a></td>
                        <td>{userName}</td>
                        <td class="fw-bold">{feedBack}</td>
                        <td>
                        
                           <button class="btn btn-outline-danger">Delete</button>
                           <button 
                           name={id} onClick={(e) => View(e)}
                             class="mx-2 btn btn-outline-primary" >view</button>
                           
                        </td>
                      </tr>
                      )))}
                    </tbody>
                  </table>
    </div>
    </>
  )
}
