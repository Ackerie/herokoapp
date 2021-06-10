const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 9000

app.use(cors())
app.use('/api', (_,res)=>{
    res.json({data:'The API is serving data!'})
})


app.listen(port,()=>{
    console.log(`Server is alive on port ${port}`)
})
console.log('its alive')
console.log(__dirname)
console.log(__filename)
console.log(process.env.USERNAME)
console.log(process.env.PORT)

