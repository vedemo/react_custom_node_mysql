const express =require('express');
const app =express();
const connectDB=require('./config/db.js');
var cors = require('cors');

	
app.use(cors())

//init middeleware 
app.use(express.json({extends: false}));
app.use(express.static(__dirname));
// this use full body.request worrking parser is very needfull.

app.get('/',(req,res)=>res.send('api runing'));
app.use('/api/auth',require('./routes/api/auth.js'));

app.use('/api/users',require('./routes/api/users.js'));
app.use('/api/posts',require('./routes/api/posts.js'));
app.use('/api/profile',require('./routes/api/profile.js'));
app.use('/api/users',require('./routes/api/users.js'));


const PORT =process.env.PORT||5000;
app.listen(PORT,()=>console.log(`server started on ${PORT}`));