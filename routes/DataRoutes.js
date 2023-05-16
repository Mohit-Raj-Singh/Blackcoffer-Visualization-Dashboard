const express = require("express");
const { DataModel } = require("../model/DataModel");
const dataRouter = express.Router();

dataRouter.get("/", async (req, res) => {
    try {
        const data = await DataModel.find();
        res.send(data);
    }
    catch (err) {
        console.log(err);
        res.send({ "msg": "wrong" })
    }
})

dataRouter.post("/create", async (req, res) => {
    const payload = req.body;
    try {
        const newData = new DataModel(payload);
        await newData.save();
        res.send("Created")
    }
    catch (err) {
        console.log(err);
        res.send({ "msg": "wrong" })
    }
})


module.exports = { dataRouter };