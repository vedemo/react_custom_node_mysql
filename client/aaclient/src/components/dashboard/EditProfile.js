import React, { Fragment, useEffect, useState } from 'react';
import {Link,Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrentProfile } from '../../actions/profile';
import { constants } from 'crypto';
import Spinner from '../layout/Spinner';
import   './css/style.css';

import Sidebar from './Sidebar';
import TopBanner from './TopBanner';


const EditProfile = ({
  getCurrentProfile, 
  auth:{ user}, 
  profile:{profile,loading},
  setAlert,
  isAuthenticated


}) => {
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });
    const {name,email,password,password2}=formData;
    const onChange= e =>
    setFormData({...formData,[e.target.name]:e.target.value});



    const onSubmit= async e=>{
        e.preventDefault();
        if(password !== password2){
         setAlert('password not match','denger',3000);
        }else{
        console.log('sucess');
        // register({name,email,password})
         
        }
        
    }



    
return ( <Fragment>
 <div id="top">

     
   
</div>
<TopBanner/>
	
<div className="wrapper">

<Sidebar />

<div id="content" className="bg-container1">
    <section className="container">   
      <p className="lead"><i class="fa fa-user" aria-hidden="true"></i>
           Edit Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e) }>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name"
           value={user['0'].name}
           onChange={e=>onChange(e)}
           
           required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address"
           name="email"
           value={user['0'].email}
           onChange={e=>onChange(e)}
           required
           disabled
           />
        
        </div>
       
         
        <div className="form-group">
          <input type="text" placeholder="PhoneBio" name="phone"
           value={profile['0'].phone}
           onChange={e=>onChange(e)}           
           required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Company" name="company"
           value={name}
           onChange={e=>onChange(e)}           
           required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website"
           value={name}
           onChange={e=>onChange(e)}           
           required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Skills" name="skills"
           value={name}
           onChange={e=>onChange(e)}           
           required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Address" name="address"
           value={name}
           onChange={e=>onChange(e)}           
           required />
        </div>
        <input type="submit" className="btn btn-primary" value="Update" />
      </form>
      
      </section>
      </div>
      </div>
      </Fragment>
    )    
}


EditProfile.propTypes = {
   getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired 
};
  
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile  
});
  
export default connect(
   mapStateToProps,
   { getCurrentProfile }
)(EditProfile);