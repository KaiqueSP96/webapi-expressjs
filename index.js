const express = require('express')
const app = express()
const port = 3000

const db = require('./db.js');

app.get("/customer", (req, res) => {
  res.json(db.selectCustomers());
})

app.get("/customer/:id", (req, res) => {
  const id = parseInt(req.params.id)
  res.json(db.selectCustomer(id));
})

app.get('/', (req, res) => {
  res.json ({
    message: "It's Alive!"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})