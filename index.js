const PORT = 3000;
const express = require('express');
const app = express();
const posts = require('./model/posts')



app.get("/all", (req,res) =>{
    res.json(JSON.stringify(posts.getAll()))
});


app.post("/new", express.json(), (req, res)=>{
    
    let title = req.body.title;
    let = req.body.description;

    posts.newPost(title, description);
    
    res.send("Post adicionado");
})

app.listen(PORT, ()=>{
    console.log("Server running on port", PORT)
})

app.delete("/del",)