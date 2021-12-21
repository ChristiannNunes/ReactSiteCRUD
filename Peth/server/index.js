const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db= mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'MY_PORTFOLIOfamilia@',
    database: 'employeeSystem'
})

app.post('/create', (req, res) => {
    const empresa = req.body.empresa
    const vaga = req.body.vaga
    const email = req.body.email

    db.query('insert into registros (empresa, vaga, email) values (?,?,?)', 
    [empresa, vaga, email], 
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send("Valores inseridos")
        }
    })

})

app.get('/employees', (req, res) => {
    db.query('select * from registros', 
    (err, result) => {

        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.listen(3001, () =>{
    console.log("Yey, seu servidor esta rodadando na porta 3001")
})