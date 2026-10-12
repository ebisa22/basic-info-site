const http=require('node:http')
const fs=require('node:fs')
const path=require('node:path')

const server=http.createServer((req,res)=>{
     let filePath=''
     //handling css
     if(req.url=='/styles.css'){
        const filePath=path.join(__dirname,'./styles.css');
        const readStream=fs.createReadStream(filePath)
        res.setHeader('Content-Type','text/css')
        readStream.pipe(res)
        return;
     }
     switch(req.url){
      case '/':{
        filePath+='./index.html'
        res.statusCode=200
        break;
      }
      case '/about':{
        filePath+='./about.html'
        res.statusCode = 200;

        break;
      }
      
      case '/contact-me':{
        filePath+='./contact-me.html'
        res.statusCode = 200;
        break;
      }
      default:{
        filePath+='./404.html'
        res.statusCode = 200;
      }
     }
     res.setHeader('Content-Type','text/html')
     const readStream=fs.createReadStream(filePath,(err)=>{
console.log(err);
return;
     })
      readStream.pipe(res)

})

server.listen(8080,()=>{
    console.log('Listening to port 8080...')
})

server.on('connection',()=>{
    console.log('Connected to port 8080...')
})