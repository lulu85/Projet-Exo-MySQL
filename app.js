const express = require('express')
const app = express()
const path = require('path')

// EJS
app.set('view engine','ejs')

//DOSSIER STATIC (PUBLIC)
app.use(express.static(path.join(__dirname, 'public')))

//ROUTES
const articles = require('./routes/articlesRoute')

//CONTROLLER 
app.use('/liste-des-articles', articles)

app.get('/',(req,res)=>{
    res.send('yo')
})

app.listen(3000)