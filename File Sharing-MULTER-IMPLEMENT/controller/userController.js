const express=require('express');
const multer=require('multer');
const File=require('../models/fileModel');
const {v4:uuid4}=require('uuid');

let storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'upload/')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname);
    }
})

let upload=multer({
    storage,
    limit:{fileSize:1000000*100},
}).single('testFile');
console.log(upload);



const uploadfile=async (req,res)=>{
 
   upload(req,res, async(err)=>{
        if(!req.file)
        {
            return res.status(400).json({message:"All feilds are neccessary!"})
        }
        if(err)
        {
            return res.status(500).send({error:err.message});
        }
        console.log(req.file);
        const file=new File({
            Filename:req.file.filename,
            path:req.file.path,
            size:req.file.size,
            uuid:uuid4(),
        })
        console.log(file);
        const saved=await file.save();
        return res.status(201).json({file:`${process.env.APP_BASE_URL}/files/${saved.uuid}`});

    })

}
const downloadfile=async(req,res)=>{
 const file= await File.findOne({uuid:req.params.uuid});
 if(!file)
 {
    res.status(404).json({message:`No such file found!`});

 }
 console.log(file);
 
 const filePath=`${__dirname}/../${file.path}`
 //const filepa=`${__dirname}\upload\ `
 console.log(filePath);
 res.download(filePath);
 //File Sharing-MULTER-IMPLEMENT\upload\16795499159122021-04-01.png
 //C:\Users\ROG\OneDrive\Desktop\Hustle\File Sharing-MULTER-IMPLEMENT\upload
}

module.exports={uploadfile,downloadfile}

