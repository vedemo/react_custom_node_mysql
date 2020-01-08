const express=require('express');
const router= express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');


//express router validator
const { check, validationResult } = require('express-validator');

//user model  call 
const User = require('../../models/User');


// @route    POST api/users
// @desc     Register user
// @access   Public

router.get('/',(req,res)=>res.send('user route'));

router.post('/register', [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],async(req,res)=>{
     
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password,status=1 } = req.body;

        try{
            //console.log(req.body);
            let user = await User.findOne({ email });
          
            if (user && user.length) {
                return res
                  .status(400)
                  .json({ errors: [{ msg: 'User already exists' }] });
              }

                const salt = await bcrypt.genSalt(10);
                user = {
                    name,
                    email,
                    password,
                    status
                  };
                user.password = await bcrypt.hash(password, salt);
                user.status = '1';
               // console.log(user);
             let user_id=  await User.save(user);
              //console.log('asasasa'+user_id);
             const payload = {
                user: {
                  id: user_id
                }
              };
        
              jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 360000 },
                (err, token) => {
                  if (err) throw err;
                  res.json({payload,token });
                }
              );

               // res.send('user register');
        }catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
          }

});

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public



router.post('/login', [
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 3 or more characters'
  ).isLength({ min: 3 })
],async(req,res)=>{
   
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

      try{
          console.log(req.body);
          let user = await User.findOne({ email });
       // console.log(user);
          if (user.length==0) {
              return res
                .status(400)
                .json({ errors: [{ msg: 'User not found' }] });
            }else{
             //console.log(user[0].id);
             bcrypt.compare(password, user[0].password).then(isMatch => {
              if (isMatch) {
                const payload = { id: user[0].id, name: user[0].name }; // Create JWT Payload

                // Sign Token
                jwt.sign(
                  payload,
                  config.get('jwtSecret'),
                  { expiresIn: 3600 },
                  (err, token) => {
                    res.json({
                      success: true,
                      token: token
                    });
                  }
                );
              }else{
                
                return res
                .status(400)
                .json({ errors: [{ msg: 'Password not mactched'}] });
              }

            });

          }
            // Check Password
    
             // res.send('user register');
      }catch (err) {
          console.error(err.message);
          res.status(500).send('Server error in login process');
        }

});


module.exports = router;