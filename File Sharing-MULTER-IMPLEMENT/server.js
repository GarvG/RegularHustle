const express=require('express');
const app=express();
require('dotenv').config();
const userRouter=require('./routes/userRouter');



app.use('/files',userRouter);


const PORT=process.env.PORT|| 3000
const Connection=require('./utils/db_connect');
Connection();
app.listen(PORT,(()=>{
    console.log(`server started on ${PORT}`);
}))

