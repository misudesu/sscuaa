import {ref,uploadBytes, getDownloadURL,listAll,list} from "firebase/storage";
import { storage } from "../firebase/Storega";
import { v4 } from "uuid";
import { Component } from "react";
import Addbook from "./Addbook";
export default class Imagecov extends Component {
  constructor(props){
    super(props);
    this.state={
      imageUpload:null,
      imagesListRef:'',
      imageUrls:null,
      pdfUrl:null,
      pdf:null,
      progress:0
    }
  this.uploadFile=this.uploadFile.bind(this);
  }
  onChange(e){
    const id=e.target.id;
    if(id==="cover"){
      let files = e.target.files;
      this.setState({ imageUpload: files[0] }, () => { console.log(this.state.imageUpload) });
    
    }else if(id==="pdf"){
      let files = e.target.files;
      this.setState({ pdf: files[0] }, () => { console.log(this.state.pdf) });
    
    }
   
  }
  
   uploadFile = () => {

    if (this.state.imageUpload!=null) {
      const imageRef = ref(storage, `images/${this.state.imageUpload.name + v4()}`);
      uploadBytes(imageRef, this.state.imageUpload).then((snapshot) => {
       // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      //  this.setState("100");
        getDownloadURL(snapshot.ref).then((url) => {
          this.setState({
            imageUrls: url
          })
          
        });
      });
    }else if(this.state.pdf!=null){
      const imageRef = ref(storage, `BookPDF/${this.state.pdf.name + v4()}`);
      uploadBytes(imageRef, this.state.pdf).then((snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
        getDownloadURL(snapshot.ref).then((url) => {
          this.setState({
            pdfUrl: url
          })
          
        });
      });
    }
  
  };
 
 
  render() {
    return (
      <div className="App">
      <div class="col-md-4">       
                         <small id="helpId" class="form-text text-muted">Book cover</small>
                         <input type="file"
                           class="form-control" name="cover" id="cover" aria-describedby="helpId" placeholder=""
                           {...this.state.imageUpload}
                           onChange={(event) => {
                          this.onChange(event) }} />
                                         <input id="cover" type="checkbox" required onClick={
                                           this.uploadFile
                                         } />save image
                                          <progress value={this.state.progress} max="100"/> 
                         </div>
                         <div class="col-md-4">       
                         <small id="helpId" class="form-text text-muted">Book or PDF File </small>
                         <input type="file"
                           class="form-control" name="pdf" id="pdf" aria-describedby="helpId" 
                           
                           onChange={(event) => {
                            this.onChange(event) }}
                        />
                         <input type="checkbox" id="pdf" required onClick={
                                           this.uploadFile
                                         } />save pdf
                         </div>
     <Addbook imagelink={this.state.imageUrls} pdflink={this.state.pdfUrl}/>
    </div>
    )
  }
}
