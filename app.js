const express =require('express')
const app= express()

app.listen(3000,'localhost')
console.log("dirname " + __dirname)
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
})
app.get('/login',(req,res)=>{
    res.sendFile(__dirname + '/views/login.html')
})
app.get('/register',(req,res)=>{
    res.sendFile(__dirname + '/views/register.html')
})
app.get('*',(req,res)=>{
    
    res.sendFile(__dirname + '/public/' + req.url)
})