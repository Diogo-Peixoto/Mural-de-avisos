const express = require ('express');
const router = express.Router()
const posts = require('../model/posts')
const cors = require('cors')


router.use(cors())


router.use("/",express.json())

router.get("/all", (req,res) => {
    res.json(JSON.stringify(posts.getAll()))
});

router.post("/new", (req, res) => {

    let title = req.body.title
    let description = req.body.description

    posts.newPost(title, description)

    res.send("Post adicionado")

});
router.delete("/del",(req, res) => {

    let id = req.body.id
    posts.delPost(id)
    res.send("Post deletado")

})
module.exports = router;