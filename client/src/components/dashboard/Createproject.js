import React, { Fragment, useEffect, useState } from 'react';
import {Link,Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import   './css/style.css';
import Sidebar from './Sidebar';
import TopBanner from './TopBanner';

const EditProfile = ({
  auth:{ user}, 
}) => {
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
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});
  
export default connect(
   mapStateToProps
)(EditProfile);