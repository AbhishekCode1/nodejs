const http = require('http')

const app = http.createServer((req, res)=>{ ////we will handle all the req which we get on the server

    res.end() // otherwise wo browser me loading hoti hi rahegi
})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{       //hmara server hmesa is port par start rahna chahiye


    console.log(`listening on port ${PORT}`)
})

// use command node index1 to run this file