const express = require('express')
const app = express()

//CONTROLLER 
app.get('/',(req,res)=>{
    res.send('yo')
})

app.listen(3000)