import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc,updateDoc, where } from "firebase/firestore";

import Chart from "react-apexcharts";
import { useAuthState } from "react-firebase-hooks/auth";
import { storage, db, auth } from "../component/firebaseConfigcopy";
import {BrowserRouter as Router,Route,Routes,Link,useParams,useLocation} from 'react-router-dom'
import { async } from '@firebase/util';
function Root() {
  const { id } = useParams(); 
  const [user] = useAuthState(auth);

 
  const [CourseTitle, setCourse] = useState([]);
  const [Quiz, setQuiz] = useState([]);
  const [Book, setBook] = useState([]);
  const [User, setUser] = useState([]);
  const [books,setbooks]=useState("0");  
  const [loopStop,setLopStop]=useState(1); 
  let bookValu='0';
  const [Hgraph,setHgraph]=useState({
    
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
            categories: ["Book", "Course", "User","Quiz"]
        }
      },
      series: [
        {
          name: "Color",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    
  })
  const [state,setState] =useState( {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
            categories: ["Book", "Course", "User","Quiz"]
        }
      },
     
      series: [],
      labels: ['Book', 'B', 'C', 'D', 'E']
    }
    
  
  )
  useEffect(() => {
    const articleRefs = collection(db, "Course");
    const q = query(articleRefs, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCourse(articles);
    
    });
   
    const BookRefs = collection(db, "Book");
    const B = query(BookRefs, orderBy("createdAt", "desc"));
    onSnapshot(B, (snapshot) => {
      const Book = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBook(Book);
      
    });
   
    const QuizRefs = collection(db, "IQ");
    const qq = query(QuizRefs, orderBy("createdAt", "desc"));
    onSnapshot(qq, (snapshot) => {
      const Quizs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuiz(Quizs);
      
    });
    const UserRefs = collection(db, "User");
    const U = query(UserRefs,  where("Type", "==", "User"));
    onSnapshot(U, (snapshot) => {
      const User = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUser(User);      

    });
  }, []);
  
  const  fun=()=>{
if(bookValu.length==="0"){
setbooks(Book.length);
    bookValu=books;
}else{
  bookValu=books;
}
  }
  useEffect(()=>{

    
  console.log(bookValu)
  },[loopStop]);
  return (
    
    
    <div>
       
  <Container>
  <div class="row p-5">

        <div class="col-xl-3 col-lg-6 col-md-12 col-sm-12">
            <div class="mb-4 card border-light"><div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-3 lh-1">
                    <div><span class="fs-6 text-uppercase fw-semi-bold">Book</span></div>
                    <div><span class="fe fe-shopping-bag fs-3 text-primary"></span>
                    </div></div>
                  <h2 class="fw-bold mb-1" >{Book.length}  </h2>
                    <span class="text-success fw-semi-bold"><i class="fe fe-trending-up me-1">
                        </i>+{Book.length}</span><span class="ms-1 fw-medium"> Number of Book</span>
                        </div></div>
                       </div>
                        
                        <div class="col-xl-3 col-lg-6 col-md-12 col-sm-12">

                            <div class="mb-4 card border-light"><div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3 lh-1">
                                    <div><span class="fs-6 text-uppercase fw-semi-bold">COURSES</span>
                                    </div><div><span class="fe fe-book-open fs-3 text-primary"></span>
                                    </div></div>
                                    <h2 class="fw-bold mb-1">{CourseTitle.length}</h2>
                                    <span class="text-danger fw-semi-bold"></span>
                                    <span class="ms-1 fw-medium">Number of Courses</span>
                                    </div></div></div><div class="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                                        <div class="mb-4 card border-light"><div class="card-body">
                                            <div class="d-flex align-items-center justify-content-between mb-3 lh-1">
                                                <div><span class="fs-6 text-uppercase fw-semi-bold">USER</span>
                                                </div><div><span class="fe fe-users fs-3 text-primary"></span>
                                                </div></div><h2 class="fw-bold mb-1">{User.length}</h2>
                                                <span class="text-success fw-semi-bold"><i class="fe fe-trending-up me-1"></i></span>
                                                <span class="ms-1 fw-medium">Students</span></div></div></div><div class="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                                                    <div class="mb-4 card border-light"><div class="card-body">
                                                        <div class="d-flex align-items-center justify-content-between mb-3 lh-1">
                                                            <div><span class="fs-6 text-uppercase fw-semi-bold">IQ Question</span></div><div>
                                                                <span class="fe fe-user-check fs-3 text-primary"></span></div></div>
                                                                <h2 class="fw-bold mb-1">{Quiz.length}</h2><span class="text-success fw-semi-bold">
                                                                    <i class="fe fe-trending-up me-1"></i>+{Quiz.length}</span><span class="ms-1 fw-medium">Question</span>
                                                </div></div></div></div> 
</Container>
<div className="row ">  

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12"> 
<Chart
              options={Hgraph.options}
              series={[
                {
                  name: "series-1",
                  data: [Book.length, CourseTitle.length, User.length, Quiz.length]
                }
              ]}
              type="area"
            width="500"
            />
            
        <Chart options={state.options} labels={state.labels} series={[Book.length,Quiz.length,User.length,CourseTitle.length]} type="donut" width="380" />
    
            </div>
           
            </div>
    </div>
  )
}

export default Root