const { Client } = require('pg');

const client = new Client({
    host: "localhost",
    port: 5432,
    user: 'postgres',
    database: 'projectdigital'
});
client.connect();

module.exports = client;   