const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
console.log('request coming');
const file=fs.readFileSync('sample')
});


server.listen(3000,()=>{
    console.log('server listening on port 3000');
})
