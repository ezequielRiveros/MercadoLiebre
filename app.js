const express =require('express')
const app= express()

app.listen(8083,'localhost')
console.log("dirname " + __dirname)
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
})
app.get('*',(req,res)=>{
    
    res.sendFile(__dirname + '/public/' + req.url)
})