const express = require("express");
const app=express();
//const path=require("path");
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use(express.static("views"));

const email1="ashnarys1320@gmail.com";
const password1="123";

/*app.post('/', (req, res) => {
    res.sendFile(path.join(__dirname , "views" ,"index.html"))
  });*/


app.post("/login" , (req,res)=>{
    const {email,password} = req.body;
    if(!(email==email1 && password==password1)){
        res.send("failed")
        
    }else
    {
        res.send("sucess")

    }
});

const PORT=process.env.PORT || 5000

app.listen(PORT,() => console.log(`Server running in ${PORT}`))


