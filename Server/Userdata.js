const express = require('express')
const mysql = require('mysql')

const router = express.Router()

const db = mysql.createConnection({
    user: 'root',
    database: 'userdata_db',
    password: 'password',
    host: 'localhost'

})
router.get('/', (req, res) => {
    res.send('hello user')
})


router.post('/register', (req, res) => {
    const { userdata } = req.body;
    console.log(userdata)
    const { name, password, dateofbirth, phonenumber, gender, email, city, state, pincode, country } = userdata
    console.log(name, password, dateofbirth, phonenumber, gender, email, city, state, pincode, country)

    db.query('insert into userData(username,passwords, dateofbirth, phonenumber, gender, email, city,state, pincode,country) values(?,?,?,?,?,?,?,?,?,?)',
        [name, password, dateofbirth, phonenumber, gender, email, city, state, pincode, country], (error, result) => {
            if (error) {
                res.status(500).send('Your Phone Number is alreay Exists')
                console.log(error)
            }
            else {
                res.status(200).send('suceessfully registered as a user')
            }
        }
    )
})

router.post('/login', (req, res) => {
    const { logindata } = req.body
    db.query('select * from userData where phonenumber=? and passwords=?', [logindata.username, logindata.passwords], (error, result) => {
        if (error) {
            console.log(error)
            res.status(500).send('An error occured please try agian')
        } else if (result.length === 0) {
            res.status(404).send('Invalid phonenumber or Password')
        }
        else {
            res.status(200).json(result)
        }
    })
})

module.exports = router