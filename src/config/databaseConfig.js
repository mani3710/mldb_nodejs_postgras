const { Client } = require('pg');

const client = new Client({
    host: "localhost",
    port: 5432,
    user: 'postgres',
    database: 'mldb'
});
client.connect();

module.exports = client;   