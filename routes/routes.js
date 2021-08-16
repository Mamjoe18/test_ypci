const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const filename = path.join( __dirname , '../data/Client.json' );
const clients = require(filename);

// Save Client on json file
const saveClient = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(filename, stringifyData)
}

// Get client
const getClient = () => {
    const jsonData = fs.readFileSync(filename)
    return JSON.parse(jsonData)   
}

// Get all clients
router.get('/', (req, res) => {
    const clients = getClient()
    console.log(clients)
    res.send(clients)
})

// Get client by id
router.get('/:id', (req, res) => {
    var existClients = getClient()
    fs.readFile(filename, 'utf8', (err, data) => {
        const id = req.params.id;
        res.send({
            message: 'Search by Id',
            client: existClients[id]
        })
    })
})

// Add client
router.post('/add', (req, res) => {
    var existClients = getClient()
    const newClientId = Math.floor(1 + Math.random() * 90000)

    existClients[newClientId] = req.body

    saveClient(existClients);

    res.send({
        message: "saved !"
    })
})

// Update client 
router.put('/:id', (req, res) => {
    var existClients = getClient()
    fs.readFile(filename, 'utf8', (err, data) => {
        const id = req.params.id;
        existClients[id] = req.body;
        saveClient(existClients);
        res.send(`Client with id ${id} has been updated`)
    })
})

// Delete client
router.delete("/:id", (req, res) => {
    var existClients = getClient()
    fs.readFile(filename, 'utf8', (err, data) => {
        const id = req.params.id;
        delete existClients[id];
        saveClient(existClients);
        res.send(`Client with id ${id} has been deleted`)
    })
})

module.exports = router;

