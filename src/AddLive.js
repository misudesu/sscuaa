import React, {useEffect, useState} from 'react'
import { v4 } from "uuid";
import  { Component } from 'react'
import {toast} from "react-toastify";
import StartFirebase from './component/firebaseConfig';
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "./component/firebaseConfigcopy";
import  {v4 as uuidv4 } from "uuid"
export default function AddLive() {
const [formData, setformData] = useState({
  Category:"",
  Discrption:"",
  LiveTitle:"",
  Lecture:"",
  Rating:"",
  LiveImage:"",
  Liveurl: "",
  progress: 0,
  imagesListRef:"",
  imageUrls:[],
  createdAt: "",
});

const [progress, setProgress] = useState(0);

const handleChange = (e) => {
  setformData({ ...formData, [e.target.name]: e.target.value });
};

const handleImageChange = (e) => {
  setformData({ ...formData, [e.target.name]: e.target.files[0] });
};

const handlePublish = () => {
  if (!formData.LiveTitle || !formData.Discrption || !formData.LiveImage) {
    alert("Please fill all the fields");
    return;
  }

  const storageRef = ref(
    storage,
    `/Live/${Date.now()}${formData.LiveImage.name}`
  );
 
  const uploadImage = uploadBytesResumable(storageRef, formData.LiveImage);
  
  uploadImage.on(
    "state_changed",
    (snapshot) => {
      const progressPercent = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(progressPercent);
    },
    (err) => {
      console.log(err);
    },
    () => {
 
      setformData({
        Category:'',
        Discrption:'',
        LiveTitle:'',
        Lecture:'',
        Rating:'',
        LiveImage:'',
        Liveurl: '',
        createdAt: '',
      });
   

      getDownloadURL(uploadImage.snapshot.ref).then((url) => {
        const articleRef = collection(db, "Live");
        
       console.log(url);
        addDoc(articleRef, {
          Category:formData.Category,
        Discrption:formData.Discrption,
        LiveTitle:formData.LiveTitle,
        Lecture:formData.Lecture,
        Rating:formData.Rating,
        LiveImage:url,
        Liveurl: formData.Liveurl,
        createdAt:formData.createdAt,
        })
          .then(() => {
            toast("Article added successfully", { type: "success" });
            setProgress(0);
          })
          .catch((err) => {
            toast("Error adding article", { type: "error" });
          });
      
      });

    }
    );
      
  

    
    
};


  return (
  
    <div > 
   
             <div className=" row  form-group" >
<div className="col-6">
   <small id="helpId" className="form-text text-muted">Book Category</small>
              <select className="form-select" name="Category" id="iq"  
               value={formData.Category}
               onChange={(e) => handleChange(e)}>
                
                <option value="">Choose...</option>
                <option>NEW RELEASES </option>
                <option>RECOMMENDED FOR YOU </option>
                <option>SOFTWARE DEVELOPMENT </option>
                <option>IT OPS </option>
                <option>CERTIFICATION </option>
                <option>CONFERENCES </option>
              </select>
              <div className="invalid-feedback">
                Please select a valid IQ.
              </div>
            </div>

<div className="col-md-6"> 
                 <small id="helpId" className="form-text text-muted">Live of Discrption</small>
                   <input type="text"
                     className="form-control" name="Discrption" id="" aria-describedby="helpId" placeholder="Live of content"
                     value={formData.Discrption}
                     onChange={(e) => handleChange(e)} />
</div>
<legend>Book information:</legend>
<div className="col-md-4"> 
                     <small id="helpId" className="form-text text-muted">Live title</small>
                     <input type="text"
                       className="form-control" name="LiveTitle" id="" aria-describedby="helpId" placeholder="name of book"
                       value={formData.BookTitle}
                       onChange={(e) => handleChange(e)} />
                </div>    
                   <div className="col-md-4">
                       <small id="helpId" className="form-text text-muted">Lecture</small>
                       <input type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week"
                         className="form-control" name="Lecture" id="" aria-describedby="helpId" placeholder="misael dessalegn"
                         value={formData.Auther}
                         onChange={(e) => handleChange(e)}  />
              </div>
              <div className="col-md-4">       
                         <small id="helpId" className="form-text text-muted">Start date </small>
                         <input type="date"
                           className="form-control" name="createdAt" id="" aria-describedby="helpId" placeholder=""
                           value={formData.createdAt}
                           onChange={(e) => handleChange(e)} />
                         </div>
                         <div className="col-md-4">       
                         <small id="helpId" className="form-text text-muted">rating</small>
                         <input type="number"
                           className="form-control" name="Rating"   id="" aria-describedby="helpId" placeholder="0"
                           value={formData.Rating}
                           onChange={(e) => handleChange(e)} />
                         </div>
                         
                         <div className="col-md-4">       
                         <small id="helpId" className="form-text text-muted">Live cover</small>
                         <input type="file"
                           className="form-control" name="LiveImage" id="" aria-describedby="helpId" placeholder=""
                           accept="image/*"
                          onChange={(e) => handleImageChange(e)}/>
                                        
                                          
                         </div>
                         <div className="col-md-4">       
                         <small id="helpId" className="form-text text-muted">Live Url</small>
                         <input type="url|text"
                           className="form-control" name="Liveurl"   id="" aria-describedby="helpId" placeholder="https://"
                           value={formData.Liveurl}
                           onChange={(e) => handleChange(e)} />
                         </div>
                         {progress === 0 ? null : (
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped mt-2"
                style={{ width: `${progress}%` }}
              >
                {`uploading image ${progress}%`}
              </div>
            </div>
          )}
                      <div className="col-md-4">       
                      
                      <button onClick={ handlePublish} id="ADD" className="btn btn-primary my-4"> Add </button>

                        </div>
                 </div>
       
    </div>
  )
   
}