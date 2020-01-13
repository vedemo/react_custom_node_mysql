import React, { Fragment, useEffect, useState } from 'react';
import {Link,Redirect} from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUserofemployee } from '../../actions/profile';
import   './css/style.css';
import Sidebar from './Sidebar';
import TopBanner from './TopBanner';
//material ui
import MUIDataTable from "mui-datatables";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';

import Spinner from '../layout/Spinner';


const UserSetup = ({
  auth:{ user}, 
  setAlert,
  profile:{profile,userofemployee,loading},
  loadUserofemployee
}) => {

  useEffect(() => {
    loadUserofemployee();
  }, [loading, loadUserofemployee]);


  var  data=[];  
if(loading){
  data=[];
}else{
  if(userofemployee){
      var userofemployee_arr = userofemployee.map(function(obj) {
       // console.log(Object.keys(obj));
        return Object.keys(obj).map(function(key) { 
         //  console.log(key);
          return obj[key];
        });
      });
      console.log(userofemployee_arr);
     /* data=[
        ['aa1', "Business Analyst",  null, 77000, false],
        ['aa2', "Business Analyst",  null, 77000, false],
      ];*/
      data =   userofemployee_arr;       
  }
}


  const columns = [

   /* {
      name: "Name",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <FormControlLabel
            value={value}
            control={<TextField value={value} />}
            onChange={event => updateValue(event.target.value)}
          />
        )
      }
    },*/
    {
      name: "Name",
      options: {
        filter: false,
       
      }
    },
    {
      name: "Role",
      options: {
        filter: true,
      }
    },
    {
      name: "Active",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {

          return (
            <FormControlLabel
              label={value ? "Yes" : "No"}
              value={value ? "Yes" : "No"}
              control={
                <Switch color="primary" checked={value} value={value ? "Yes" : "No"} />
              }
              onChange={event => {
                updateValue(event.target.value === "Yes" ? false : true);
              }}
            />
          );

        }
      }
    },
    {
      name: "Action",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {
           const editurl='editemployeeuser/?id='+value;

          return (
            <Link className="nav-link" to={editurl} >
            edit
          </Link>
            
            
          );

        }
      }
    }
  ];

  

const options = {
  filterType: 'checkbox',
};

return   loading && profile===null ? <Spinner />:<Fragment>

 <div id="top">

</div>
<TopBanner/>
	
<div className="wrapper">
<Sidebar />
<div id="content" className="bg-container1">
    <section className="container">   
    <MUIDataTable 
  title={"Employee User List"} 
  data={data} 
  columns={columns} 
  options={options} 
/>
      </section>    
      </div>
      </div>
      </Fragment>;
    
}


UserSetup.propTypes = {
  loadUserofemployee: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired 
  
};
  
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile  
});
  
export default connect(
   mapStateToProps,
   { loadUserofemployee}
)(UserSetup);