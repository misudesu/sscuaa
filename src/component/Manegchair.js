import React, { useEffect, useState,alart } from 'react'
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile, deleteUser,reauthenticateWithCredential} from "firebase/auth";
import { storage, db, auth } from "../component/firebaseConfigcopy";
import { toast } from "react-toastify";
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc,updateDoc, where } from "firebase/firestore";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";

import {BrowserRouter as Router,Route,Routes,Link,useParams,useLocation} from 'react-router-dom'
 function Manegchair(props) {
  const [user] = useAuthState(auth);
  const [formData, setformData] = useState({
    id:"",
  userName:"",
    Image:"",
    Email:"",
    Type:"",
    States:"",
    phoneNumber:"",
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

 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const handleSignup = async () => {
    try {
     
    
      await createUserWithEmailAndPassword(auth, email, password);
     // updateProfile(auth.currentUser, { displayName: name });
      setProgress(0);
         setformData({
id:auth.currentUser,
         });
      //navigate("/");
     handlePublish();
    } catch (error) {
      toast(error.code, { type: "error" });
    }
  };

  
const handlePublish = () => {
 
  const storageRef = ref(
    storage,
    `/user/${Date.now()}${formData.Image.name}`
  );
 
  const uploadImage = uploadBytesResumable(storageRef, formData.Image);
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
        id:"",
        userName:"",
          Image:"",
          Email:"",
          Type:"",
          States:"",
          phoneNumber:"",
          progress: 0,
       createdAt: Timestamp.now().toDate(),
      });
   
      
      getDownloadURL(uploadImage.snapshot.ref).then((url) => {
        const articleRef = collection(db, "User");
        try{ 
      createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, { displayName: name },{phptoURL:url});
        addDoc(articleRef, {
          ids:auth.currentUser.uid,
  userName:name,
    Image:url,
    Email:email,
    Type:"admin",
    States:"Active",
    phoneNumber:formData.phoneNumber,
   
 createdAt: Timestamp.now().toDate(),
        })
          .then(() => {
            toast("Article added successfully", { type: "success" });

            setProgress(0);
         
          })
          .catch((err) => {
            toast("Error adding article", { type: "error" });
          });
        }catch (error) {
          toast(error.code, { type: "error" });
        }
       
      
      });

    }
  )};

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const articleRef = collection(db, "User");
    const q = query(articleRef,  where("Type", "==", "admin")); 
      onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);

 const update=(e)=>{
  
  const userinfo = doc(db, "User", e.target.name);
  updateDoc(userinfo, {
    States: "D-Active",
  });
 
  }
 const Active=(e)=>{
  
  const userinfo = doc(db, "User", e.target.name);
  updateDoc(userinfo, {
    States: "Active",
  });
//   const credential = promptForCredentials();

// reauthenticateWithCredential(user, credential).then(() => {
//   // User re-authenticated.
// }).catch((error) => {
//   // An error ocurred
 
// });
  }
const Delete=(e)=>{
  
const user = auth.currentUser;
alert(user);
// deleteUser(user).then(() => {
//   // User deleted.
//   alart("user Deleted")
// }).catch((error) => {
//   // An error ocurred
//   // ...
// });
}
  return (
     
    <div class="">
 
        <div class=" row  form-group">
<div class="col-md-4">
           <small id="helpId" class="form-text text-muted">Name</small>
            <input class="form-control"  placeholder="Name" name="Name"
             onChange={(e) => {
              setName(e.target.value);
            }}
            />
</div>
<div class="col-md-4"> 
            <small id="helpId" class="form-text text-muted">Email</small>
              <input type="email"
                class="form-control" name="Email" id="" aria-describedby="helpId" placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                />
</div>
<div class="col-md-4"> 
                <small id="helpId" class="form-text text-muted">Password</small>
                    <input type="password"
                  class="form-control" name="Password" id="" aria-describedby="helpId" placeholder="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  />
           </div>    
              <div class="col-md-4">
                  <small id="helpId" class="form-text text-muted">Acount Type</small>
                  <input type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week"
                    class="form-control" name="Type" id="" aria-describedby="helpId" placeholder="states"
                    value={formData.Type}
                    onChange={(e) => handleChange(e)}
                    />
         </div>
         <div class="col-md-4">       
                    <small id="helpId" class="form-text text-muted">Phone</small>
                    <input type="phone"
                      class="form-control" name="phoneNumber" id="" aria-describedby="helpId" placeholder="phone"
                      value={formData.phoneNumber}
                      onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div class="col-md-4">
                      <small id="helpId" class="form-text text-muted">Photo</small>
                      <input type="file"
                        class="form-control" name="Image" id="" aria-describedby="helpId" placeholder="photo"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e)}
                        />
                 </div>   
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
    
    <div class="bd-example my-3">
      
         
       
         <div class="col-12">
           <button class="btn btn-primary" type="submit"  onClick={handlePublish} >Sign Up</button>
         </div>
      
      </div>
      



<table class="table">
 <thead>
 <th>Profile</th>
<th>Name</th>
<th>Email</th>
<th>Phone Number</th>
<th>States</th>
<th>Action</th>

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
<td><Link to="/profile"><img  width="50" height="50" src={Image}/> </Link> </td>
<td>{userName}</td>
<td>{Email}</td>
<td>{phoneNumber}</td>
<td>{States}</td>
<td>
<button class="btn btn-danger" name={id} onClick={(e) => update(e)}>D-Active</button>
<button class="mx-2 btn btn-primary"  name={id} onClick={(e) => Active(e)}>Active</button>
<button class="mx-2 btn btn-primary"  name={id} onClick={(e) => Delete(e)}>Delete</button>
</td>
</tr>
          )))}
 </tbody>
</table>
</div>

  )
}
export default Manegchair;