import React, {useEffect, useState} from 'react'
import {ref,set,get,update,remove,child} from "firebase/database"
import {useNavigate,useParams} from "react-router-dom";
import {toast} from "react-toastify";
import StartFirebase from './firebaseConfig';
export class  Course extends React.Component {
  
constructor(props) {
  super(props);
  this.state = {
    db:'',
    username:'',
    fullname:'',
    phonenumber:'',
    dob:''
  }
  this.interface = this.interface.bind(this);
}

componentDidMount() {
  this.setState({
    db: StartFirebase()
  });
}

 

render(){
  return( 
    <>
      <div class="container-fluid">
    <label> enter Username </label>
    <input type="text" id="userbox" value={this.state.username}
    onChange={e=>{this.setState({username:e.target.value});}}
    />

<label> enter full name </label>
    <input type="text" id="userbox" value={this.state.fullname}
    onChange={e=>{this.setState({fullname:e.target.value});}}
    />

<label> enter phone Number </label>
    <input type="text" id="userbox" value={this.state.phonenumber}
    onChange={e=>{this.setState({phonenumber:e.target.value});}}
    />

<label> enter birth  </label>
    <input type="text" id="userbox" value={this.state.dob}
    onChange={e=>{this.setState({dob:e.target.value});}}
    />
    <button id="addBtn" onClick={this.interface}>Add Date</button>
    </div>
    </>
    
  )
}

interface(event){
  const id=event.target.id;
  if(id=='addBtn'){
    this.insertBtn();
  }else if(id=='updateBtn'){
    this.updateDate();
  }else if(id=='deleteBtn'){
this.deleteDate();
  }else if(id=='selectBtn'){
    this.selectDate();
      }
}


getAllInputs(){
  return {
    username: this.state.username,
    name: this.state.fullname,
    phone: Number (this.state.phonenumber),
    dob:this.state.dob
  }
};

insertBtn(){
  const db=this.state.db;
  const data=this.getAllInputs();
  set(ref(db,'course/'+data.username),
  {
    Fullname:data.name,
    Phonenumber:data.phone,
    dateofbirth:data.dob
  })
  .then(()=>{alert('data was added successfully')})
  .catch((error)=>{alert("there was an error , details:"+error)});
}
}


