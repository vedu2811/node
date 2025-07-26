// console.log('Hello, dev');
const fs=require('fs')  // Module-1 : FILE SYSTEM
const http = require('http') // Module-2 : HTTP

//////////////////////////////////////////////////
// Reading a file

// fs.readFile('example.txt','utf-8',(err,data)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data);
// })

//////////////////////////////////////////////////
// writing a new file

// const content = "Hello, NodeJs"
// fs.writeFile('output.txt',content, (err) => {
//     if(err){
//         console.error(err)
//         return;
//     }
//     console.log("File written successfully");
// })

//////////////////////////////////////////////////
// Creating a http server

// const server = http.createServer((req,res)=>{
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/plain')
//     res.end("Hello, World")
// })

// server.listen(3000,()=>{
//     console.log("Server Running at http://localhost:3000")
// })