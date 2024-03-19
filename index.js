const http = require('http')
const fs = require('fs')
const path = require('path') 
const app = http.createServer((req, res)=>{  //we will handle all the req which we get on the server
      
//     console.log(req.url)

//     res.writeHead(200,{
//         'content-Type':'text/HTML'
//     })

//     if(req.url ==='/'){
//         fs.readFile(path.join(__dirname,'public','index.html'),(err, content)=>{
//             if(err){
//                throw err
//             }
//             res.end(content)
   
//        })
//     }
//    else if(req.url ==='/nikita'){

//     fs.readFile(path.join(__dirname,'public','about.html'),(err, content)=>{
//         if(err){
//            throw err
//         }
//         res.end(content)

//    })
//    }
   
//     //res.end('welcome to the home page')  // responce of request
 
let filePath = path.join(__dirname, 'public', req.url === '/'?'index.html':req.url + '.html') //'.html' use kiya otherwise usko ptaa nhi chalega file ka extension

fs.readFile(filePath,(err,content)=>{
    if(err){
        fs.readFile(path.join(__dirname,'public','error.html'),(err,data)=>{
            if(err){
                res.writeHead(500)
                res.end('Error!!!')
            }else{
                res.writeHead(404,{
                    'content-type': 'text/HTML'
                })
                res.end(data)
            }
        
        })
    }else{
        res.writeHead(200,{
            'Content-Type': 'text/html'
        })
        res.end(content)

    }
})
   
   })
 
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{       //hmara server hmesa is port par start rahna chahiye


    console.log(`listening on port ${PORT}`)
})
