const PORT = 3000;
const express = require('express');
const app = express();

let posts =[
    {
        id: "01",
        title: "Teste",
        description:"Descrição teste"
    },
]

app.get("/all", (req,res) =>{
    res.json(JSON.stringify(posts))
});


app.post("/new", express.json(), (req, res)=>{
    let id = generateID();
    let title = req.body.title;
    let = req.body.description;

    posts.push({id, title, description});
    res.send("Post adicionado");
})

app.listen(PORT, ()=>{
    console.log("Server running on port", PORT)
})

function generateID(){
    return Math.random().toString(36).substr(2,9);
}
