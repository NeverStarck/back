const db = require('./db');
const helper = require('../helper');
const config = require('../config');



async function getComment(id){
    console.log(id)
    const rows = await db.query(
        `SELECT id, comment, user, idpost
        FROM comments
        WHERE idpost = ${id}
        `
    );
    const data = helper.emptyOrRows(rows);
    return {
        data
    }
}

module.exports = {
    getComment
};