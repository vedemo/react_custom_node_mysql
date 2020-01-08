import React, { Fragment,Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';

class Upload extends Component {
  UPLOAD_ENDPOINT = 'http://localhost:5000/api/profile/userimage';
    constructor(props){
      super(props)
      this.state = {

        file: 'http://localhost:5000/routes/api/images/'+ (this.props.auth.user[0].profile_image ? this.props.auth.user[0].profile_image : 'default.jpg' ),
        
      } 
      this.handleChange = this.handleChange.bind(this);
    } 

    
    handleChange(event) {

      this.setState({
        file: URL.createObjectURL(event.target.files[0])
      })

      const formData = new FormData();
      formData.append('myFile',event.target.files[0])
      return   axios.post(this.UPLOAD_ENDPOINT, formData,{
          headers: {
              'content-type': 'multipart/form-data'
          }
      });
      
    } 
    
    render() {
      //this.props.auth.user[0].profile_image
      return (
        <Fragment>
          <input type="file" className="img-upload-input" onChange={this.handleChange}/>
          <img className="img-upload" width="100px" src= {this.state.file || this.props.src}/>
        </Fragment>
      );
    }
  }


  const mapStateToProps = state => ({
    auth: state.auth
  });


  export default connect(
    mapStateToProps
    
)(Upload);
  