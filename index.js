const express = require ('express');
const app = express();
const PORT = 5000;
const path = require('path')
const apiRoute = require('./routes/api')

app.use('/api', apiRoute)
app.use(express.static(path.join(__dirname,"public")))


app.listen(PORT, ()=>{
    console.log("Servidor Rogando na porta: ",PORT)
});

