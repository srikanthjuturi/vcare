const express = require('express')
const mysql = require('mysql')
const router = express.Router()



const db = mysql.createConnection({
    database: 'doctor',
    host: 'localhost',
    password: 'password',
    user: 'root'
})

db.connect((err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('your doctor database is ready to work')
    }
})

router.post('/register', (req, res) => {
    const { doctordata } = req.body
    const { name,
        password,
        dateofbirth,
        phonenumber,
        gender,
        speciality } = doctordata
       
    db.query('insert into DoctorData(doctorname,passwords,dateofbirth,phonenumber,gender,speciality) values (?,?,?,?,?,?)',
        [name, password, dateofbirth, phonenumber, gender, speciality], (error, result) => {
            if (error) {
                res.status(500).json('Server not working')
                console.log(error)
            } else if (!(result.length === 0)) {
                res.status(404).send('This number is already registered')
            }
            else {
                res.status(200).send('Registred Successfully')
            }
        })

})

router.post('/login', (req, res) => {
    const { logindata } = req.body
    console.log(logindata.passwords)

    db.query('select * from DoctorData where phonenumber=? and passwords=?', [logindata.username, logindata.passwords], (err, result) => {
        if (err) {
            res.status(500).send('database connection error')
            console.log(err)
        } else if (result.length === 0) {
            res.status(404).send('Invaild Phonenumber or Password')
        }
        else {
            res.status(200).json(result)
        }
    })
})

router.get('/doctordata', (req, res) => {
    db.query('select * from doctorData', (error, result) => {
        if (error) {
            console.log(error)
            res.status(500).send('Something is error occuring please aftersome time')
        }
        else if (result.length === 0) {
            res.status(404).send('No doctor avalible at this time')
        }
        else {
            res.status(200).json(result)
            console.log(result)
        }
    })
})

router.get('/doctordata/:id', (req, res) => {
    const id = req.params
    const finalid = id.id
    db.query('select * from doctorData where id=?', [finalid], (error, result) => {
        if (error) {
            console.log(error)
            res.status(500).send('Something is error occuring please aftersome time')
        }
        else if (result.length === 0) {
            res.status(404).send('No doctor avalible at this time')
        }
        else {
            res.status(200).json(result)
            console.log(result)
        }
    })
})

router.get('/', (req, res) => {
    res.send('hello doctor ')
})

module.exports = router