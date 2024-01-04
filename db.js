const customers = [
    {
        id: 1,
        name: "Kaique",
        age: 26,
        uf: "SP"
    }
];

function selectCustomers() {
    return customers;
}

function selectCustomer(id) {
    return customers.find(c => c.id === id)
}

function insertCustomer (customer) {
    customers.push(customer);
}

function updateCustomer (id, customerData) {
    const customer = customers.find(c => c.id === id);
    customer.name = customerData.name;
    customer.age = customerData.age;
    customer.uf = customerData.uf
}

function deleteCustomer(id) {
    const index = customers.findIndex(c => c.id === id);
    customers.splice(index, 1)
}

module.exports = {
    selectCustomers,
    selectCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer
}