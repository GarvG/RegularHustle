const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
console.log('request coming');
// requesting file from server if there is a big file, so it is bad way!

// const file=fs.readFileSync('sample.txt');
// return res.end(file);
 
// requesting file from server if there is a big file, so it is good way! using streams

// const readablestream=fs.createReadStream('sample.txt');
// readableStram-->pipe-->writeableStream(response)
// the data from sample text will come chunk by chunk it go in buffer then through pipe we get it in writeable stream
// readablestream.pipe(res);



});


server.listen(3000,()=>{
    console.log('server listening on port 3000');
})

