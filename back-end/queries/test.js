const db = require('../db/dbConfig');

const getAllTest = async () => {
    try {
        const test = await db.any('SELECT * FROM test');
        return test
    } catch (err) {
        return err;
    }
};







module.exports = {
    getAllTest,
};