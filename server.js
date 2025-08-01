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
    
    const {pathname}=url.parse(req.url)
    if(pathname.startsWith('/user/')){
        const userId = pathname.split('/')[2]
        res.writeHead(200,{'content-type':'text/plain'})
        res.end(`User Id : ${userId}`)
    }else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end('Route Not Found')
    }

})

const port=3000

server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})