import React, { useEffect, useState } from 'react'
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc } from "firebase/firestore";

import { storage, db, auth } from "../component/firebaseConfigcopy";
import {BrowserRouter as Router,Route,Routes,Link,useParams,useLocation} from 'react-router-dom'
import { Alert } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 function Iqquestion(props) {
  const {id}=useParams();
  const {GroupT}=useLocation().state;
  const {ID}=useLocation().state;
  const {ids}=useLocation().state;
  console.log(GroupT);
  const [AllQuestion,setIQuestion]=useState([]); 
  const [progress, setProgress] = useState(0);
  
  const SelectionOption=(e)=>{
 
 setFormData({
   GroupTitle:GroupT,
   ID:ID
 })

  }
//for creating Question 
const [formData, setFormData] = useState({
  ID:'',
  key:"",
  GroupTitle:"",
  Question:"",
  Option1:"",
  Option2:"",
  Option3:"",
  Option4:"",  
  isCorrect1:false,
  isCorrect2:false,
  isCorrect3:false,
  isCorrect4:false,
  createdAt: Timestamp.now().toDate(),
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
const handleIScoreact=(e)=>{
  setFormData({ ...formData, [e.target.name]: e.target.checked });
}
const handlePublish=()=>{
  
 
  const articleRef = collection(db,"IQ",ids,"Question");
 // const docRef = doc(db, "IQ", id,"Question");
  setFormData({
    GroupTitle:"",
    Question:"",
    Option1:"",
    Option2:"",
    Option3:"",
    Option4:"",  
    isCorrect1:false,
  isCorrect2:false,
  isCorrect3:false,
  isCorrect4:false,
    createdAt: Timestamp.now().toDate(),
  });
  if (!formData.Question || !formData.Option1 || !formData.Option2) {
    toast("Please fill all the fields");
    return;
  }

  addDoc(articleRef, {
    text:formData.Question,
    options:[ 
               {id: 0, text:formData.Option1,isCorrect: formData.isCorrect1 },
               {id: 1, text:formData.Option2,isCorrect: formData.isCorrect2 },
               {id: 2, text:formData.Option3,isCorrect: formData.isCorrect3 },
               {id: 3, text:formData.Option4,isCorrect: formData.isCorrect4 },
              ],
    createdAt: Timestamp.now().toDate(),  
  })
    .then(() => {
      alert("Question added successfully", { type: "success" });
      setProgress(0);
    })
    .catch((err) => {
      alert("Error adding Question", { type: "error" });
    });

}

  return (
    <div>
        <h1>IQ Question</h1>
        <div className="row">
      
   <div className="col-8">
        
        <div class=" row  form-group">

        <label for="country" class="form-label">Group Title</label>
      
        <input class="form-select" value={GroupT}
        readOnly
        onChange={SelectionOption} name="title" id="question" />
     
         <div class="invalid-feedback">
           Please select a valid catagory.
         </div>


<div class="col-md-12"> 
            <small id="helpId" class="form-text text-muted">Question</small>
           
              <textarea type="email"
                class="form-control" name="Question" id=""   value= {formData.Question}
                onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="Your Question here!"/>
</div>
<legend>Answare List:</legend>
<div class="col-md-6"> 
                <small id="helpId" class="form-text text-muted text-center">A</small>
                <input type="text"
                  class="form-control" name="Option1"   value={formData.Option1}
                  onChange={(e) => handleChange(e)} id="" aria-describedby="helpId" placeholder="Option 1"/>
           <div class="form-check">
       <input type="checkbox" class="form-check-input"   value={formData.isCorrect1}
         onChange={(e) => handleIScoreact(e)} name="isCorrect1" id="same-address"/>
       <label class="form-check-label" for="same-address">Correct</label>
     </div>
           </div>    
              <div class="col-md-6">
                  <small id="helpId" class="form-text text-muted text-center">B</small>
                  <input type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week"
                    class="form-control" name="Option2"   value={formData.Option2}
                    onChange={(e) => handleChange(e)} id="" aria-describedby="helpId" placeholder="Option2"/>
          <div class="form-check">
       <input type="checkbox" class="form-check-input" name="isCorrect2"    value={formData.isCorrect2}
         onChange={(e) => handleIScoreact(e)}id="same-address"/>
       <label class="form-check-label"  for="same-address">Correct</label>
     </div>
         </div>
         <div class="col-md-6">       
                    <small id="helpId" class="form-text text-muted text-center">C </small>
                    <input type="text"
                      class="form-control" name="Option3" id=""   value={formData.Option3}
                      onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="Option 3"/>
                   <div class="form-check">
       <input type="checkbox" class="form-check-input" name="isCorrect3"   value={formData.isCorrect3}
         onChange={(e) => handleIScoreact(e)} id="same-address"/>
       <label class="form-check-label" for="same-address">Correct</label>
     </div>
                    </div>
                    <div class="col-md-6">       
                    <small id="helpId" class="form-text text-muted text-center">D</small>
                    <input type="text"
                      class="form-control" name="Option4" id=""   value={formData.Option4}
                      onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="Option 4"/>
                     <div class="form-check">
       <input type="checkbox" class="form-check-input"    value={formData.isCorrect4}
         onChange={(e) => handleIScoreact(e)} name="isCorrect4" id="same-address"/>
       <label class="form-check-label" for="same-address">Correct</label>
     </div>
                    </div>
                    
                   
                 <div class="col-md-4">       
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
                 <button class="btn btn-primary my-4" onClick={handlePublish}> Add </button>

                   </div>
            </div>
 
      </div>
          
         

    </div>
    </div>
  )
}
export default Iqquestion;