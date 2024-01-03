const customers = [
    {
        id: 1,
        name: "Kaique",
        age: 26,
        uf: "SP"
    },
    {
        id: 2,
        name: "Fernanda",
        age: 30,
        uf: "SP"
    }

];

function selectCustomers() {
    return customers;
}

function selectCustomer(id) {
    return customers.find(c => c.id === id)
}

module.exports = {
    selectCustomers,
    selectCustomer
}