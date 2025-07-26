// console.log('Hello, dev');
const fs=require('fs')  // Module-1 : FILE SYSTEM
const http = require('http') // Module-2 : HTTP
const path = require('path') // Module-3 : PATH
const os=require('os') // Module-4 : OS
const url = require('url') // Module-5 : URL
const  crypto = require('crypto') // Module-6 : Crypto

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

//////////////////////////////////////////////////
// Path Module

// const dir='/user/local'
// const fileName='example.text'

// const fullPath = path.join(dir,fileName)
// console.log(fullPath)

//////////////////////////////////////////////////
// OS Module

// console.log('Platform: ',os.platform());
// console.log('CPU Architecture: ',os.arch());
// console.log('Total Memory: ',os.totalmem());
// console.log('Free Memory: ',os.freemem());

//////////////////////////////////////////////////
// URL Module

// const myURL = new URL('https://example.com:8080/path/name?query=hello#hash')
// console.log('Host: ',myURL.host);
// console.log('Path Name: ',myURL.pathname);
// console.log('Search Params: ',myURL.searchParams.get('query'));

//////////////////////////////////////////////////
// Crypto Module

// const hash=crypto.createHash('sha256');
// hash.update('Hello World!!')
// // hash.digest('hex')
// console.log(hash.digest('hex'));
