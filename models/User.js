
'user strict';
var sql = require('../config/db.js');
console.log('user module is running');
//User object constructor
var User = function(user){
    this.user = user;
};


User.findOne=function findUser(userdata, result){
console.log(userdata.email);
    return new Promise( ( resolve, reject ) => {
    sql.query("Select * from user where email = ? ", userdata.email, function (err, res) {             
      if(err) {
          console.log("error user model: ", err);
          return reject( err );
      }
      else{
          
         return resolve(res);
      }
  }); 
    });  
    
  },

  User.findById=function findById(id, result){
    console.log(id);
        return new Promise( ( resolve, reject ) => {
        sql.query("Select id,name,email,profile_image from user where id = ? ", id, function (err, res) {             
          if(err) {
              console.log("error user model: ", err);
              return reject( err );
          }
          else{
              
             return resolve(res);
          }
      }); 
        });  
        
      },

  User.save= function save(newUser, result){
    return new Promise( ( resolve, reject ) => {
   sql.query("INSERT INTO user(name,email,password,status) VALUES(?,?,?,?)", Object.values(newUser), function (err, res) {

        if(err) {
       // console.log("error: ", err);
        return reject( err );
        }
        else{
       // console.log('ajajaja');
        //console.log(res.insertId);
        return resolve(res.insertId);
        
        }
        });  
    } );    
       // console.log('gjgjgjg');
       // console.log(abc);
    
  }
 

module.exports = User;