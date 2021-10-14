const express = require('express');
const router = express.Router();
const posts = require('../model/posts');
const cors = require('cors')

const options ={
    origin: "http://localhost:5000"
}

router.use(cors(options));

router.get("/all",(req,res) => {
    res.json(JSON.stringify(posts.getAll()))
});



router.use("/new",express.json(),(req,res) =>{
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title,description);

    res.send("Post adicionado")
})


  



module.exports = router; 