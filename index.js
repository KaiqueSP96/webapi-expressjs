const express = require('express')
const app = express()
const port = 3000

const db = require('./db.js');

app.use(express.json());


app.delete("/customer/:id", (request, response) =>{
  const id = parseInt(request.params.id);
  db.deleteCustomer(id);
  response.sendStatus(204)
})

app.patch("/customer/:id", (request, response) => {
  const id = parseInt(request.params.id)
  const customer = request.body;
  db.updateCustomer(id, customer);
  response.sendStatus(200);
})

app.post("/customer", (request, response) => {
  const customer = request.body;
  db.insertCustomer(customer);
  response.sendStatus(201);
})

app.get("/customer", (request, response) => {
  response.json(db.selectCustomers());
})

app.get("/customer/:id", (request, response) => {
  const id = parseInt(request.params.id)
  response.json(db.selectCustomer(id));
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})