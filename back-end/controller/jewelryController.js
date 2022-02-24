const express = require('express');
const db = require('../db/dbConfig');
const { getAllJewels, getJewel, createJewelry, deleteJewel, updateJewel } = require("../queries/jewels");
const jewelry = express.Router();


jewelry.get('/', async (req, res) => {
    console.log("GET request to /jewelry");
    const jewels = await getAllJewels();
    res.status(200).json(jewels);
});

jewelry.get("/:id", async (request, response) => {
    console.log("GET request to /jewelry/:id");
    const jewel = await getJewel(request.params.id);
    response.status(200).json(jewel);
});

jewelry.post("/", async (request, response) => {
    const jewel = await createJewelry(request.body);
    response.status(200).json(jewel);
});

jewelry.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const jewel = await deleteJewel(id);
            response.status(200).json(jewel);
        } catch (error) {
            response.status(404).json("Jewel Not Found");
        }
});

jewelry.put("/:id", async (request, response) => {
    try {
        const updatedJewel = await updateJewel(request.params.id, request.body);
        response.status(200).json(updatedJewel);
    } catch (error) {
        response.status(404).json("Not Found");
    }
});




module.exports = jewelry;