const express = require('express')
const cors = require('cors')
const doctordata = require('./Doctordata')
const userdata = require('./Userdata')
const bookingdata = require('./Bookingdata')


const app = express()

app.use(cors())
app.use(express.json())
app.use('/doctor', doctordata)
app.use('/user', userdata)

app.use('/booking', bookingdata)    

app.listen(5000, (req, res) => {
    console.log('server running')
})