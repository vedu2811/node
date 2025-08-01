const http=require('http')
const url = require('url')

// Route Handler
// const routes = {
//     '/':(req,res)=>{
//         res.writeHead(200,{'content-type':'text/plain'})
//         res.end('Welcome to HomePage')
//     },
//     '/about':(req,res)=>{
//         res.writeHead(200,{'content-type':'text/plain'})
//         res.end('This is About Page')
//     },
//     '/notfound':(req,res)=>{
//         res.writeHead(404,{'content-type':'text/plain'})
//         res.end('Page Not Found')
//     },
// }

const server = http.createServer((req,res)=>{
    

})

const port=3000

server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})