const express = require ('express');
const app = express();
const PORT = 5000;
const posts = require('./model/posts')


app.use("/",express.json())

app.get("/all", (req,res) => {
    res.json(JSON.stringify(posts.getAll()))
});

app.post("/new", (req, res) => {

    let title = req.body.title
    let description = req.body.description

    posts.newPost(title, description)

    res.send("Post adicionado")

});
app.delete("/del",(req, res) => {

    let id = req.body.id
    posts.delPost(id)
    res.send("Post deletado")

})
app.listen(PORT, ()=>{
    console.log("Servidor Rogando na porta: ",PORT)
});

