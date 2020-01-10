import React, { Fragment, useEffect, useState } from 'react';
import {
    Link, 
    BrowserRouter as Router,
    Switch,
    useLocation
  } from "react-router-dom";


import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import   './css/style.css';
import { getCurrentProfile } from '../../actions/profile';
import Upload from './Upload';

const Sidebar = ({auth:{isAuthenticated,loading},logout,
    getCurrentProfile, 
    auth:{ user},
    menu:menu
    
}) => {

// var menuCount = 

let location = useLocation();
var actineName   = '';
if(location.pathname){
	var actineName = location.pathname;
	var actineName = actineName.replace("/", "");
}

if(['my-projects', 'create-project-task'].indexOf(actineName)>-1){
    var menuCount = 1;
} else if(['editProfile' ,''].indexOf(actineName)>-1){
    var menuCount = 3;
} else {
    var menuCount = 0;
}

const [count, setCount] = useState(menuCount);
useEffect(() => {
    getCurrentProfile();    
},[]);
const alert1 = e =>{
    if(count==e){ 
        setCount(e);
    }else{
        setCount(e);
    }   
} 

const authLinks = (  
    <div id="left" className={(menu==true ? 'active_menu' : 'in_active_menu')}>
        <div className="menu_scroll">
            <div className="left_media">
                <div className="media user-media">
                    <div className="user-media-toggleHover">
                        <span className="fa fa-user"></span>
                    </div>
					<div class="heading">
                        <Upload  />
                        <div class="info">
                            <h3><a href="#">{user && user[0].name}</a></h3>
                        </div>
                    </div>               
                </div>               
            </div>
            <ul id="menu">
                <li className={"dropdown_menu " + (count==0 ? 'active' : '')}>
                    <Link to="dashboard" id='0' onClick={e=>alert1(e.target.id)}>
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
                    	<li className={location.pathname + (count==1 ? 'show' : '')}>
                            <Link to="my-projects" id='1' onClick={e=>alert1(e.target.id)}>
                                <i className="fa fa-angle-right"></i>
                                &nbsp; My Projects
                            </Link>
                        </li>

                        <li>
                            <Link to="create-project-task" id='1' onClick={e=>alert1(e.target.id)}>
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Create Project & Task
                            </Link>
                        </li>

                        <li>
                            <Link to="#" id='1' onClick={e=>alert1(e.target.id)}>
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Bid Management
                            </Link>
                        </li>
                        <li>
                            <Link to="#" id='1' onClick={e=>alert1(e.target.id)}>
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Project Management
                            </Link>
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
                            <Link to="#" id='2' onClick={e=>alert1(e.target.id)}>
                                <i className="fa fa-angle-right"></i>
                                &nbsp; My Contractors
                            </Link>
                        </li>
                        <li>
                            <Link to="#" id='2' onClick={e=>alert1(e.target.id)}>
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Invite Contractors
                            </Link>
                        </li>

                        <li>
                            <Link to="#" id='2' onClick={e=>alert1(e.target.id)}>
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Manage My Preferred List
                            </Link>
                        </li>
                        <li>
                            <Link to="#" id='2' onClick={e=>alert1(e.target.id)}>
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Manage Qualification Standard
                            </Link>
                        </li> 
                    </ul>
                </li>
                <li  className={"dropdown_menu " + (count ==3 ? 'active' : '')}>
                    <Link to="#" id='3' onClick={e=>alert1(e.target.id)} >
                        <i  id='3' onClick={e=>alert1(e.target.id)} className="fa fa-pencil"></i>
                        <span  id='3' onClick={e=>alert1(e.target.id)} className="link-title menu_hide">&nbsp; Settings</span>
                        <span   id='3' onClick={e=>alert1(e.target.id)} className="fa arrow menu_hide"></span>
                    </Link>
                    <ul className={"sidebarbottom collapse  " + (count==3 ? 'show' : '')}>
                        <li>
                            <Link to="editProfile" id='3' onClick={e=>alert1(e.target.id)}>
                                <i className="fa fa-angle-right"></i>
                                &nbsp; General Setting
                            </Link>
                        </li>
                        <li>
                            <Link to="#" id='3' onClick={e=>alert1(e.target.id)}>
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Account Subscription
                            </Link>
                        </li> 
                        <li>
                            <Link to="#" id='3' onClick={e=>alert1(e.target.id)}>
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Payment Setting
                            </Link>
                        </li>
                        <li>
                            <Link to="#" id='3' onClick={e=>alert1(e.target.id)}>
                                <i className="fa fa-angle-right"></i>
                                &nbsp; User Management
                            </Link>
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
    profile: PropTypes.object.isRequired,
   
};
  
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  menu:state.mmenu.menu
});
  
export default connect(
    mapStateToProps,
    { getCurrentProfile }
)(Sidebar);