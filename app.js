const express=require('express')
const path=require('node:path')

const app=express()
const PORT=process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Listening to port ...");
});

app.on("connection", () => {
  console.log("Connected to port ...");
});

app.get('/',(req,res)=>{
  const filePath=path.join(__dirname,'./index.html')
  res.sendFile(filePath)
})

app.get('/about',(req,res)=>{
  const filePath=path.join(__dirname,'./about.html')
  res.sendFile(filePath)
})

app.get('/contact-me',(req,res)=>{
  const filePath=path.join(__dirname,'./contact-me.html')
  res.sendFile(filePath)
})

app.get('/styles.css',(req,res)=>{
  const filePath = path.join(__dirname, "./styles.css");
  res.sendFile(filePath);
})

app.use((req,res)=>{
  const filePath = path.join(__dirname, "./404.html");
  res.status(404).sendFile(filePath);
})
 

