import React, {useEffect, useState} from 'react'
import { v4 } from "uuid";
import  { Component } from 'react'
import {toast} from "react-toastify";
import StartFirebase from './firebaseConfig';
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../component/firebaseConfigcopy";
import  {v4 as uuidv4 } from "uuid"
export default function Addbook() {
const [formData, setformData] = useState({
  Category:"",
  Discrption:"",
  BookTitle:"",
  Auther:"",
  Rating:"",
  BookImage:"",
  PDF:"",
  url: "",
  progress: 0,
  imagesListRef:"",
  imageUrls:[],
  createdAt: Timestamp.now().toDate(),
});

const [progress, setProgress] = useState(0);

const handleChange = (e) => {
  setformData({ ...formData, [e.target.name]: e.target.value });
};

const handleImageChange = (e) => {
  setformData({ ...formData, [e.target.name]: e.target.files[0] });
};

const handlePublish = () => {
  if (!formData.BookTitle || !formData.Discrption || !formData.BookImage) {
    alert("Please fill all the fields");
    return;
  }

  const storageRef = ref(
    storage,
    `/Book/${Date.now()}${formData.BookImage.name}`
  );
  const storageRefPDF = ref(
    storage,
    `/Book/${Date.now()}${formData.PDF.name}`
  );
  const uploadImage = uploadBytesResumable(storageRef, formData.BookImage);
  const uploadPDF = uploadBytesResumable(storageRefPDF, formData.PDF);

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
 uploadPDF.on(
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
        BookTitle:'',
        Auther:'',
        Rating:'',
        BookImage:'',
        PDF:'',
        createdAt: Timestamp.now().toDate(),
      });
   

      getDownloadURL(uploadImage.snapshot.ref).then((url) => {
        const articleRef = collection(db, "Book");
         getDownloadURL(uploadPDF.snapshot.ref).then((pdfurl)=>{

       console.log(url);
        addDoc(articleRef, {
          Category:formData.Category,
        Discrption:formData.Discrption,
        BookTitle:formData.BookTitle,
        Auther:formData.Auther,
        Rating:formData.Rating,
        BookImage:url,
        PDF:pdfurl,
        createdAt: Timestamp.now().toDate(),
        })
          .then(() => {
            toast("Article added successfully", { type: "success" });
            setProgress(0);
          })
          .catch((err) => {
            toast("Error adding article", { type: "error" });
          });
        });
      });

    }
    );
      
  

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
                <option>Popular </option>
                <option>New </option>
              
              </select>
              <div className="invalid-feedback">
                Please select a valid IQ.
              </div>
            </div>

<div className="col-md-6"> 
                 <small id="helpId" className="form-text text-muted">Book of Discrption</small>
                   <input type="text"
                     className="form-control" name="Discrption" id="" aria-describedby="helpId" placeholder="Table of content"
                     value={formData.Discrption}
                     onChange={(e) => handleChange(e)} />
</div>
<legend>Book information:</legend>
<div className="col-md-4"> 
                     <small id="helpId" className="form-text text-muted">Book title</small>
                     <input type="text"
                       className="form-control" name="BookTitle" id="" aria-describedby="helpId" placeholder="name of book"
                       value={formData.BookTitle}
                       onChange={(e) => handleChange(e)} />
                </div>    
                   <div className="col-md-4">
                       <small id="helpId" className="form-text text-muted">Auther</small>
                       <input type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week"
                         className="form-control" name="Auther" id="" aria-describedby="helpId" placeholder="misael dessalegn"
                         value={formData.Auther}
                         onChange={(e) => handleChange(e)}  />
              </div>
              <div className="col-md-4">       
                         <small id="helpId" className="form-text text-muted">date </small>
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
                         <small id="helpId" className="form-text text-muted">Book cover</small>
                         <input type="file"
                           className="form-control" name="BookImage" id="" aria-describedby="helpId" placeholder=""
                           accept="image/*"
                          onChange={(e) => handleImageChange(e)}/>
                                        
                                          
                         </div>
                         <div className="col-md-4">       
                         <small id="helpId" className="form-text text-muted">Book or PDF File </small>
                         <input type="file"
                           className="form-control" name="PDF" id="" aria-describedby="helpId" 
                           accept="pdf/*"
                           onChange={(e) => handleImageChange(e)}  
                        />
                       
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