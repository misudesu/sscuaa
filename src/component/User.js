import React, { useEffect, useState }  from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { storage, db, auth } from "../component/firebaseConfigcopy";
import { toast } from "react-toastify";
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc,updateDoc, where ,deleteDoc} from "firebase/firestore";

import { ref, uploadBytesResumable, getDownloadURL,deleteObject } from "firebase/storage";

export default function User() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const articleRef = collection(db, "User");
    const q = query(articleRef,  where("Type", "==", "User"));  onSnapshot(q, (snapshot) => {
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
      deleteDoc(doc(db,"User", id));
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
      <>
       <div class="col-4 my-5">
      <input class="form-control" placeholder="search"/>
  </div>
    <div class="card my-5 ">
 
  <table class="table datatable table-borderless card-body">
                    <thead>
                      <tr>
                        <th scope="col">Preview</th>
                        <th scope="col">Email</th>
                        <th scope="col">name</th>
                        <th scope="col">states</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {articles.length === 0 ? (
        <p>No user found!</p>
      ) : (
        articles.map(
          ({
           id,
            userName,
            Image,
            Email,
            Type,
            States,
            phoneNumber,
            createdAt
          }) => (    
                      <tr key={id}>
                        <th scope="row"><a href="#"><img width="30" height="30" src={Image} alt=""/></a></th>
                        <td><a href="#" class="text-primary fw-bold">{Email}</a></td>
                        <td>{userName}</td>
                        <td class="fw-bold">{States}</td>
                        <td>
                        
                           <button onClick={()=>handleDelete(id,Image)} class="btn btn-outline-danger">Delete</button>
                           <Link to={`/userview/${id}`} 
                             state={{ 
                              ids:id,
                             userName: userName,
                             Image: Image,
                             Email: Email,
                             Type: Type,
                             States: States,
                              phon:phoneNumber,
                              Date:createdAt
                             }}
                             class="mx-2 btn btn-outline-primary" >view</Link>
                           
                        </td>
                      </tr>
                      )))}
                    </tbody>
                  </table>
    </div>
    </>
  )
}
