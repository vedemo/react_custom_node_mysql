import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrentProfile } from '../../actions/profile';
import { constants } from 'crypto';
import Spinner from '../layout/Spinner';

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
 
  const [count, setCount] = useState(0);
  
     useEffect(() => {
        getCurrentProfile();
        //console.log(`Hi ${name} you clicked ${count} times`);
        
     },[]);

     const alert1 = e =>{
          // alert(e)
         if(count==e){
          setCount(0);
         }else{
          setCount(e);
         }
     
  
    }

   
return   loading && profile===null ? <Spinner />:<Fragment>
            
<div id="top">

     
   
</div>
<section className="top-banner">
	   <div className="user-logo1">
          <img src="img/user-logo.png" alt="user-logos" />
      </div>
      <div className="banner">
	       <h1>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.</h1>
	  </div>
    </section>
	
<div className="wrapper">
    <div id="left">
        <div className="menu_scroll">
            <div className="left_media">
                <div className="media user-media">
                    <div className="user-media-toggleHover">
                        <span className="fa fa-user"></span>
                    </div>
					
					<div class="heading">
        <img src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907008/medium/1501685726/enhance" alt="" />
        <div class="info">
          <h3><a href="#">Welcome  {user && user[0].name}</a></h3>
        </div>
      </div>
               
                </div>
               
            </div>
            <ul id="menu">
                <li className={"dropdown_menu " + (count==0 ? 'active' : '')}>
                    <Link href="#">
                        <i className="fa fa-home"></i>
                        <span className="link-title menu_hide">Home</span>
                    </Link>
                </li>
                
                <li  className={"dropdown_menu " + (count==1 ? 'active' : '')}>
                    <Link to="#" id='1' onClick={e=>alert1(e.target.id)} >
                        <i id='1' onClick={e=>alert1(e.target.id)} className="fa fa-anchor"></i>
                        <span id='1' onClick={e=>alert1(e.target.id)} className="link-title menu_hide">&nbsp; My Projects</span>
                        <span  id='1' onClick={e=>alert1(e.target.id)} className="fa arrow menu_hide"></span>
                    </Link>
                    <ul className={"sidebarbottom collapse  " + (count==1 ? 'show' : '')}>
                     
                        
                        <li>
                            <a href="animations.html">
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Animations
                            </a>
                        </li>

                        <li>
                            <a href="sliders.html">
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Sliders
                            </a>
                        </li>
                        <li>
                            <a href="notifications.html">
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Notifications
                            </a>
                        </li>
                        

                        
                        
                       
                    </ul>
                </li>
                <li  className={"dropdown_menu " + (count ==2 ? 'active' : '')}>
                    <Link to="#" id='2'  onClick={e=>alert1(e.target.id)} >
                        <i id='2'  onClick={e=>alert1(e.target.id)} className="fa fa-th-large"></i>
                        <span id='2'  onClick={e=>alert1(e.target.id)} className="link-title menu_hide">&nbsp; My Contractors List</span>
                        <span  id='2'  onClick={e=>alert1(e.target.id)} className="fa arrow menu_hide"></span>
                    </Link>
                    <ul className={"sidebarbottom collapse  " + (count==2 ? 'show' : '')}>
                        <li>
                            <a href="widgets1.html">
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Widgets 1
                            </a>
                        </li>
                        <li>
                            <a href="widgets2.html">
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Widgets 2
                            </a>
                        </li>
                        
                    </ul>
                </li>
                <li  className={"dropdown_menu " + (count ==3 ? 'active' : '')}>
                    <Link to="#" id='3'onClick={e=>alert1(e.target.id)} >
                        <i  id='3'onClick={e=>alert1(e.target.id)} className="fa fa-pencil"></i>
                        <span  id='3'onClick={e=>alert1(e.target.id)} className="link-title menu_hide">&nbsp; Settings</span>
                        <span   id='3'onClick={e=>alert1(e.target.id)} className="fa arrow menu_hide"></span>
                    </Link>
                    <ul className={"sidebarbottom collapse  " + (count==3 ? 'show' : '')}>
                        <li>
                            <a href="form_elements.html">
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Profile
                            </a>
                        </li>
                        <li>
                            <a href="form_layouts.html">
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Form Layouts
                            </a>
                        </li>
                       

                    </ul>
                </li>
               
               
                
               
               
            </ul>
           
        </div>
    </div>

    <div id="content" className="bg-container">
       
       <div className="">
	   
           <div className="bg-container">
               <div className="">
                   <div className="">
                       <div className="container">
	    <div className="row">
	       <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
		     <div className="project-section">
			 <div className="circle">
			 <img src="img/img1.png" />
		 </div>
		  <h3>NEW PROJECT</h3>
			 </div>
			 
	    </div>
		     <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
		     <div className="project-section">
			 <div className="circle">
			 <img src="img/img2.png"/>
			 </div>
			 <h3>MANAGE BY CONTRACTORS</h3>
			
		  </div>
	    </div>
		     <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
		     <div className="project-section">
			 <div className="circle">
			 <img src="img/img3.png" />
			 </div>
			 <h3>PAYMENTS</h3>
		  </div>
		  
	    </div>
	  </div>
	  </div>
                   </div>
               </div>
              
              
           </div>
          
       </div>
     
   </div>
    
</div>

{/*sdsssssssssssssssssss*/}


  
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