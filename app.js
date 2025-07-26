// console.log('Hello, dev');
const fs=require('fs')

// fs.readFile('example.txt','utf-8',(err,data)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data);
// })

const content = "Hello, NodeJs"

fs.writeFile('output.txt',content, (err) => {
    if(err){
        console.error(err)
        return;
    }
    console.log("File written successfully");
})