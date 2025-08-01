const http=require('http')
const url = require('url')

// Route Handler
const route = {
    '/':(req,res)=>{
        res.writeHead(200,{'content-type':'text/plain'})
        res.end('Welcome to HomePage')
    }
}

const server = http.createServer((req,res)=>{
    if(req.method==='GET' && req.url.startsWith('/search')){
        
        const queryObject=url.parse(req.url,true).query
        res.writeHead(200,
            {'content-type':'application/json',
            'custom-header':'NODE JS Server',
            'custom-tracking':'1234'
        })
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