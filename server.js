const http=require('http')
const url = require('url')

const server = http.createServer((req,res)=>{
    // Query Handling
    if(req.method==='GET' && req.url.startsWith('/search')){
        
        const queryObject=url.parse(req.url,true).query
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify({message:'Query received',queryObject}))

    } else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end('Route Not Found')
    }
})

const port=3000

server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})