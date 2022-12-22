import GroupTitle from '../quiz/GroupTitle'

import  {  useEffect, useState } from 'react'
import {toast} from "react-toastify";

import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../component/firebaseConfigcopy";

export default function Addcourse() {
  const [progress, setProgress] = useState(0);
  
  const [QUESTIONgroup, setArticles] = useState([]);
  useEffect(() => {
    const articleRef = collection(db, "IQ");
    const q = query(articleRef, orderBy("title", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(QUESTIONgroup);
    });
  }, []);
//for creating Question 
const [Qkey,setQkey]=useState({
  Qkey:''
})
const [formData, setFormData] = useState({
  ID:'',
  Lecturename:"",
  LectureImage:"",
  Coursename:"",
  TotalHoure:"",
   Level:"",
   Catagory:"",
  
   ResourseLink:"",
   IQQuestion:"",
   Reletedcourse:"",
   Rating:"",
   completedview:"",
   coverimage:"",
   Descrption:"",
   Discrption:"",
  createdAt: Timestamp.now().toDate(), 
});

const handleImageChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.files[0] }); 
};
const onChangeHandler = (e) => {
  const index = e.target.selectedIndex;
  const el = e.target.childNodes[index]
  const option =  el.getAttribute('id');
  if(option==null)  {
    onChangeHandler(e)
  }
 setQkey({
   Qkey:option
 })
 console.log(Qkey.Qkey)
}
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
  onChangeHandler(e);
};

