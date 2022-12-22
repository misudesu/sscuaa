import React,{useState} from 'react';
import { collection, onSnapshot, orderBy, query ,Timestamp} from "firebase/firestore";
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'
import NoMatch from './component/NoMatch';
import Dashboard from './component/Dashboard';

import Root from './component/Root';
import Book from './component/Book';
import Tool from './component/Tool';
import Addcourse from './component/Addcourse';
import Footer from './component/Footer';
import Leftsidemenu from './component/Leftsidemenu';
import Topbar from './component/Topbar';
import Allcourse from './component/Allcourse';

import ViewCourse from './component/ViewCourse';
import ViewBook from './component/ViewBook';
import Manegchair from './component/Manegchair';
import User from './component/User';
import Userview from './component/Userview';
import { storage, db, auth } from "./component/firebaseConfigcopy";
import LogIn from './frontpage/Nav';

import Login from './component/Login';
import Profile from './component/Profile';
import  Quiz  from './quiz/Quiz';
import Iqquestion from './quiz/Iqquestion';
import Allquiz from './quiz/Allquiz';
import WebViewBook from './component/WebViewBook';
import Addvideo from './component/Addvideo';
import VideoPlay from './component/VideoPlay';
import { useAuthState } from "react-firebase-hooks/auth";
import LiveClass from './bignning/LiveClass';
import AppLiveClass from './bignning/AppLiveClass';
import Live from './Live';
import FeedBack from './component/FeedBack';
import Indexs from './bignning/Home'
import About from './bignning/About';
import TopNav from './bignning/TopNav';
import Contact from './bignning/Contact';
import Team from './bignning/Team';
import CourseCata from './bignning/CourseCata';
import Testimonal from './bignning/Testimonal';
import Ide from './IDE/Ide';
import Ides from './IDE/Ides';
function App() {
  const [showNav, setShowNav] = useState(true);
  const [user] = useAuthState(auth);
  return (
    <> 
   
 <Router>
   {!user ? (
<>

{   showNav &&
<Login/>
}
<Routes> 
    {/* <Route exact path="/" element={<Indexs />}/>
   */}
    {/* <Route path="/login" element={<Login />}/>  */}
     {/* bignning page nav */}
     {/* <Route path="/About" element={<About/>}/>
     <Route path="/Courses" element={<CourseCata/>}/>
     <Route path="/Team" element={<Team/>}/>
     <Route path="/Contact" element={<Contact/>}/>
     <Route path="/testamonal" element={<Testimonal/>}/>
     <Route path="/ide" element={<Ide/>}/>
     <Route path="/ids" element={<Ides funcNav={setShowNav}/>} />
     <Route path="/AppLiveClass" element={<AppLiveClass funcNav={setShowNav}/>} />
     <Route path="/LiveRoom/" element={<LiveClass />}/> 
    <Route path="*" element={<NoMatch />}/> */}
    </Routes>
</>
   ):( 
<>
<div  >
    
  <div >
  <Leftsidemenu/> 
        <div class="content-page">
            <div class="content">
            <Topbar/>
            <div class="container-fluid">         
    <Routes>
    <Route exact path="/" element={<Root />}/>
    <Route exact path="/root" element={<Root />}/>
    <Route path="/Addcourse" element={<Addcourse/>}/>
    <Route path="/Addvideo/:type" element={<Addvideo/>}/>
    <Route path="/videoPlay/:type" element={<VideoPlay/>}/>
    <Route path="/liveClass" element={<Live/>}/>
    <Route path="/allcourse" element={<Allcourse/>}/>
    <Route path="/dashboard" element={<Dashboard />}/>
    <Route path="/book" element={<Book />}/>
    <Route path="/viewbook/:type" element={<ViewBook />}/>
    <Route path="/manegchair/:type" element={<Manegchair />}/>
    <Route path="/user" element={<User />}/>
    <Route path="/userview/:type" element={<Userview />}/>
    <Route path="/logout" element={<Login />}/>
    <Route path="/quiz" element={<Allquiz />}/>
    <Route path="/quizquestion/:type" element={<Quiz />}/>
    <Route path="/AddIQ/:type" element={<Iqquestion />}/>
    <Route path="/login" element={<Login />}/> 
    <Route path="/profile" element={<Profile />}/> 
    <Route path="/webview/" element={<WebViewBook />}/> 
    <Route path="/LiveRoom/" element={<LiveClass />}/> 
    <Route path="/IDE" element={<Ide />}/>       
    <Route path="/viewvideo" element={<ViewCourse />}/>
    <Route path="/tool" element={<Tool />}/>
   <Route path="/feedback" element={<FeedBack />}/>
    {/* bignning page nav */}
    <Route path="/About" element={<About/>}/>
    <Route path="*" element={<NoMatch />}/>
  </Routes>
      </div>
            </div>
            </div>
            </div>
 </div>
    <div> <Footer/></div>
   
</>
    )}
  </Router>
  </>
  );
}

export default App;
