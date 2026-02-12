const express = require('express');
const path = require('path')
let app = express();
let port = 8080;

app.use(express.static(path.join(__dirname,"/public/JS")))
app.use(express.static(path.join(__dirname,"/public/CSS")))

app.set("view engine","ejs")
 
app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.listen(port,()=>{
    console.log("App is listening...")
})

app.get("/dice",(req,res)=>{
    random = Math.floor(Math.random() * 6) + 1
    res.render("rolldice.ejs",{num:random})
})


app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json")
    console.log(instaData)
    const data = instaData[username]
    if(data){
    res.render("instagram.ejs",{data})
}else{
    res.render("error.ejs")
}
})

