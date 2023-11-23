const express = require('express');
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', (re, res)=> { 
return res. json("From BAckend Side");
})

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password:'allah786',
    database: 'ecommerce',
    port: 8080,
})
app.get('/product', (req, res)=> {
    const sql = "SELECT * FROM product";
    db.query(sql, (err, data)=> {
    if(err) return res.json(err);
    return res.json(data);
    })
})
app.listen(8081, ()=> {
console.log("listening");
})

module.exports = db