const express=require('express');
const app=express();
const multer=require('multer');


const Storage=multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,Math.random()*100+"_"+file.originalname)
    console.log(file);
    }


});
const upload=multer({storage:Storage})

app.get('/',(req,res)=>{
    res.send('lets check');
})

app.post('/upload',upload.single("Image"),(req,res)=>{
res.send("uploaded");
})


app.listen(5000,(()=>{
    console.log('server Started!');
}))