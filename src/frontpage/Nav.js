import React from 'react';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import NoMatch from '../component/NoMatch';
import Footer from '../component/Footer';

import Root from '../component/Root';
import Login from '../component/Login';

function Nav() {
  return (
  
 <Router>
<Login/>
  <Routes>
    <Route exact path="/" element={<Root />}/>
    <Route exact path="/root" element={<Root />}/>

    <Route path="*" element={<NoMatch />}/>
  </Routes>
    
    <div> <Footer/></div>
  </Router>

  );
}

export default Nav;
