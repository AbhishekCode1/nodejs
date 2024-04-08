// file module

const fs = require('fs')
const path = require('path')

// make a directory
// fs.mkdir(path.join(__dirname,'/test'),(error)=>{
//     if(error){
//         console.log('something went wrong')
//        return
//     }
//    console.log('folder created...')
// })

//create a file

// fs.writeFile(path.join(__dirname,'test','test.txt'),'hello node\n',(err)=>{
//   if(err){
//     throw err
//   }

// Read a file

//   fs.appendFile(path.join(__dirname,'test','test.txt'),'More data',(err)=>{
//     if(err){
//         throw err
//       }
//       console.log('data added successfully...')

//   })
//   console.log('file created...')
// })

//Read a file (readFileSync means when process file ko read karna start karegi to sari process ruk jayegi)
fs.readFile(path.join(__dirname,'test','test.txt'),(err,data)=>{
    if(err){
                 throw err
            }
          const content = Buffer.from(data)
          console.log(content.toString())
})
