import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import   './css/style.css';

const TopBar =({auth:{isAuthenticated,loading},logout,   
    auth:{ user} 
  }) =>{
   
const [count, setCount] = useState(0);
const [name, setName] = useState('Flavio');
useEffect(() => {          
    console.log(`Hi ${name} you clicked ${count} times`);
},[]);
  
const alert1 = e =>{
    // alert(e)
    if(count==e){
    setCount(0);
    }else{
    setCount(e);
    } 
}  
const authLinks = (  
    <section className="top-banner">
    <div className="user-logo1">
      <img src="img/user-logo.png" alt="user-logos" />
    </div>
    <div className="banner">
       <h1>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.</h1>
    </div>
</section>
);

const guestLinks = null;

return (      
    !loading &&(<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)
)
}


























TopBar.propTypes = {
    auth: PropTypes.object.isRequired    
};
  
const mapStateToProps = state => ({
    auth: state.auth   
});
  
export default connect(
    mapStateToProps
)(TopBar);