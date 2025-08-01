const http=require('http')

const server = http.createServer((req,res)=>{
    if(req.method==='GET' && req.url==='/'){
        res.writeHead(200,{'content-type':'text/plain'})
        res.end('Welcome to HomePage')
    } else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end('Page Not Found')
    }
})

const port=3000

server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})