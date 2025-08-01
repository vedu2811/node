const http=require('http')

const server = http.createServer((req,res)=>{
    // Request is POST Method
    if(req.method==='POST' && req.url==='/submit'){

        let body=''

        req.on('data',(chunk)=>{
            body+=chunk.toString()
        })

        req.on('end',()=>{
            res.writeHead(200,{'content-type':'application/json'})
            res.end(JSON.stringify({message:'Data received',data:body}))
        })

    } else{
        res.writeHead(404,{"content-type":'text/plain'})
        res.end('Route Not Found')
    }
})

const port=3000

server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})