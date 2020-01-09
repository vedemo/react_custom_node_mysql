import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrentProfile } from '../../actions/profile';
import { constants } from 'crypto';
import Spinner from '../layout/Spinner';
import $ from 'jquery'; 
import   './css/style.css';
import image01 from './images/user-logo.png';
import image02 from './images/img1.png';
import image03 from './images/img2.png';
import image04 from './images/img3.png';



const Dashboard =({
  getCurrentProfile, 
  auth:{ user}, 
  profile:{profile,loading}

}) =>{
     useEffect(() => {
        getCurrentProfile();
       
     },[]);

     

    

    return   loading && profile===null ? <Spinner />:<Fragment>
     <section className="top-banner">
     <div class="user-logo">
          <img src={image01} alt="user-logos"/>
      </div>
      <div class="banner">
	       <h1>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.</h1>
	  </div>
     </section>

    

      
     <aside class="side-nav" id="show-side-navigation1">
     
      <i class="fa fa-bars close-aside hidden-sm hidden-md hidden-lg" data-close="show-side-navigation1"></i>
      <div class="heading">
        <img src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907008/medium/1501685726/enhance" alt="" />
        <div class="info">
          <h3><a href="#">John Marker</a></h3>
        </div>
      </div>
      <ul class="categories">
        <li class="active"><i class="fa fa-home fa-fw" aria-hidden="true"></i><a href="#"> Home</a>
          <ul class="side-nav-dropdown">
            <li><a href="#">New Project</a></li>
            <li><a href="#">Manage My Contractors</a></li>
            <li><a href="#">Payment</a></li>
          </ul>
        </li>
        <li>
		<i class="fa fa-folder-open fa-fw"></i>
		<a href="#"> My Projects</a>
          <ul class="side-nav-dropdown">
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">ipsum dolor</a></li>
            <li><a href="#">dolor ipsum</a></li>
            <li><a href="#">amet consectetur</a></li>
            <li><a href="#">ipsum dolor sit</a></li>
          </ul>
        </li>
        <li>
		<i class="fa fa-user fa-fw"></i>
		<a href="#"> My Contractors List</a>
          <ul class="side-nav-dropdown">
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">ipsum dolor</a></li>
            <li><a href="#">dolor ipsum</a></li>
            <li><a href="#">amet consectetur</a></li>
            <li><a href="#">ipsum dolor sit</a></li>
          </ul>
        </li>
        <li ><i class="fa fa-cog fa-fw"></i><a href="#"> Settings</a>
          <ul class="side-nav-dropdown">
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">ipsum dolor</a></li>
            <li><a href="#">dolor ipsum</a></li>
            <li><a href="#">amet consectetur</a></li>
            <li><a href="#">ipsum dolor sit</a></li>
          </ul>
        </li>
      </ul>
    </aside>
    <section id="contents">
      <div class="welcome">
	  <div class="container">
	    <div class="row">
	       <div class="col-md-4 col-sm-12 col-xs-12">
		     <div class="project-section">
			 <div class="circle">
			 <img src={image02} />
		 </div>
		  <h3>NEW PROJECT</h3>
			 </div>
			 
	    </div>

      <h1>jquery in React App</h1>
     <button>Click Me</button>
		     <div class="col-md-4 col-sm-12 col-xs-12">
		     <div class="project-section">
			 <div class="circle">
			 <img src={image03} />
			 </div>
			 <h3>MANAGE BY CONTRACTORS</h3>
			
		  </div>
	    </div>
		     <div class="col-md-4 col-sm-12 col-xs-12">
		     <div class="project-section">
			 <div class="circle">
			 <img src={image04}/>
			 </div>
			 <h3>PAYMENTS</h3>
		  </div>
		  
	    </div>
	  </div>
	  </div>
       
      </div>
</section>
      </Fragment>;
}
          
        

        
Dashboard.propTypes = {
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
)(Dashboard);