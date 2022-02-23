const db = require('../db/dbConfig');

const getAllJewels = async () => {
    try {
        const jewel = await db.any('SELECT * FROM jewelry');
        return jewel
    } catch (err) {
        return err;
    }
};

const getJewel = async (id) => {
    try {
        const jewel = await db.one ("SELECT * FROM jewelry WHERE id=$1", id);
        return jewel;
    } catch (error) {
        return (error);
    }
};

const createJewelry = async (jewelry) => {
    let { name, category, description, price, image } = jewelry;
    try {
        const newJewel = await db.one (
            "INSERT INTO jewelry ( name, category, description, price ) VALUES ($1, $2, $3, $4, $5,) RETURNING * ",
            [ name, category, description, price, image ]
            );
            return newJewel;
        } catch (error) {
            return error;
        }
};

const deleteJewel = async (id) => {
    try {
        const deletedJewel = await db.one(
            "DELETE FROM jewelry WHERE id=$1 RETURNING * ",
            id
        );
        return deleteJewel;
    } catch (error) {
        return error;
    }
};


const updateJewel = async (id) => {
    try {
        let { name, category, description, price, image } = jewelry;
        const updatedJewel = await db.one(
            "UPDATE jewelry SET name=$2,  category=$3, description=$4, price=$5, image=$6 WHERE id=$1 RETURNING * ",
            [id, name, category, description, price, image]
        );
        return updatedJewel;
    } catch (error) {
        return error;
    };
}









module.exports = {
    getAllJewels,
    getJewel,
    createJewelry,
    deleteJewel,
    updateJewel,
};