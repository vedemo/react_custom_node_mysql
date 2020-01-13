const express=require('express');
const router= express.Router();
const auth =require('../../middleware/auth');
//user model  call 
const User = require('../../models/User');

// @route    POST api/auth
// @desc     Register user
// @access   Public

router.get('/', auth, async (req, res) => {
    try {
      var user_id_all='';
      console.log('auth.js'+req.user.id);
      if(req.user.id==undefined){
        user_id_all=req.user.user.id;
      }else{
        user_id_all= req.user.id;
      }
       //  console.log(req.user.user.id);
      const user = await User.findById(user_id_all);
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error in get request first' );
    }
  });



router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

module.exports = router;