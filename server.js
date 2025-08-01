const http=require('http')
const url = require('url')
const queryString=require('querystring')

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

// Middleware Function for logging requests
// const logRequest = ((req,res,next) => {
//     console.log(`${req.method} request made to ${req.url}`);
//     next(req,res)
// })

const server = http.createServer((req,res)=>{
    if(req.method==='POST' && req.url==='/submit'){
        let data =''

        req.on('data',(chunk)=>{
            data+=chunk
        })
        req.on('end',()=>{
            const parsedData=queryString.parse(data)
            res.writeHead(200,{'content-type':'application/json'})
            res.end(JSON.stringify({message:'Form data received',parsedData}))
        })
    }
})

const port=3000

server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})