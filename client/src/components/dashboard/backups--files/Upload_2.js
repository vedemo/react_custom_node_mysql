import React, { Component } from 'react';
import axios from 'axios';

class Upload extends Component {

  UPLOAD_ENDPOINT = 'http://localhost:5000/api/profile/userimage';

    constructor(props){
      super(props)
      this.state = {
        file: 'https://placeimg.com/320/320/animals',
        imageUrl:null
      } 
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this)
      this.uploadFile = this.uploadFile.bind(this)
    } 

    async onSubmit(e){
      e.preventDefault()
      console.log("fikle")
      console.log(this.state.file) 
      let res = await this.uploadFile(this.state.file);
      console.log(res.data);
  }
   onChange(e) {
    this.setState({file:e.target.files[0]});
}
    async uploadFile(file){
      const formData = new FormData();
      formData.append('myFile',file)
      return  await axios.post(this.UPLOAD_ENDPOINT, formData,{
          headers: {
              'content-type': 'multipart/form-data'
          }
      });
    }
    
    render() {
      return (
        <div className="image-upload-div">
          <form onSubmit={ this.onSubmit }>
            <input type="file" onChange={ this.onChange } name="myFile" />
            <button type="submit">Upload File</button>
          </form>
        </div>
      );
    }
  }

  export default Upload;