const express = require('express')
const app = express()
const port = 3000

const db = require('./db.js');

app.use(express.json());


app.delete("/customer/:id", (req, res) =>{
  const id = parseInt(req.params.id);
  db.deleteCustomer(id);
  res.sendStatus(204)
})

app.patch("/customer/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const customer = req.body;
  db.updateCustomer(id, customer);
  res.sendStatus(200);
})

app.post("/customer", (req, res) => {
  const customer = req.body;
  db.insertCustomer(customer);
  res.sendStatus(201);
})

app.get("/customer", (req, res) => {
  res.json(db.selectCustomers());
})

app.get("/customer/:id", (req, res) => {
  const id = parseInt(req.params.id)
  res.json(db.selectCustomer(id));
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})