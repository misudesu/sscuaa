import React, { useEffect, useState } from 'react'
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../component/firebaseConfigcopy";
import {BrowserRouter as Router,Route,Routes,Link,useParams,useLocation} from 'react-router-dom'
import { Alert } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function GroupTitle({DB}) {
    const [progress, setProgress] = useState(0);
    const [groupTI,setgroupTI]=useState();
    
    const Catagory=(e)=>{
      setgroupTI(e.target.value);
    }
    const creatGroupTitle = () => {
      if(!groupTI){
        toast("Please fill all the fields");
        return;
        }
        
        const QuestionRef = addDoc(collection(db, DB), {
          
          title: groupTI,
          createdAt: Timestamp.now().toDate(),  
        })
          .then(() => {
            setgroupTI("");
            Alert("Group Title added successfully", { type: "success" });
            setProgress(100);
          })
          .catch((err) => {
            toast("Error adding Group Title", { type: "error" });
          });
    }
    return(
        <>
        <div class="col-md-6 col-lg-8 order-md-last">
                   <h4 class="d-flex justify-content-between align-items-center mb-3">
                     <span class="text-primary">IQ Question Group Title</span>
                    </h4>
                   <ul class="list-group mb-3">
                     <li class="list-group-item d-flex justify-content-between lh-sm">
                       <div>
                         <h6 class="my-0">Example</h6>
                         <small class="text-muted">Front End</small>
                       </div>
                       <span class="text-muted">1</span>
                     </li>
                     <li class="list-group-item d-flex justify-content-between lh-sm">
                       <div>
                         <h6 class="my-0">Example</h6>
                         <small class="text-muted">Back End</small>
                       </div>
                       <span class="text-muted">2</span>
                     </li>
                     <li class="list-group-item d-flex justify-content-between lh-sm">
                       <div>
                         <h6 class="my-0">Example</h6>
                         <small class="text-muted">Brief description</small>
                       </div>
                       <span class="text-muted">3</span>
                     </li>
                   
                   </ul>
           
                  
                     <div class="input-group">
                       <input type="text" class="form-control" name="GroupTi" onChange={Catagory} placeholder="catagory"/>
                       <button type="submit" class="btn btn-secondary" onClick={creatGroupTitle}>Add</button>
                     </div>
                  
                 </div>
                 </>
    )
};
export default GroupTitle;