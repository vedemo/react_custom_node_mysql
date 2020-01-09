import React, { Fragment,useEffect} from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';

import Myprojects from './components/dashboard/Myprojects';
import Createproject from './components/dashboard/Createproject';

import EditProfile from './components/dashboard/EditProfile';
import UserSetup from './components/dashboard/UserSetup';
import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';
//redux
import {Provider} from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import {loadUser} from './actions/auth';



if(localStorage.token){
  console.log('ap js ');
  setAuthToken(localStorage.token);
  }
const App = ()=>{
  useEffect(()=>{
    store.dispatch(loadUser());
  },[])
  return(
    <Provider store={store}>
<Router>
<Fragment>
  <Navbar />
 
  
  <Route exact path='/' component={Landing} />
  <section className="container1">
    <Alert />
    <switch>
    <Route exact path='/register' component={Register} />
    <Route exact path='/login' component={Login} />
    <PrivateRoute exact path='/dashboard' component={Dashboard} />

    <PrivateRoute exact path='/my-projects' component={Myprojects} />
    <PrivateRoute exact path='/create-project-task' component={Createproject} />

    <PrivateRoute exact path='/editProfile' component={EditProfile} />
    <PrivateRoute exact path='/usersetup' component={UserSetup} />
    </switch>
  </section>
</Fragment>
</Router>
</Provider>
  )
}


export default App;
