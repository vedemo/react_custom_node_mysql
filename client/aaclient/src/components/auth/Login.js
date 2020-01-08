import React,{useState} from 'react';
import {connect} from 'react-redux';
import {Link,Redirect} from 'react-router-dom';
import {login} from '../../actions/auth';
import PropTypes from 'prop-types';


 const Login = ({ login ,isAuthenticated}) => {
       const [formData,setFormData]=useState({
           email:'',
           password:''
       });
       const {email,password}=formData;
       const onChange= e =>
       setFormData({...formData,[e.target.name]:e.target.value});
       
       const onSubmit= async e=>{
           e.preventDefault();
           alert('click works');
           login({email,password});
           
       }
       
       console.log('ajajaj'+isAuthenticated);
       //redirect if login
       if(isAuthenticated){
          return <Redirect  to='/dashboard' />
       }


    return (
    <section className="container">
    <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i class="fa fa-user" aria-hidden="true"></i>Sign in your Account</p>
         <form className="form" onSubmit={e => onSubmit(e) }>
      <div className="form-group">
          <input type="email" placeholder="Email Address"
           name="email"
           value={email}
           onChange={e=>onChange(e)}
           required
           />
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small>
        </div>
        <div className="form-group">
          <input type="password"  placeholder="Password" name="password" minLength="6" value={password} onChange={e=>onChange(e)}
           required
          />
        </div>
       
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        don't have an account? <Link to="/register">Sign Up</Link>
      </p>
      </section>
    )
}
Login.propTypes = {
  login:PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool
}
const mapStateToProps= state =>({
  isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{login})(Login);


