const bodyParser = require('body-parser')
const express = require('express')
const mysql = require('mysql')

const router = express.Router()
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bookings'
})

db.connect((e) => {
    if (e) {
        console.log('bookings database is not ready')
    }
    else {
        console.log('bookings database is ready to work')
    }
})



router.post('/doctor', (req, res) => {
    const { username, phonenumber, dateofbirth, gender, passwords, email, pincode, city, state, country, doctorphonenumber } = req.body.bookingdata
    const { bookingdetails } = req.body.bookingdata
    const dates = bookingdetails.date
    const newdate = dates.split('T')
    const finaldate1 = newdate[0]
    const mdate = dateofbirth.split('T')
    const finaldate = mdate[0]
    const slot = bookingdetails.slot

    db.query('insert into bookingdata(username,phonenumber,dateofbirth,gender,passwords,email,pincode,city,state,country,doctornumber,slot,dates)values(?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [username, phonenumber, finaldate, gender, passwords, email, pincode, city, state, country, doctorphonenumber, slot, finaldate1], (error, result) => {
            if (error) {
                console.log(error)
                res.status(500).send('An error is occured please try again')
            } else {
                res.status(200).send('Your Appointment is confrimed ! ')
            }
        })
})

router.get('/bookingdetials/:id', (req, res) => {
    const id = req.params.id
 
    db.query('select * from bookingdata where id=?', [id], (error, result) => {
        if (error) {
            res.status(500).send('failed to fetch data from the database')
        } 
        else {
            res.status(200).json(result)
        }
    })
})

router.get('/bookingdetials', (req, res) => {
 
    db.query('select * from bookingdata', (error, result) => {
        if (error) {
            res.status(500).send('failed to fetch data from the database')
            console.log(error)
        } 
        else {
            res.status(200).json(result)
        }
    })
})

router.post('/userdetails', (req, res) => {

    const { phonenumber } = req.body
    db.query('select * from bookingdata where doctornumber=?', [phonenumber], (error, result) => {
        if (error) {
            res.status(500).send('failed to fetch data from the database')
        } else if (result.length === 0) {
            res.status(404).send('You Have No Appointments Yet')
        } else {
            res.status(200).json(result)
        }
    })
})

router.post('/userbookingdetails', (req, res) => {
    const { phonenumber } = req.body
    db.query('select * from bookingdata where phonenumber=?', [phonenumber], (error, result) => {
        if (error) {
            res.status(500).send('failed to fetch data from the database')
        } else if (result.length === 0) {
            res.status(404).send('You Have No Appointments Yet')
        } else {
            res.status(200).json(result)
        }
    })
})
 

router.patch('/reseducleslot',(req,res)=>{

    const {bookingdetails} = req.body
    const {date,slot,id}=bookingdetails

    db.query('update bookingdata set dates=?, slot=? where id=?',[date,slot,id],(error,result)=>{
        if(error){
            res.status(500).send('Error to update the slot try after some time')
            console.log(error)
        }
        else{
            res.status(200).send('successfully updated your slot')
        }
    })
})


router.delete('/deleteslot/:id',(req,res)=>{
    const {id} = req.params

     db.query(`delete from bookingdata where id=${id}`,(error,result)=>{
        if(error){
            res.status(500).send('Sorry Sever is not working wait for some time')
            console.log(error)
        }else{
            res.status(200).send('Your slot is successfully deleted.')

        }
     })
})




router.patch('/completed/:status',(req,res)=>{
    const {status} = req.params
    const {phonenumber,slot,dates} =req.body.data
    console.log(status,phonenumber,slot,dates)
    db.query('update bookingdata set slotstatus=? where slot=? and dates=? and phonenumber=?',[status,slot,dates,phonenumber],(error,result)=>{
        if(error){
            res.status(500).send('Error to update the slot try after some time')
            console.log(error)
        }
        else{
            res.status(200).json(result)
        }
    })
})


module.exports = router;