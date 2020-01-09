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
  const [name, setName] = useState('Flavio');

     useEffect(() => {
        getCurrentProfile();
        console.log(`Hi ${name} you clicked ${count} times`);
     },[]);

     const alert1 = e =>{
      alert(e)
         if(count==e){
          setCount(0);
         }else{
          setCount(e);
         }
     
  
    }

    

    return   loading && profile===null ? <Spinner />:<Fragment>
             {/*cccccccccccccc*/}
             <div id="top">
      
      <p>
    Hi {name} you clicked {count} times
  </p>
  <button id='ajeet'  onClick={e=>alert1(e.target.id)}>Click me</button>
  <button onClick={() => setName(name === 'Flavio' ? 'Roger' : 'Flavio')}>
    Change name
  </button>
   
</div>

<div className="wrapper">
    <div id="left">
        <div className="menu_scroll">
            <div className="left_media">
                <div className="media user-media">
                    <div className="user-media-toggleHover">
                        <span className="fa fa-user"></span>
                    </div>
                    <div className="user-wrapper">
                        <a className="user-link" href="#">
                            <img className="media-object img-thumbnail user-img rounded-circle admin_img3" alt="User Picture"
                                 src="img/admin.jpg" />
                            <p className="user-info menu_hide">Welcome Micheal</p>
                        </a>
                    </div>
                </div>
                <hr/>
            </div>
            <ul id="menu">
                <li>
                    <a href="#">
                        <i className="fa fa-home"></i>
                        <span className="link-title menu_hide">&nbsp;Dashboard 1</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-tachometer"></i>
                        <span className="link-title menu_hide">&nbsp;Dashboard 2

                        </span>
                    </a>
                </li>
                <li  className={"dropdown_menu " + (count==1 ? 'active' : '')}>
                    <Link to="#" id='1' onClick={e=>alert1(e.target.id)} >
                        <i id='1' onClick={e=>alert1(e.target.id)} className="fa fa-anchor"></i>
                        <span id='1' onClick={e=>alert1(e.target.id)} className="link-title menu_hide">&nbsp; Components</span>
                        <span  id='1' onClick={e=>alert1(e.target.id)} className="fa arrow menu_hide"></span>
                    </Link>
                    <ul className={"sidebarbottom collapse  " + (count==1 ? 'show' : '')}>
                        <li>
                            <a href="#">
                                <i className="fa fa-angle-right"></i>
                                &nbsp; General Components
                            </a>
                        </li>
                        <li>
                            <a href="cards.html">
                                <i className="fa fa-angle-right"></i>
                                <span className="link-title">&nbsp;Cards</span>
                            </a>
                        </li>
                        <li>
                            <a href="transitions.html">
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Transitions
                            </a>
                        </li>
                        <li className="active">
                            <a href="buttons.html">
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Buttons
                            </a>
                        </li>
                        <li>
                            <a href="icons.html">
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Icons
                            </a>
                        </li>
                        <li>
                            <a href="tooltips.html">
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Tooltips
                            </a>
                        </li>
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
                        <span id='2'  onClick={e=>alert1(e.target.id)} className="link-title menu_hide">&nbsp; Widgets</span>
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
                        <span  id='3'onClick={e=>alert1(e.target.id)} className="link-title menu_hide">&nbsp; Forms</span>
                        <span   id='3'onClick={e=>alert1(e.target.id)} className="fa arrow menu_hide"></span>
                    </Link>
                    <ul className={"sidebarbottom collapse  " + (count==3 ? 'show' : '')}>
                        <li>
                            <a href="form_elements.html">
                                <i className="fa fa-angle-right"></i>
                                &nbsp; Form Elements
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
       <header className="head">
           <div className="main-bar">
              <div className="row no-gutters">
                  <div className="col-lg-6 col-md-4 col-sm-4">
                      <h4 className="nav_top_align">
                          <i className="fa fa-anchor"></i>
                          Buttons
                      </h4>
                  </div>
                  <div className="col-lg-6 col-md-8 col-sm-8">
                      <ol className="breadcrumb float-right nav_breadcrumb_top_align">
                          <li className="breadcrumb-item">
                              <a href="index1.html">
                                  <i className="fa fa-home" data-pack="default" data-tags=""></i>
                                  Dashboard
                              </a>
                          </li>
                          <li className="breadcrumb-item">
                              <a href="#">Components</a>
                          </li>
                          <li className="breadcrumb-item active">Buttons</li>
                      </ol>
                  </div>
              </div>
           </div>
       </header>
       <div className="outer buttons_page">
           <div className="inner bg-container">
               <div className="card">
                   <div className="card-block">
                       <div className="row">
                           <div className="col-lg-12">
                               <div className="row">
                                   <div className="col-12 col-lg-6 m-t-35 buttons_center">
                                       <h5>Basic Buttons</h5>
                                       <div className="row">
                                           <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                               <button className="btn btn-secondary">Button</button>
                                           </div>
                                           <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                               <button className="btn btn-primary">Button</button>
                                           </div>
                                           <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                               <button className="btn btn-success">Button</button>
                                           </div>
                                           <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                               <button className="btn btn-warning">Button</button>
                                           </div>
                                           <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                               <button className="btn btn-danger">Button</button>
                                           </div>
                                           <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                               <button className="btn btn-info">Button</button>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="col-12 col-lg-6 m-t-35 buttons_center">
                                       <h5>Disabled Buttons</h5>
                                       <div className="row disabled_buttons">
                                           <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                               <button className="btn btn-secondary disabled">Button</button>
                                           </div>
                                           <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                               <button className="btn btn-primary disabled">Button</button>
                                           </div>
                                           <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                               <button className="btn btn-success disabled">Button</button>
                                           </div>
                                           <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                               <button className="btn btn-info disabled">Button</button>
                                           </div>
                                           <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                               <button className="btn btn-warning disabled">Button</button>
                                           </div>
                                           <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                               <button className="btn btn-danger disabled">Button</button>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div className="col-lg-12">
                               <div className="row">
                                   <div className="col-12 col-lg-6">
                                       <div className="button_section_align">
                                           <h5>Outline Buttons</h5>
                                           <div className="row">
                                               <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button className="btn btn-outline-secondary">Button</button>
                                               </div>
                                               <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button className="btn btn-outline-primary">Button</button>
                                               </div>
                                               <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button className="btn btn-outline-success">Button</button>
                                               </div>
                                               <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button className="btn btn-outline-info">Button</button>
                                               </div>
                                               <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button className="btn btn-outline-warning">Button</button>
                                               </div>
                                               <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button className="btn btn-outline-danger">Button</button>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="col-12 col-lg-6">
                                       <div className=" button_section_align">
                                           <h5>Rounded Buttons</h5>
                                           <div className="row">
                                               <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button className="btn btn-secondary  button-rounded">Button
                                                   </button>
                                               </div>
                                               <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button className="btn btn-primary button-rounded">Button
                                                   </button>
                                               </div>
                                               <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button className="btn btn-success  button-rounded">Button
                                                   </button>
                                               </div>
                                               <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button className="btn btn-warning button-rounded">Button
                                                   </button>
                                               </div>
                                               <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button className="btn btn-danger button-rounded">Button
                                                   </button>
                                               </div>
                                               <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 m-t-15">
                                                   <button className="btn btn-info button-rounded">Button</button>
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