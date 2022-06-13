import React, { Component } from 'react'
import pasa from "./pasa.jpg"
import {BrowserRouter as Router,Route,Routes,Link,useParams,useLocation} from 'react-router-dom'
import WebViewBook from './WebViewBook';

 const ViewBook = (props) => {
  const {id}=useParams();
  const {Categorys}=useLocation().state;
  const {BookTitles}=useLocation().state;
  const { Authers}=useLocation().state;
  const { Ratings}=useLocation().state;
  const {  BookImages}=useLocation().state;
  const { PDFs}=useLocation().state;
  const { createdAts}=useLocation().state;
  const { Discrptions}=useLocation().state;
  return (   
    <div class="row card p-4 my-5">
        <div class="col-12"> 
        <div class="row">
        <div class="col-3 card " >
<img class=" my-3 mx-4" width="200" height="300" src={BookImages}></img>
        </div>
        <div class="col-6 my-5 mt-5">
<h3 className="text-black">{BookTitles} </h3>
<p  class="mx-4">By {Authers}</p>
<div>
Discrption
</div>
<p>{ Discrptions}</p>
      <div>
     
      <div class="bd-example">
      Download  <div class="progress mb-3">
        <div class="progress-bar w-75" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">70%</div>
        </div>
        view
        <div class="progress mb-3">
          <div class="progress-bar bg-success w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>
      
        </div>
      </div>
      <hr/>
      <span>Rating</span>  <label>{Ratings}</label>
          <p></p>
      <span>Category</span>  <label>{Categorys}</label>
          <p></p>
          
          <p></p>
        
          <a   href={PDFs} target="_blank" rel="noopener"> <button class="btn btn-sm btn-outline-secondary">Download</button>  </a> 
            
        </div>
        </div>
    </div>
   
    </div>
  )
}

export default ViewBook;