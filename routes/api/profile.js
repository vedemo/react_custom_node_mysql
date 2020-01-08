const express = require('express');
const bodyParser= require('body-parser')
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
var multer  = require('multer');

const path = require('path');


//express router validator
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');


const storage = multer.diskStorage({
  destination: path.join(__dirname, '/images/'),
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

var upload = multer({ storage: storage });


// @route    GET api/profile/userdata
// @desc     Get current users profile
// @access   Private
router.get('/userdata', auth, async (req, res) => {
  try {
   /* const profile = await Profile.findProfile({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );*/

    const profile = await Profile.findProfile(req.user.id);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.get('/',(req,res)=>res.send('profile route'));

//@router for the image upload 

router.post('/userimage', auth,upload.single('myFile'), async (req, res) => {
  try {
    
    const file = req.file; // file passed from client
    const meta = req.body; // all other values passed from the client, like name, etc..
    
  //console.log(file.originalname);
  //console.log(meta);

  if (!file) {

     return res.status(400).json({ msg: 'Please upload image' });
  }
    //res.send(file);
   
    const user_data={
      file:file.originalname,
      user_id:req.user.id
    }
    
  
    console.log(file);
    const save_image = await Profile.saveimage(user_data);
    console.log(save_image);
    if (!save_image) {
      return res.status(400).json({ msg: 'There is no profile image for this user' });
    }

    res.status(200).json({ msg: 'image uploaded',status :'true',fileUrl:'abc.png' });
  
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error in profile upload');
  }
});


// @route    PUT api/profile/userdata
// @desc     Get current users profile
// @access   Private update data
router.put('/userdata',auth, [
  check('phone', 'phone is required')
    .not()
    .isEmpty()
],async(req,res)=>{
   
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { phone,company,website } = req.body;
  const newProfile={
    phone,
    company,
    website,
    user_id:req.user.id
  }

      try{
        const profile = await Profile.findProfile(req.user.id);
        if (profile && profile.length) {
           //
           let user_profile_id=  await  Profile.Update(newProfile);
           console.log('update query'+user_profile_id);
           res.json({
            success: true,
            profile: newProfile
          });
        }else{
          //insert query
         
          let user_profile_id=  await  Profile.save(newProfile);
          console.log('insert query'+user_profile_id);
           res.json({
            success: true,
            profile: newProfile
          });
        }

             // res.send('user register');
      }catch (err) {
          console.error(err.message);
          res.status(500).send('Server error');
        }

});


module.exports = router;