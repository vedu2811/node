// console.log('Hello, dev');
const fs=require('fs')  // Module-1 : FILE SYSTEM
const http = require('http') // Module-2 : HTTP
const path = require('path') // Module-3 : PATH
const os=require('os') // Module-4 : OS
const url = require('url') // Module-5 : URL
const  crypto = require('crypto') // Module-6 : Crypto
const sayHello = require('./greetings') // Our own Module
const math=require('./math')
const lodash = require('lodash')

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

//////////////////////////////////////////////////
// Creating our own module

// const msg=sayHello('Developers')
// console.log(msg);

// console.log(math.add(5,6));
// console.log(math.subtract(5,6));

//////////////////////////////////////////////////
// Using a package

// const numbers=[1,2,3,4,5]
// const reverse = lodash.reverse(numbers);
// console.log(reverse);

//////////////////////////////////////////////////
// FILE STREAMS

// const readableStream = fs.createReadStream('example.txt',{encoding:'utf8'})

// readableStream.on('data',(chunk)=>{
//     console.log(chunk);
// })
// readableStream.on('end',()=>{
//     console.log('Finished Reading the file');
// })
// readableStream.on('error',(err)=>{
//     console.error('Error: ',err);
// })

// const writableStream = fs.createWriteStream('output2.txt')

// writableStream.write('Hello, ');
// writableStream.write('World!');
// writableStream.end();

// writableStream.on('finish',()=>{
//     console.log('Finished writing the file');
// })

///////////////////////////////////////////////////
// PIPING

// const readableStream=fs.createReadStream('example.txt');
// const writableStream=fs.createWriteStream('example-copy.txt');

// readableStream.pipe(writableStream);

// writableStream.on('finish',()=>{
//     console.log('File Copied Successfully');
// })

///////////////////////////////////////////////////
// Performing operations on a LARGE FILE (readline)

// const readline = require('readline') // Import
// const readableStream=fs.createReadStream('example.txt')
// const rl=readline.createInterface({input:readableStream})

// rl.on('line',(line)=>{
//     console.log('Line: ',line);
// })
// rl.on('close',()=>{
//     console.log('Finished Processing the file');
// })

///////////////////////////////////////////////////
// Working with Directories

// // Async
// fs.mkdir('newDir',(err)=>{
//     if(err){
//         return console.error('Error creating directory: ',err)
//     }
//     console.log('Directory created successfully');
// })

// // Sync
// fs.mkdirSync('newDir2')
// console.log('Directory Created Successfully');

// fs.readdir('./',(err,files)=>{
//     if(err){
//         console.err('Error reading directory')
//     }
//     console.log('directory content: ',files);
// })

// const files=fs.readdirSync('./')
// console.log('Directory Content', files);

// const dirName='newDir3'
// if(fs.existsSync(dirName)){
//     console.log('Dir Exists');
// }else{
//     console.log('Dir does not exist');
// }

// fs.rmdir('newDir2',(err)=>{
//     if(err){
//         return console.error('Error: ',err)
//     }
//     console.log('Dir removed successfully');
// })

// fs.rm('newDir',{recursive: true},(err)=>{
//     if(err){
//         return console.error('Error: ',err)
//     }
//     console.log('Dir removed successfully');
// })

// fs.rename('folder','dir',(err)=>{
//     if(err){
//         return console.error('Error: ',err)
//     }
//     console.log('Directory Renamed successfully');
// })

// fs.stat('example.txt',(err,stats)=>{
//     if(err){
//         return console.error(err);
//     }
//     console.log('Directory Stats: ',stats);
//     console.log('is Directory? : ',stats.isDirectory());
// })

// fs.watch('./',(eventType,filename)=>{
//     console.log(`Event: ${eventType}`);
//     if(filename){
//         console.log(`File name: ${filename}`);   
//     }
// })
