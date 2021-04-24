const express = require('express')

const app = express()

app.get('/', (req,res)=>{
    res.send('Chegou')
})

app.listen(3333)