const handlePublish = () => {
  if ( !formData.LectureImage|| !formData.coverimage|| !formData.Lecturename) {
    alert("Please fill all the fields");
    return;
  }

  const storageRefLImage = ref(
    storage,
    `/Course/${Date.now()}${formData.LectureImage.name}`
  );

  

  const storageRefCoImage = ref(
    storage,
    `/Course/${Date.now()}${formData.coverimage.name}`
  );

  const LectureImage = uploadBytesResumable(storageRefLImage, formData.LectureImage);

  const CoverImage = uploadBytesResumable(storageRefCoImage, formData.coverimage);

  LectureImage.on(
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
      CoverImage.on(
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
     
  setFormData({
    Lecturename:"",
    LectureImage:"",
    Coursename:"",
    TotalHoure:"",
     Level:"",
     Catagory:"",
     
     ResourseLink:"",
     IQQuestion:"",
     Reletedcourse:"",
     Rating:"",
     Descrption:"",
     completedview:"",
     coverimage:"",
     Discrption:"",
    createdAt: Timestamp.now().toDate(),
  });
  
  getDownloadURL(LectureImage.snapshot.ref).then((LImage) => {
    const articleRef = collection(db, "Course");
   
      getDownloadURL(CoverImage.snapshot.ref).then((COImage)=>{
   addDoc(articleRef, {
    Lecturename:formData.Lecturename,
    LectureImage:LImage,
    Descrption:formData.Descrption,
    Coursename:formData.Coursename,
    TotalHoure:formData.TotalHoure,
     Level:formData.Level,
     Catagory:formData.Catagory,
    
   
     ResourseLink:formData.ResourseLink,
     IQQuestion:formData.IQQuestion,
     Reletedcourse:formData.Reletedcourse,
     Rating:formData.Rating,
     completedview:formData.completedview,
     coverimage:COImage,
     Discrption:formData.Discrption,
     Qkey:Qkey.Qkey,
    createdAt: Timestamp.now().toDate(),
    })
      .then(() => {
        alert("Article added successfully", { type: "success" });
        setProgress(0);
      })
      .catch((err) => {
        alert("Error adding article", { type: "error" });
      });
    });
 
  });
}
);
        });


};

  return (
    <div>
      {     QUESTIONgroup.length === 0 ?(
		<p>please create a new Question</p>
	  ) : (
     <div className="row g-5">
      <div className="col-md-5 col-lg-4 order-md-last">
       {/* <GroupTitle DB="Course"/> */}
      </div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Add a course in detile!</h4>
     
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">Lecture name</label>
              <input type="text" className="form-control" name="Lecturename" id="firstName" 
               value= {formData.Lecturename}
               onChange={(e) => handleChange(e)}
              />
              <div className="invalid-feedback">
                Valid lecture name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">Lecture Image</label>
              <input type="file" className="form-control" name="LectureImage" id="lastName" placeholder="" 
                 accept="image/*"
                 onChange={(e) => handleImageChange(e)}/>
                               
                
              <div className="invalid-feedback">
                Valid image is required.
              </div>
            </div>
            <div class="col-md-12"> 
            <small id="helpId" class="form-text text-muted">Lecture Descrption </small>
           
              <textarea type="email"
                class="form-control" name="Descrption" id=""   value= {formData.Descrption}
                onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="Your Question here!"/>
</div>
            <div className="col-12">
              <label for="username" className="form-label">Course name</label>
              <div className="input-group has-validation">
             
                <input type="text" className="form-control" name="Coursename" id="username" placeholder="Username" required=""
                 value= {formData.Coursename}
                 onChange={(e) => handleChange(e)}
                />
              <div className="invalid-feedback">
                  Your course name is required.
                </div>
              </div>
            </div>

            <div className="col-6">
              <label for="email" className="form-label">Total Houre <span className="text-muted"></span></label>
              <input type="time" className="form-control" name="TotalHoure" id="time" placeholder="00:00:00"
               value= {formData.TotalHoure}
               onChange={(e) => handleChange(e)}
              />
              <div className="invalid-feedback">
                Please enter a valid times for course.
              </div>
            </div>

            <div className="col-md-6">
              <label for="country" className="form-label">Level</label>
              <select className="form-select" id="country" name="Level" required=""
               value= {formData.Level}
               onChange={(e) => handleChange(e)}
              >
                <option value="">Choose...</option>
                <option>Beginner </option>
                <option>Advanced </option>
              </select>
              <div className="invalid-feedback">
                Please select a valid catagory.
              </div>
            </div>

            <div className="col-md-4">
              <label for="country" className="form-label">Catagory</label>
              <select className="form-select" id="country" name="Catagory"
               value= {formData.Catagory}
               onChange={(e) => handleChange(e)}
              >
                <option value="">Choose...</option>
                <option>Front End </option>
                <option>Back End </option>
                <option>Popular</option>
                <option>new</option>
                <option>Recomended</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid catagory.
              </div>
            </div>
           
          

            <div className="col-12">
              <label for="resourse" className="form-label">Resourse Link <span className="text-muted"></span></label>
              <input type="text|link" className="form-control" name="ResourseLink" id="resourse" placeholder="github link"
               value= {formData.ResourseLink}
               onChange={(e) => handleChange(e)}
              />
           
            </div>

            <div className="col-12">
              <label for="iq" className="form-label">IQ Question</label>

              <select className="form-select" id="iq" name="IQQuestion"
               value= {formData.IQQuestion}
               onChange={(e) => handleChange(e)} onLoad={(e) => handleChange(e)} onClick={(e) => handleChange(e)}
              >
                 {QUESTIONgroup.length === 0 ? (
        <p>No articles found!</p>
      ) : (
        QUESTIONgroup.map(
          ({
            id,
        title,
          }) => (
                <option key={id} id={id}  value={title}>{title} </option> 
            
          )))}
              </select>
              <div className="invalid-feedback">
                Please select a valid IQ.
              </div>
            </div>

            <div className="col-md-5">
              <label for="Rcourse" className="form-label">Releted course</label>
              <select className="form-select" id="Rcourse" name="Reletedcourse"
               value= {formData.Reletedcourse}
               onChange={(e) => handleChange(e)}
              >
                <option value="">Choose...</option>
                <option>c++</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid releted course.
              </div>
            </div>

            <div className="col-md-4">
              <label for="state" className="form-label">Rating</label>
              <select className="form-select" id="state" name="Rating"
               value= {formData.Rating}
               onChange={(e) => handleChange(e)}
              >
                <option value="">Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid rating.
              </div>
            </div>

            <div className="col-md-3">
              <label for="completed" className="form-label">completed view</label>
              <input type="number" className="form-control" id="completed" placeholder="" name="completedview"
               value= {formData.completedview}
               onChange={(e) => handleChange(e)}
              />
              <div className="invalid-feedback">
                completed view  required.
              </div>
            </div>
          </div>

          <hr className="my-4"/>

          <div className="form-check">
          
            <label className="form-check-label" for="same-address">Course cover image must be 500 * 500 and size limte 1mb</label>
          </div>

          <div className="form-check">
          <input type="file" width="500px" height="200px" className="form-control" name="coverimage" id="lastName" placeholder="" 
          accept="image/*"
          onChange={(e) => handleImageChange(e)}/>
                        
          
              
          </div>

          <hr className="my-4"/>

          <h4 className="mb-3">Discrption</h4>

          <div className="my-3">
          <label for="discrption" className="form-label"></label>
              <input type="text"  className="form-control col-8"  name="Discrption" 
               value= {formData.Discrption}
               onChange={(e) => handleChange(e)}
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

          <hr className="my-4"/>

          <button onClick={handlePublish} className="w-100 btn btn-primary btn-lg" type="submit">Continue</button>
     
  
    </div>
    </div>
    )}
    </div>
  )
}
