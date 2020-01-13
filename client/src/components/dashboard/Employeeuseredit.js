import React, { Fragment, useEffect, useState } from 'react';
import {Link,Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {setAlert} from '../../actions/alert';
import {createUserofEmployee } from '../../actions/employeeuseredit';
import Alert from '../layout/Alert';
import Spinner from '../layout/Spinner';
import   './css/style.css';

import Sidebar from './Sidebar';
import TopBanner from './TopBanner';

const Employeeuseredit = ({
    createUserofEmployee,
  setAlert,
  employeeuseredit,
  isCreated
}) => {
    
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        role:'',
        password:'',
        password2:''
    });
    const {name,email,role,password,password2}=formData;
    const onChange= e =>
    setFormData({...formData,[e.target.name]:e.target.value});
    const onSubmit= async e=>{
        e.preventDefault();
        if(password !== password2){
         setAlert('password not match','denger',3000);
        }else{
         //console.log(role,email);
         createUserofEmployee({name,email,role,password})
         
        }
        
    }

    if(employeeuseredit){
      
     return <Redirect  to='/usersetup' />
  }
 
return ( <Fragment>
 <div id="top">

     
   
</div>
<TopBanner/>
	
<div className="wrapper">

<Sidebar />

<div id="content" className="bg-container1">
    <section className="container">   
    <Alert />
      <p className="lead"><i class="fa fa-user" aria-hidden="true"></i>
           Add Your User Account</p>
    <form className="form" onSubmit={e => onSubmit(e) }>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name"
           value={name}
           onChange={e=>onChange(e)}
           
           required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address"
           name="email"
           value={email}
           onChange={e=>onChange(e)}
           required
           />
         
        </div>
        <small className="form-text"
            >Please select a role for user</small>
        <div className="form-group">
        <select name='role' 
       value={role}
       onChange={e=>onChange(e)}
      >
    <option value="0">Please Select Role</option>
       <option value="3">Normal</option>
        <option value="2">Manager</option>
        <option value="1">Administrator</option>
      </select>
     
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
           onChange={e=>onChange(e)}
           required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={e=>onChange(e)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Save" />
      </form>
      
      </section>
      </div>
      </div>
      </Fragment>
    )    
}


Employeeuseredit.propTypes = {
createUserofEmployee: PropTypes.func.isRequired,
employeeuseredit : PropTypes.object.isRequired 

};
  
const mapStateToProps = state => ({
  auth: state.auth,
  setAlert:PropTypes.func.isRequired,
  employeeuseredit :state.employeeuseredit.isCreated 
});
  
export default connect(
   mapStateToProps,
   {setAlert,createUserofEmployee }
)(Employeeuseredit);