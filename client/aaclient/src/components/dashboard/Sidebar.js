import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import   './css/style.css';
import { getCurrentProfile } from '../../actions/profile';

const Sidebar = ({auth:{isAuthenticated,loading},logout,
    getCurrentProfile, 
    auth:{ user},     
}) => {
const [count, setCount] = useState(0);
const [name, setName] = useState('Flavio');

useEffect(() => {
    getCurrentProfile();    
},[]);


const alert1 = e =>{
    
     //alert(e+'ddd'+count)
     
    if(count==e){
        setCount(e);
    }else{
        setCount(e);
        }   
} 

const authLinks = (  
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
          <h3><a href="#">John Marker</a></h3>
        </div>
      </div>               
    </div>               
</div>
<ul id="menu">
    <li className={"dropdown_menu " + (count==0 ? 'active' : '')}>
        <Link to="/dashboard" id='0' onClick={e=>alert1(e.target.id)}>
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
                <Link to="/editProfile" id='3'onClick={e=>alert1(e.target.id)}>
                    <i className="fa fa-angle-right"></i>
                    &nbsp; Edit Profile
                </Link>
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
);
  
const guestLinks = null;

return (      
        !loading &&(<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)
    )
}

Sidebar.propTypes = {
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
)(Sidebar);