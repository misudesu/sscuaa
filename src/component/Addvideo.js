import Button from '@restart/ui/esm/Button'
import React, { useEffect, useState } from 'react'
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc, updateDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../component/firebaseConfigcopy";
import { toast } from 'react-toastify';
import {BrowserRouter as Router,Route,Routes,Link,useParams,useLocation} from 'react-router-dom'

export default function Addvideo(props) {
  const {id}=useParams();
  const {ids}=useLocation().state;
  console.log(ids)
  const [formData, setformData] = useState({
    id:"",
    CourseTitle:"",
  Tablecontent:"",
  Totaltime:"",
  Number:"",
  Date:"",
  Videotitle:"",
  Videotime:"",
  Video: "",
  Descrption:"",
 progress: 0,
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
 

  const storageRef = ref(
    storage,
    `/Course/${Date.now()}${formData.Videotitle.name}`
  );
 
  const uploadImage = uploadBytesResumable(storageRef, formData.Video);
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
        CourseTitle:"",
        Tablecontent:"",
        Totaltime:"",
        Number:"",
        Date:"",
        Videotitle:"",
        Videotime:"",
        Video: "",
        Descrption:"",
        createdAt: Timestamp.now().toDate(),
      });
  getDownloadURL(uploadImage.snapshot.ref).then((url) => {
        const articleRef = collection(db, "Course",ids,"package");
        addDoc(articleRef, {
         CourseTitle:formData.CourseTitle,
          Tablecontent:formData.Tablecontent,
          Totaltime:formData.Totaltime,
          Number:formData.Number,
          Date:formData.Date,
          Videotitle:formData.Videotitle,
          Videotime:formData.Videotime,
          Video: url,
          key:ids,
          Descrption:formData.Descrption,
          chack:[null],
        createdAt: Timestamp.now().toDate(),
   
      })
          .then(() => {
            toast("Article added successfully", { type: "success" });
            setProgress(0);
          })
          .catch((err) => {
            toast("Error adding article", { type: "error" });
          });
       });})}


  const [CourseTitle, setArticles] = useState([]);
  useEffect(() => {
    const articleRefs = collection(db, "Course");
    const q = query(articleRefs, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(CourseTitle);
    });
  }, []);



  return (
    <div> 
       
             <div className=" row  form-group">
<div className="col-6">
   <small id="helpId" className="form-text text-muted">Course Title</small>
              <select className="form-select"  name="CourseTitle" 
                value={formData.CourseTitle} 
                onChange={(e) => handleChange(e)}
              >
              {CourseTitle.length === 0 ? (
        <p>No articles found!</p>
      ) : (
        CourseTitle.map(
          ({
            id,
            Coursename,
          }) => (
                <option key={id}  value={Coursename}>{Coursename}  </option>
          )))}
              </select>
              <div className="invalid-feedback">
                Please select a valid IQ.
              </div>
            </div>

<div className="col-md-6"> 
                 <small id="helpId" className="form-text text-muted">Table of content</small>
                   <input type="text"
                     className="form-control" name="Tablecontent" id="" aria-describedby="helpId" placeholder="Table of content"
                     value={formData.Tablecontent}
                     onChange={(e) => handleChange(e)}
                     />
</div>
<legend>course information:</legend>
<div className="col-md-4"> 
                     <small id="helpId" className="form-text text-muted">Total time</small>
                     <input type="text"
                       className="form-control" name="Totaltime" id="" aria-describedby="helpId" placeholder="5hr"
                       value={formData.Totaltime}
                       onChange={(e) => handleChange(e)}
                       />
                </div>    
                   <div className="col-md-4">
                       <small id="helpId" className="form-text text-muted">Number</small>
                       <input type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week"
                         className="form-control" name="Number" id="" aria-describedby="helpId" placeholder="1,2,3"
                         value={formData.Number}
                         onChange={(e) => handleChange(e)}
                         />
              </div>
                <div className="col-md-4">       
                         <small id="helpId" className="form-text text-muted">date </small>
                         <input type="date"
                           className="form-control" name="Date" id="" aria-describedby="helpId" placeholder=""
                           value={formData.Date}
                           onChange={(e) => handleChange(e)}
                           />
                         </div>
                         <div className="col-md-4">       
                         <small id="helpId" className="form-text text-muted">video title</small>
                         <input type="text"
                           className="form-control" name="Videotitle" id="" aria-describedby="helpId" placeholder="title"
                           value={formData.Videotitle}
                           onChange={(e) => handleChange(e)}
                           />
                         </div>
                         
                         <div className="col-md-4">       
                         <small id="helpId" className="form-text text-muted">video time</small>
                         <input type="text"
                           className="form-control" name="Videotime" id="" aria-describedby="helpId" placeholder="00:4:00"
                           value={formData.Videotime}
                           onChange={(e) => handleChange(e)}
                           />
                         </div>
                         <div className="col-md-4">       
                         <small id="helpId" className="form-text text-muted">video </small>
                         <input type="file"
                          accept="video/mp4"
                           className="form-control" name="Video" id="" aria-describedby="helpId"
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
          <div class="col-md-12"> 
            <small id="helpId" class="form-text text-muted">Descrption</small>
           
              <textarea type="email"
                class="form-control" name="Descrption" id=""   value= {formData.Descrption}
                onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="Your Question here!"/>
</div>
                      <div className="col-md-4">       
                      
                      <button onClick={ handlePublish} className="btn btn-primary my-4"> Add </button>

                        </div>
                 </div>
     
    </div>
  )
}
