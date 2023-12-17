const express = require("express");
const mensRouter = new express.Router();
const MensRanking = require("../models/menSchema");

// Create a new mens record
mensRouter.post("/mens", async (req, res) => {
    try {
        const addingMensRecords = new MensRanking(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

// Read all mens records
mensRouter.get("/mens", async (req, res) => {
    try {
        const mens = await MensRanking.find({})
        res.status(201).send(mens);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read individual mens record
mensRouter.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const men = await MensRanking.findById(_id);
        res.status(201).send(men);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Update individual mens record
mensRouter.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const men = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.status(201).send(men);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Delete individual mens record
mensRouter.delete("/mens/:id", async (req, res) => {
    try {
        const men = await MensRanking.findByIdAndDelete(req.params.id);
        res.status(201).send(men)
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = mensRouter;