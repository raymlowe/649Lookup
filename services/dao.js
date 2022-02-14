const db = require('./db');
const helper = require('../helper');
const config = require('../config');

/*
*DAO for getting all 649 results
*returns a json representation of the data
*/

async function getAllResults() {
    const rows = await db.query(
        'SELECT * FROM results where sequence_number = ($1)',
        [0]
    );
    const data = helper.emptyOrRows(rows);
    return {
        data
    }
}

module.exports = {
    getAllResults
}