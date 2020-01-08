import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import { constants } from 'crypto';
import Spinner from '../layout/Spinner';
import Sidebar from './Sidebar';
import TopBanner from './TopBanner';



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
const [name, setName] = useState('Flavio');

useEffect(() => {
    getCurrentProfile();
   // console.log(`Hi ${name} you clicked ${count} times`);
},[]);

   

return   loading && profile===null ? <Spinner />:<Fragment>
       <div id="top">  

	  
</div>
<TopBanner/>
	
<div className="wrapper">

    <Sidebar />

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