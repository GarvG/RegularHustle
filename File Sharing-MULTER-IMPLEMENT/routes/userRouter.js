const express=require('express');
const router=express.Router();
const {uploadfile,downloadfile}=require('../controller/userController');

router.post('/uploads',uploadfile);
router.get('/download/:uuid',downloadfile);
module.exports=router;