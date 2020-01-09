import React, { Fragment, useEffect, useState } from 'react';
import {Link,Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrentProfile,createProfile } from '../../actions/profile';

import Spinner from '../layout/Spinner';
import   './css/style.css';

import Sidebar from './Sidebar';
import TopBanner from './TopBanner';



const EditProfile = ({
  getCurrentProfile,
  createProfile, 
  auth:{ user}, 
  profile:{profile,loading},
  setAlert,
  
}) => {
    const [formData,setFormData]=useState({
        name:'',
        phone:'',
        company:'',
        website:'',
        
    });

    useEffect(() => {
      getCurrentProfile();
  
      setFormData({
        name:user && user[0].name,
        phone: loading || !profile[0].phone ? '' : profile[0].phone,
        company: loading || !profile[0].company ? '' : profile[0].company,
        website:loading || !profile[0].website ? '' : profile[0].website,
      });
    }, [loading, getCurrentProfile]);
    const {name,phone,company,website,status}=formData;

    const onChange= e =>
    setFormData({...formData,[e.target.name]:e.target.value});
    const onSubmit= async e=>{
        e.preventDefault();
        createProfile({name,phone,company,website});  
    }
    
return ( <Fragment>
  <div id="top"></div>
  <TopBanner/>
  <div className="wrapper">
    <Sidebar />
    <div id="content" className="bg-container1">
      <section className="container">   
        <p className="lead"><i class="fa fa-user" aria-hidden="true"></i>Create Project & Task</p>
      </section>
    </div>
  </div>
  </Fragment>
  )    
}


EditProfile.propTypes = {
   getCurrentProfile: PropTypes.func.isRequired,
   createProfile:PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired 
};
  
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile  
});
  
export default connect(
   mapStateToProps,
   { getCurrentProfile,createProfile }
)(EditProfile);