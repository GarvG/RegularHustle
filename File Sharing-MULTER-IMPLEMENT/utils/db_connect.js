const mongoose=require('mongoose');
// db connection
const Connection=()=>{
    mongoose.connect(process.env.MONGO_URI,{useUnifiedTopology:true,useNewUrlParser:true}).then(()=>{console.log('db connected')}).catch((err)=>{console.log(err)});
}
module.exports=Connection;